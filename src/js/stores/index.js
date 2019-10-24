import cartStore from './cart'
import phonesStore from './phones'
import orderStore from './order'
import TvStore from './order'
import TabletsStore from './order'

class RootStore {
	constructor() {
		this.cart = new cartStore(this)
		this.phones = new phonesStore(this)
		this.order = new orderStore(this)
		this.tvs = new TvStore(this)
		this.tablets = new TabletsStore(this)
	}
}

export default new RootStore()