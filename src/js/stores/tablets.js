import { observable, action, computed } from "mobx"

export default class {
	@observable tablets = []
	constructor(rootStore) {
		this.api = rootStore.api.tablets
	}

	@action getTablets = async () => {
		this.tablets = await this.api.getTablets()
	}
}