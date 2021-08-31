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

		//dev base url
		this.baseUrlImgs = {
			phones: '/assets/images/phones/',
			televisions: '/assets/images/televisions/',
			tablets: '/assets/images/tablets/'
		}

		// todo: наверняка можно сделать baseUrl = ReactAppStore/dist/assets/ и функцию которая бы клеила остатки к этому адресу.
		// и с помощью webpack'а менять этот baseUrl на /assets/ в зависимости от команды для сборки

		//dist base url. for gitHub page
		/* this.baseUrlImgs = {
			phones: 'ReactAppStore/dist/assets/images/phones/',
			televisions: 'ReactAppStore/dist/assets/images/televisions/',
			tablets: 'ReactAppStore/dist/assets/images/tablets/'
		} */

		this.localStorage = localStorage
		this.cart = new cartStore(this)
		this.phones = new phonesStore(this)
		this.order = new orderStore(this)
		this.televisions = new TvStore(this)
		this.tablets = new TabletsStore(this)
	}
}

export default new RootStore()