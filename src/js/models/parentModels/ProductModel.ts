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
	id: string;
	manufacturer: string;
	model: string;
	title: string;
	inSock: boolean;
	rest: number;
	price: number | null;
	imagesPath: string[] | null;
	typeName: string;
}

export abstract class ProductModel<T extends TProductData> implements IProductModel {
	protected data: T;

	public static get typename(): string | null {
		return null;
	}

	constructor(serverData: T) {
		this.data = serverData;
	}


	get id() {
		return String(this.data.id);
	}

	get manufacturer() {
		return this.data.manufacturer;
	}

	get model() {
		return this.data.model;
	}

	get title() {
		return `${this.manufacturer} ${this.model}`;
	}

	get inSock() {
		return this.data.inStock;
	}

	get rest() {
		return (this.inSock && !isNil(this.data?.rest) ? this.data.rest : 0);
	}

	get price() {
		return (isNil(this.data?.price) ? null : this.data.price);
	}

	get imagesPath() {
		return this.data?.imagesPath ?? null;
	}

	get typeName() {
		return this.data.__typename;
	}
}
