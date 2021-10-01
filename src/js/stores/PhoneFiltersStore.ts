import { makeObservable, observable } from "mobx";
import { TPhoneFiltersData } from "../models/PhoneFiltersModel";
import { IProductFiltersApi } from "../serverApiModel/ProductFiltersApi";
import { ProductFiltersStore } from "./parentStores/ProductFiltersStore";

export class PhoneFiltersStore extends ProductFiltersStore<TPhoneFiltersData> {
  public pickedFilters: Partial<TPhoneFiltersData> | null = null;

  constructor(api: IProductFiltersApi) {
    super(api);
    makeObservable(this, {
      pickedFilters: observable,
    });
  }

  pickedFiltersChanger() {
    return;
  }
}
