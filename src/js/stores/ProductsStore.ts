// todo: вынести в константы и отдавать их в метод getImageURL
// imagesPath: string[];

import { forEach, isEmpty, isNil, map } from "lodash";
import { action, makeObservable, observable, runInAction } from "mobx";
import { PhoneModel, TPhoneData, TPhoneDescription } from "../models/PhoneModel";
import type { TProductData } from "../models/parentModels/ProductModel";
import type { ProductApi } from "../serverApiModel/ProductApi";
import { RU_LOC } from "../utils/constants/constants";
import type { TLanguage } from "../utils/Localization/Localization";
import type { IRootStore } from "./rootStore";

// todo: пока это просто функция, подумать над тем, чем это должно быть
// upd точнее посмотреть, как сделано на работе и сравнить со своей реализацией
// const getClassInstanceByTypeName = (typename: string) => {
// 	if(typename === PHONE_MODEL_TYPENAME)
// 	return new
// };

export type TProductModels = PhoneModel; /* | TabletModel | TelevisionModel*/

/** T - тип продуктов
 * P - базовый путь к картинкам */
export interface IProductsStore<T extends TProductModels> {
	getImageURL: (url: string) => string;
	requestProducts: (loc: TLanguage) => void;
	getProducts: () => T[] | null;
	getProductsAndIsProductsLoading: () => { products: T[] | null; isProductsLoading: boolean };
	isProductsLoading: boolean;
	// getProductById: TGetProductById;
	// getProductsByFilters: TGetProductsByFilters;
}

export class ProductsStore<T extends TProductModels> implements IProductsStore<T> {
	private rootStore: IRootStore;
	private api: ProductApi;
	private baseImagesPath: string;
	private rusLocCollectionName: string;
	private engLocCollectionName: string;
	private products: T[] | null = null;
	private isProductsLoadingFlag = false;

	constructor(
		rootStore: IRootStore,
		api: ProductApi,
		baseImagesPath: string,
		rusLocCollectionName: string,
		engLocCollectionName: string
	) {
		this.rootStore = rootStore;
		this.baseImagesPath = baseImagesPath;
		this.api = api;
		this.rusLocCollectionName = rusLocCollectionName;
		this.engLocCollectionName = engLocCollectionName;

		makeObservable<this, "setProducts" | "setIsProductsLoading" | "products" | "isProductsLoadingFlag">(this, {
			products: observable,
			setProducts: action,
			isProductsLoadingFlag: observable,
			setIsProductsLoading: action,
		});
	}

	get isProductsLoading() {
		return this.isProductsLoadingFlag;
	}

	getImageURL(url: string) {
		return `${this.baseImagesPath}${url}`;
	}

	async requestProducts(loc: TLanguage) {
		this.setIsProductsLoading(true);
		const collectionName = this.getCollectionNameByLoc(loc);
		const serverProducts = await this.api.getProducts(collectionName);
		const products: T[] = [];

		if (isNil(serverProducts)) {
			return null
		}

		forEach(serverProducts, (product) => {
			if (product.__typename === PhoneModel.typename) {
				// todo: ask как можно раньше спросить у Саши, как решить проблему с типами или as T это так и надо?
				// todo: settled on 11.10.21 остановился на том, что надо решить проблему с типами.
				// так то не срочно и можно идти дальше
				products.push(new PhoneModel(product as TPhoneData) as T);
			}
		});

		this.setProducts(isEmpty(products) ? null : products);
	}

	getProducts() {
		return this.products;
	}

	getProductsAndIsProductsLoading() {
		const products = this.getProducts();
		const isProductsLoading = this.isProductsLoading;
		return { products, isProductsLoading };
	}

	private setProducts(products: T[] | null) {
		if (products !== this.products) {
			this.products = products;
		}
		this.setIsProductsLoading(false);
	}

	private setIsProductsLoading(isLoading: boolean) {
		this.isProductsLoadingFlag = isLoading;
	}

	// getProductById: TGetProductById;
	// getProductsByFilters: TGetProductsByFilters;

	private getCollectionNameByLoc(loc: TLanguage) {
		if (loc === RU_LOC) {
			return this.rusLocCollectionName;
		}

		return this.engLocCollectionName;
	}
}
