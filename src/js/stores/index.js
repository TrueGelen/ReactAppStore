import { configure } from "mobx"

configure({
	enforceActions: "always",
	computedRequiresReaction: false,
	reactionRequiresObservable: false,
	observableRequiresReaction: true,
	disableErrorBoundaries: true
})

import cartStore from './cart'
import phonesStore from './phones'
import orderStore from './order'
import TvStore from './televisions'
import TabletsStore from './tablets'

import * as phonesAPI from '../serverApiModel/phones'
import * as tabletsAPI from '../serverApiModel/tablets'
import * as tvsAPI from '../serverApiModel/televisions'
import * as cartAPI from '../serverApiModel/cart'

class RootStore {
	api
	localStorage
	cart
	phones
	order
	televisions
	tablets

	constructor() {

		this.api = {
			phonesAPI,
			tabletsAPI,
			tvsAPI,
			cartAPI
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