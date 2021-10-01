import { forEach, isNil, map } from "lodash";
import { BOOL_FILTER_TYPENAME, LIST_FILTER_TYPENAME, RANGE_FILTER_TYPENAME } from "../../utils/constants/constants";
import { BoolFilterModel, ListFilterModel, RangeFilterModel } from "./FilterModel";

export type TFilter = {
  __typename: string;
  values: (string | number | boolean)[];
};

// todo: ask адекватно ли решение? Если да, то как там с наследованием,
// тк я сейчас напрямую отдаю TProductFiltersServerData, а в наследниках буду
// отдавать более точный тип, что тогда будет? проверить
export type TProductFiltersServerData = {
  manufacturer: {
    __typename: typeof LIST_FILTER_TYPENAME;
    values: string[];
  };
  model: {
    __typename: typeof LIST_FILTER_TYPENAME;
    values: string[];
  };
  inStock: {
    __typename: typeof BOOL_FILTER_TYPENAME;
    values: boolean[];
  };
  price?: {
    __typename: typeof RANGE_FILTER_TYPENAME;
    values: [number, number];
  };
};

// export type TProductFiltersServerData = {
//   manufacturer: string[];
//   model: string[];
//   inStock: boolean[];
//   price?: [number, number];
// };

export type TProductFiltersData = {
  manufacturer: ListFilterModel;
  model: ListFilterModel;
  inStock: BoolFilterModel;
  price?: RangeFilterModel;
};

// export interface IProductFiltersModel {
//   getManufacturers: () => string[] | null;
//   getModels: () => string[] | null;
//   /**@returns массив с минимальной и максимальной ценой или null */
//   getPriceRange: () => [number, number] | null;
// }

export abstract class ProductFiltersModel<T extends TProductFiltersServerData> {
  // protected serverData: T;
  protected data: T | null = null;

  constructor(serverData: T) {
    // this.initData(serverData);
    this.data = serverData;
  }

  getAllFilters() {
    if (isNil(this.data)) {
      return null;
    }

    // type TFV<T extends TProductFiltersServerData, K extends keyof T> = {
    // 	[KEY in K]: Pick<T[KEY], "values">
    // }

    const some = {};

    forEach(this.data, (data, key) => {
      some[key] = data;
    });
  }

  // getAllFilters() {
  //   return isNil(this.data) ? null : this.data;
  // }

  // getManufacturers() {
  //   return isNil(this.data) ? null : this.data.manufacturer;
  // }

  // getModels() {
  //   return isNil(this.data) ? null : this.data.model;
  // }

  // getPriceRange() {
  //   return isNil(this.data) || isNil(this.data?.price) ? null : this.data.price;
  // }
}
