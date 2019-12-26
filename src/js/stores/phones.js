import { observable, action, computed } from "mobx"

export default class {
	@observable phones = []
	constructor(rootStore) {
		this.api = rootStore.api.phones

		this.baseUrlImgs = '/assets/imgs/phones/'
	}

	@action getPhones = async () => this.phones = await this.api.getPhones()

	urlToImg = (url) => `${this.baseUrlImgs}${url}`
	/* @action getPhones = async () => {
		this.phones = ['one', 'two', 'three']
	} */
}
