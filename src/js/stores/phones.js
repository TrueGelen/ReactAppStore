import { observable, action, computed } from "mobx"

export default class {
	@observable phones = []
	constructor(rootStore) {
		this.api = rootStore.api.phones
	}

	@action getPhones = async () => {
		this.phones = await this.api.getPhones()
	}
}