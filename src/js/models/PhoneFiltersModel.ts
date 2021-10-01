import { isNil } from "lodash";
import { ProductFiltersModel, TProductFiltersServerData } from "./parentModels/ProductFiltersModel";

// export type TPhoneFiltersData = TProductFiltersServerData & {
//   diagonal: {
//     __typename: string;
//     values: number[];
//   };
//   processor: {
//     __typename: string;
//     values: string[];
//   };
//   os: {
//     __typename: string;
//     values: string[];
//   };
//   /** ["128 Гб", "128 Тб"] - строки с единицами измерения */
//   memory: {
//     __typename: string;
//     values: string[];
//   };
//   frontCamera?: {
//     __typename: string;
//     values: [number, number];
//   };
//   mainCamera?: {
//     __typename: string;
//     values: [number, number];
//   };
// };

export type TPhoneFiltersData = TProductFiltersServerData & {
  diagonal: number[];
  processor: string[];
  os: string[];
  /** ["128 Гб", "128 Тб"] - строки с единицами измерения */
  memory: string[];
  frontCamera?: [number, number];
  mainCamera?: [number, number];
};

export type TRangeFilters = Pick<TPhoneFiltersData, "frontCamera" | "mainCamera" | "price"> | null;

// todo: ask если функцию bind'ить в конструкторе, уйдет ли она из прототипа?

export class PhoneFiltersModel extends ProductFiltersModel<TPhoneFiltersData> {
  getDiagonals() {
    return isNil(this.data) ? null : this.data.diagonal;
  }

  getProcessors() {
    return isNil(this.data) ? null : this.data.processor;
  }

  getOperationSystems() {
    return isNil(this.data) ? null : this.data.os;
  }

  getMemoryFilters() {
    return isNil(this.data) ? null : this.data.memory;
  }

  /**@returns массив из 2-х элементов с мин и макс пикселями или null */
  getFrontCameraRange() {
    return isNil(this.data) || isNil(this.data?.frontCamera) ? null : this.data.frontCamera;
  }

  /**@returns массив из 2-х элементов с мин и макс пикселями или null */
  getMainCameraRange() {
    return isNil(this.data) || isNil(this.data?.mainCamera) ? null : this.data.mainCamera;
  }

  getRangeFilters() {
    if (isNil(this.data)) {
      return null;
    }

    let rangeFilters: TRangeFilters = null;

    if (!isNil(this.data?.mainCamera)) {
      rangeFilters = { frontCamera: this.data.mainCamera };
    }

    if (!isNil(this.data?.frontCamera)) {
      rangeFilters = { ...rangeFilters, mainCamera: this.data.frontCamera };
    }

    if (!isNil(this.data?.price)) {
      rangeFilters = { ...rangeFilters, price: this.data.price };
    }

    return rangeFilters;
  }

  getListFilters() {
    if (isNil(this.data)) {
      return null;
    }
  }
}
