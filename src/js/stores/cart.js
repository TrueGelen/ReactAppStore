import { observable, action, computed } from "mobx"


export default class {
	@observable products = {}
	constructor(rootStore) {

		this.api = rootStore.api.apiCart
	}

	/* inCart(id) {
		this.products.some(product => {
			return product.id === id
		})
	} */

	@action async addToCart(id) {
		if (!(id in this.products)) {
			// const product = await this.api.getProductById(id)
			this.products[id] = { amount: 0 }
			console.log('product added to cart')
		}
	}
}