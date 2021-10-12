import type { PhoneModel } from "../models/PhoneModel";
// import { TPhoneFiltersData } from "../models/PhoneFiltersModel";
// import { ProductsFiltersApi } from "../serverApiModel/ProductFiltersApi";
import { ProductApi } from "../serverApiModel/ProductApi";
import {
	BASE_PHONE_IMAGES_URL,
	PHONES_COLLECTION_NAME_EN,
	PHONES_COLLECTION_NAME_RU,
} from "../utils/constants/constants";
// import { PhoneFiltersStore } from "./PhoneFiltersStore";
import { ProductsStore } from "./ProductsStore";

export interface IRootStore {
	phonesStore: ProductsStore<PhoneModel>;
	// getPhoneFiltersStore: () => PhoneFiltersStore;
}

/* todo: settled on 23/09/21
Остановился на том, что написал все для получения фильтров, остается только 
создать экземпляр стора фильтров в rootStore и собственно получить фильтры и 
получить фильтры в лейауте. */

// todo: получить и описать api в классе и интерфейсе и передать в сторы в конструкторе
export class RootStore implements IRootStore {
	private static _instance: RootStore | null = null
	public static get instance() {
		if (!this._instance) {
			this._instance = new RootStore()
		}

		return this._instance
	}
	// todo: спросить у Саши норм ли такая типизация? и нужен ли тут вообще интерфейс,
	// или тут класс сам себе интерфейс?
	private _phonesStore: ProductsStore<PhoneModel>;
	private ProductApi: ProductApi;
	// private productFiltersApi: ProductsFiltersApi;
	// private phoneFiltersStore: PhoneFiltersStore;

	private constructor() {
		this.ProductApi = new ProductApi();
		// this.productFiltersApi = new ProductsFiltersApi();
		// this.phoneFiltersStore = new PhoneFiltersStore(this.productFiltersApi);
		this._phonesStore = new ProductsStore(
			this,
			this.ProductApi,
			BASE_PHONE_IMAGES_URL,
			PHONES_COLLECTION_NAME_RU,
			PHONES_COLLECTION_NAME_EN
		);
	}

	get phonesStore() {
		return this._phonesStore;
	}

	// getPhoneFiltersStore() {
	// 	return this.phoneFiltersStore;
	// }
}
