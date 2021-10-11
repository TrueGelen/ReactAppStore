import { isNil } from "lodash";

export type TProductData = {
  id: string;
  __typename: string;
  manufacturer: string;
  model: string;
  inStock: boolean;
  rest?: number;
  price?: number;
  imagesPath?: string[];
};

export interface IProductModel {
  getId: () => string;
  getManufacturer: () => string;
  getModel: () => string;
  getTitle: () => string;
  isInSock: () => boolean;
  getRest: () => number;
  getPrice: () => number | null;
  getImagesPath: () => string[] | null;
  getTypeName: () => string;
}

export abstract class ProductModel<T extends TProductData> implements IProductModel {
  protected data: T;

  public static get typename(): string | null {
    return null;
  }

  constructor(serverData: T) {
    this.data = serverData;
  }

  getId = () => String(this.data.id);
  getManufacturer = () => this.data.manufacturer;
  getModel = () => this.data.model;
  getTitle = () => `${this.getManufacturer()} ${this.getModel()}`;
  isInSock = () => this.data.inStock;
  getRest = () => (this.isInSock() && !isNil(this.data?.rest) ? this.data.rest : 0);
  getPrice = () => (isNil(this.data?.price) ? null : this.data.price);
  getImagesPath = () => this.data?.imagesPath ?? null;
  getTypeName = () => this.data.__typename;
}
