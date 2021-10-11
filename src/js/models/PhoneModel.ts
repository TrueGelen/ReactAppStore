import { PHONE_MODEL_TYPENAME } from "../utils/constants/constants";
import { ProductModel, TProductData } from "./parentModels/ProductModel";

export type TPhoneData = TProductData & {
  diagonal: number;
  processor: string;
  os: string;
  memory: {
    value: number;
    measure: string;
  };
  frontCamera?: number;
  mainCamera?: number;
  about?: string;
};

export class PhoneModel extends ProductModel<TPhoneData> {
  public static override get typename() {
    return PHONE_MODEL_TYPENAME;
  }

  get diagonal() {
    return this.data.diagonal;
  }

  get processor() {
    return this.data.processor;
  }

  get os() {
    return this.data.os;
  }

  get memory() {
    return this.data.memory;
  }

  get fullMemory() {
    return `${this.data.memory.value} ${this.data.memory.measure}`;
  }

  get frontCamera() {
    return this.data?.frontCamera ?? null;
  }

  get mainCamera() {
    return this.data?.mainCamera ?? null;
  }

  get about() {
    return this.data?.about ?? null;
  }
}
