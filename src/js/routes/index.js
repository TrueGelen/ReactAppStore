import phones from '../containers/phones'
import tvs from '../containers/tv'
import tablets from '../containers/tablets'
import homePage from '../containers/homePage'
import order from '../containers/order'

let routes = [
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
		name: 'tvs',
		url: '/tvs',
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