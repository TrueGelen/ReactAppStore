import phones from '../pages/phones'
import tvs from '../pages/televisions'
import tablets from '../pages/tablets'
import homePage from '../pages/homePage'
import order from '../pages/order'
import cart from '../pages/cart'

let routes = [
	{
		name: 'cart',
		url: '/cart',
		container: cart,
		exact: true
	},
	{
		name: 'home',
		url: '/',
		container: homePage,
		exact: true
	},
	{
		name: 'phones',
		url: '/phones',
		container: phones,
		exact: true
	},
	{
		name: 'televisions',
		url: '/televisions',
		container: tvs,
		exact: true
	},
	{
		name: 'tablets',
		url: '/tablets',
		container: tablets,
		exact: true
	},
	{
		name: 'order',
		url: '/order',
		container: order,
		exact: true
	}
]

let routesMap = {}

routes.forEach(item => {
	if (item.hasOwnProperty('name')) {
		routesMap[item.name] = item.url;
	}
})

export { routes, routesMap }