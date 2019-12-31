import cartStore from './cart'
import phonesStore from './phones'
import orderStore from './order'
import TvStore from './televisions'
import TabletsStore from './tablets'

import * as phones from '../serverApiModel/phones'
import * as tablets from '../serverApiModel/tablets'
import * as televisions from '../serverApiModel/televisions'
import * as apiCart from '../serverApiModel/cart'

class RootStore {
	constructor() {
		this.api = {
			phones,
			tablets,
			televisions,
			apiCart
		}

		this.localStorage = localStorage
		this.cart = new cartStore(this)
		this.phones = new phonesStore(this)
		this.order = new orderStore(this)
		this.televisions = new TvStore(this)
		this.tablets = new TabletsStore(this)
	}
}

export default new RootStore()