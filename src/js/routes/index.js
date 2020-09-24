import phones from '../pages/phones'
import tvs from '../pages/televisions'
import tablets from '../pages/tablets'
import homePage from '../pages/homePage'
import order from '../pages/order'
import cart from '../pages/cart'
import ProductPage from '../pages/product'
import Page404 from '../pages/page404'

//for dev
/* let routes = [
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
    url: '**',
    container: Page404,
  }
] */

//for github page
let routes = [
  {
    name: 'cart',
    url: '/TrueGelen/ReactAppStore/cart',
    container: cart,
    exact: true
  },
  {
    name: 'home',
    url: '/TrueGelen/ReactAppStore/',
    container: homePage,
    exact: true
  },
  {
    name: 'phones',
    url: '/TrueGelen/ReactAppStore/phones',
    container: phones,
    exact: true
  },
  {
    name: 'televisions',
    url: '/TrueGelen/ReactAppStore/televisions',
    container: tvs,
    exact: true
  },
  {
    name: 'tablets',
    url: '/TrueGelen/ReactAppStore/tablets',
    container: tablets,
    exact: true
  },
  {
    name: 'television',
    url: '/TrueGelen/ReactAppStore/televisions/:id',
    container: ProductPage,
    exact: true
  },
  {
    name: 'phone',
    url: '/TrueGelen/ReactAppStore/phones/:id',
    container: ProductPage,
    exact: true
  },
  {
    name: 'tablet',
    url: '/TrueGelen/ReactAppStore/tablets/:id',
    container: ProductPage,
    exact: true
  },
  {
    name: 'order',
    url: '/TrueGelen/ReactAppStore/order',
    container: order,
    exact: true
  },
  {
    url: '**',
    container: Page404,
  }
]

let routesMap = {}

routes.forEach(item => {
  if (item.hasOwnProperty('name')) {
    routesMap[item.name] = item.url;
  }
})

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

let urlBuilder = function (name, id) {
  if (!routesMap.hasOwnProperty(name)) {
    console.error("page doesn't exist")
    return null;
  }

  return `${routesMap[name].replace(":id", id)}`;
}

export { routes, routesMap, urlBuilder }