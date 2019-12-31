import { observable, action, computed } from "mobx"


export default class {
	@observable products = {}
	constructor(rootStore) {

		this.api = rootStore.api.apiCart
		this.localStorage = rootStore.localStorage
	}

	@action getCartFromLocalStorage() {
		Object.keys(this.localStorage).forEach(id => {
			id !== 'loglevel:webpack-dev-server' ? this.products[id] = { amount: parseInt(this.localStorage.getItem(id)) } : false
		})
	}

	@computed get totalPositionsInCart() {
		return Object.keys(this.products).length
	}

	inCart(id) {
		return id in this.products
	}

	@action async addToCart(id) {
		if (!this.inCart(id)) {
			this.localStorage.setItem(id, 1)
			this.products[id] = { amount: 1 }
		}
		console.log('product added to cart')
	}

	@action async removeFromCart(id) {
		if (this.inCart(id)) {
			this.localStorage.removeItem(id)
			delete this.products[id]
		}
		console.log('product remove from cart')
	}
}