import type { PhoneModel } from "../models/PhoneModel";
import { TPhoneFiltersData } from "../models/PhoneFiltersModel";
import { ProductsFiltersApi } from "../serverApiModel/ProductFiltersApi";
import { ProductsApi } from "../serverApiModel/ProductsApi";
import {
  BASE_PHONE_IMAGES_URL,
  PHONES_COLLECTION_NAME_EN,
  PHONES_COLLECTION_NAME_RU,
} from "../utils/constants/constants";
import { PhoneFiltersStore } from "./PhoneFiltersStore";
import { ProductsStore } from "./ProductsStore";

export interface IRootStore {
  getPhonesStore: () => ProductsStore<PhoneModel>;
  getPhoneFiltersStore: () => PhoneFiltersStore;
}

/* todo: settled on 23/09/21
Остановился на том, что написал все для получения фильтров, остается только 
создать экземпляр стора фильтров в rootStore и собственно получить фильтры и 
получить фильтры в лейауте. */

// todo: получить и описать api в классе и интерфейсе и передать в сторы в конструкторе
export class RootStore implements IRootStore {
  // todo: спросить у Саши норм ли такая типизация? и нужен ли тут вообще интерфейс,
  // или тут класс сам себе интерфейс?
  private phonesStore: ProductsStore<PhoneModel>;
  private productsApi: ProductsApi;
  private productFiltersApi: ProductsFiltersApi;
  private phoneFiltersStore: PhoneFiltersStore;
  // televisionsStore: ProductsStore<
  //   TTelevisionDescription,
  //   typeof BASE_TELEVISION_IMAGES_URL,
  //   typeof TELEVISIONS_COLLECTION_NAME_RU
  // >;

  constructor() {
    //@ts-ignore
    this.productsApi = new ProductsApi();
    this.productFiltersApi = new ProductsFiltersApi();
    this.phoneFiltersStore = new PhoneFiltersStore(this.productFiltersApi);
    this.phonesStore = new ProductsStore(
      this,
      this.productsApi,
      BASE_PHONE_IMAGES_URL,
      PHONES_COLLECTION_NAME_RU,
      PHONES_COLLECTION_NAME_EN
    );
    // this.televisionsStore = new ProductsStore(this, BASE_TELEVISION_IMAGES_URL, TELEVISIONS_COLLECTION_NAME_RU);
  }

  getPhonesStore() {
    return this.phonesStore;
  }

  getPhoneFiltersStore() {
    return this.phoneFiltersStore;
  }
}
