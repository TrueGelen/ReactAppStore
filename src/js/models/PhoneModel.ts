import { isNil } from "lodash";
import { PHONE_MODEL_TYPENAME } from "../utils/constants/constants";
import { ProductModel } from "./parentModels/ProductModel";

export type TPhoneDescription = {
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

export class PhoneModel extends ProductModel<TPhoneDescription> {
  public static override get typename() {
    return PHONE_MODEL_TYPENAME;
  }

  getDiagonal() {
    return this.data?.description?.diagonal ?? null;
  }

  getProcessor() {
    return this.data?.description?.processor ?? null;
  }

  getOS() {
    return this.data?.description?.os ?? null;
  }

  getMemory() {
    return this.data?.description?.memory ?? null;
  }

  getFullMemory() {
    if (isNil(this.data?.description)) {
      return null;
    }
    return `${this.data.description.memory.value} ${this.data.description.memory.measure}`;
  }

  getFrontCamera() {
    return this.data?.description?.frontCamera ?? null;
  }

  getMainCamera() {
    return this.data?.description?.mainCamera ?? null;
  }

  getAbout() {
    return this.data?.description?.about ?? null;
  }
}
