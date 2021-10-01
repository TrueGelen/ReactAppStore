import { action, makeObservable, observable } from "mobx";
import { TProductFiltersServerData } from "../../models/parentModels/ProductFiltersModel";
import { IProductFiltersApi } from "../../serverApiModel/ProductFiltersApi";
import { FILTERS_COLLECTION_NAME, PHONE_FILTERS_DOC_NAME } from "../../utils/constants/constants";

export abstract class ProductFiltersStore<T extends TProductFiltersServerData> {
  private api: IProductFiltersApi;
  private viewFilters: T | null = null;
  private isFiltersLoadingFlag = false;

  constructor(api: IProductFiltersApi) {
    this.api = api;
    makeObservable<this, "setViewFilters" | "setIsFiltersLoading" | "viewFilters" | "isFiltersLoadingFlag">(this, {
      viewFilters: observable,
      setViewFilters: action,
      isFiltersLoadingFlag: observable,
      setIsFiltersLoading: action,
    });
  }

  get isFiltersLoading() {
    return this.isFiltersLoadingFlag;
  }

  async requestFilters() {
    this.setIsFiltersLoading(true);
    const viewFilters = await this.api.getProductFilters(FILTERS_COLLECTION_NAME, PHONE_FILTERS_DOC_NAME);
    this.setViewFilters(viewFilters as T | null);
  }

  getViewFiltersAndIsFiltersLoading() {
    const viewFilters = this.viewFilters;
    const isFiltersLoading = this.isFiltersLoading;
    return { viewFilters, isFiltersLoading };
  }

  private setViewFilters(viewFilters: T | null) {
    if (viewFilters !== this.viewFilters) {
      this.viewFilters = viewFilters;
    }
    this.setIsFiltersLoading(false);
  }

  private setIsFiltersLoading(isLoading: boolean) {
    this.isFiltersLoadingFlag = isLoading;
  }
}
