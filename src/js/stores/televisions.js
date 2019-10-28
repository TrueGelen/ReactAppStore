import { observable, action, computed } from "mobx"

export default class {
	@observable televisions = []
	constructor(rootStore) {
		this.api = rootStore.api.televisions
	}

	@action getTelevisions = async () => {
		this.televisions = await this.api.getTelevisions()
	}
}