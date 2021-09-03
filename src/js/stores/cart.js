import { observable, action, makeObservable, computed } from "mobx"


export default class {
	products = {}
	// todo: не используется, разобраться почему
	// detailedProducts = []
	api = null
	localStorage = null

	constructor(rootStore) {
		makeObservable(this, {
			products: observable,
			// detailedProducts: observable,
			getCartFromLocalStorage: action,
			getDetailedProducts: action,
			addToCart: action,
			removeFromCart: action,
			changeAmount: action,
			totalPositionsInCart: computed,
			totalProductsInCart: computed,
			total: computed,
		})

		this.api = rootStore.api.cartAPI
		this.localStorage = rootStore.localStorage
	}

	getCartFromLocalStorage() {
		Object.keys(this.localStorage).forEach(id => {
			id !== 'loglevel:webpack-dev-server' ? this.products[id] = { amount: parseInt(this.localStorage.getItem(id)) } : false
		})
	}
	// todo: не используется, разобраться почему
	async getDetailedProducts() {
		await Promise.all(Object.keys(this.products).map(async id => {
			let product = await this.api.getProductById(id)
			this.products[id] = { ...product, ...this.products[id] }
			// return { ...product, amount: this.products.amount, id }
		}))
	}

	get totalPositionsInCart() {
		return Object.keys(this.products).length
	}

	get totalProductsInCart() {
		let total = 0
		for (let key in this.products) {
			total += Number(this.products[key].amount)
		}
		return total
	}

	get total() {
		return Object.keys(this.products).reduce((total, id) => {
			return total + this.products[id].price * this.products[id].amount
		}, 0)
	}

	inCart(id) {
		return id in this.products
	}

	async addToCart(id) {
		if (!this.inCart(id)) {
			this.localStorage.setItem(id, 1)
			this.products[id] = { amount: 1 }
		}
	}

	async removeFromCart(id) {
		if (this.inCart(id)) {
			this.localStorage.removeItem(id)
			delete this.products[id]
		}
	}

	async changeAmount(id, amount) {
		if (this.inCart(id)) {
			this.localStorage.setItem(id, amount)
			this.products[id] = { ...this.products[id], amount }
		}
	}
}