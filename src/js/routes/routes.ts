// @ts-ignore
import phones from '../pages/phones'
// @ts-ignore
import tvs from '../pages/televisions'
// @ts-ignore
import tablets from '../pages/tablets'
// @ts-ignore
import homePage from '../pages/homePage'
// @ts-ignore
import order from '../pages/order'
// @ts-ignore
import cart from '../pages/cart'
// @ts-ignore
import ProductPage from '../pages/product'
// @ts-ignore
import Page404 from '../pages/page404'
import type { TRout, TRoutMap } from './routes.types'

export const routes: TRout[] = [
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
		name: 'television',
		url: '/televisions/:id',
		container: ProductPage,
		exact: true
	},
	{
		name: 'phone',
		url: '/phones/:id',
		container: ProductPage,
		exact: true
	},
	{
		name: 'tablet',
		url: '/tablets/:id',
		container: ProductPage,
		exact: true
	},
	{
		name: 'order',
		url: '/order',
		container: order,
		exact: true
	},
	{
		name: '404',
		url: '**',
		container: Page404,
		exact: true
	}
]

const getRoutsMap = (routes: TRout[]): TRoutMap => {
	const map: TRoutMap = {}

	routes.forEach(item => {
		if (item.hasOwnProperty('name')) {
			map[item.name] = item.url;
		}
	})

	return map
}

export const routesMap: TRoutMap = getRoutsMap(routes)

/* let urlBuilder = function (name, params) {
	if (!routesMap.hasOwnProperty(name)) {
		return null;
	}

	let url = routesMap[name]; // news/:id

	for (let key in params) {
		console.log('urlBuilder', key)
		url = url.replace(':' + key, params[key]);
	}

	return url;
} */

export const urlBuilder = (name: string, id: string): string => {
	if (!routesMap.hasOwnProperty(name)) {
		console.error("page doesn't exist")
		return null;
	}

	return `${routesMap[name].replace(":id", id)}`;
}