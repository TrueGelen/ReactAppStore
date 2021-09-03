import { observable, action, makeObservable } from "mobx"
import { BASE_IMAGES_URL } from "../constants"

export default class {
	productsFromServer = []
	products = []
	product = null
	filters = {
		price: {
			min: 0,
			max: 0,
			range: {
				min: 0,
				max: 0
			}
		}
	}
	api = null
	baseImgsUrl = null
	labels = null

	constructor(rootStore) {
		makeObservable(this, {
			productsFromServer: observable,
			products: observable,
			product: observable,
			filters: observable,
			setFilters: action,
			rangeChanger: action,
			filter: action,
			getProducts: action,
			getProduct: action
		})

		this.api = rootStore.api.tabletsAPI
		this.baseImgsUrl = BASE_IMAGES_URL.tablets
		this.labels = {
			diagonal: "Диагональ",
			frontCamera: "Фронтальная камера (МП)",
			mainCamera: "Основная камера (МП)",
			processor: "Процессор",
			memory: "Объем памяти (Гб)",
			about: 'О товаре'
		}
	}

	setFilters = () => {
		for (let key in this.labels) {
			if (key !== "about") {
				//.map() - get all values by key and in Set we make it unique. Also find a max price
				[...new Set(this.productsFromServer.map(prod => {
					this.filters.price.max = Math.max(this.filters.price.max, Number(prod.data().price))
					this.filters.price.range.max = this.filters.price.max
					return prod.data().description[key]
				}))]
					//by key we write new obj where key is unique value and value is boolean
					.forEach(val => {
						this.filters[key] = { ...this.filters[key], [val]: true }
					})
			}
		}
	}

	rangeChanger = (values) => {
		this.filters.price.range.min = values[0]
		this.filters.price.range.max = values[1]

		this.filter()
	}

	filter = (parameter = null, value = null) => {
		this.products = [...this.productsFromServer]
		if (parameter !== null && value !== null)
			this.filters[parameter][value] = !this.filters[parameter][value]

		for (let param in this.filters) {
			this.products = this.products.filter(
				tv => Object.keys(this.filters[param])
					.some(val => {
						if (param === "price") {
							return this.filters.price.range.min <= tv.data().price && this.filters.price.range.max >= tv.data().price
						} else {
							return this.filters[param][val] && val === tv.data().description[param].toString()
						}
					})
			)
		}
	}

	getProducts = async () => {
		this.productsFromServer = await this.api.getTablets()
		this.products = [...this.productsFromServer]

		this.setFilters()
	}

	getProduct = async (id) => this.product = { id, ...await this.api.getTabletById(id) }

	getImageURL = (url) => `${this.baseImgsUrl}${url}`
}