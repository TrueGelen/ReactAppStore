// export const BASE_IMAGES_URL = {
// 	phones: '/assets/images/phones/',
// 	televisions: '/assets/images/televisions/',
// 	tablets: '/assets/images/tablets/'
// }

export const BASE_IMAGES_URL = {
	phones: 'ReactAppStore/dist/assets/images/phones/',
	televisions: 'ReactAppStore/dist/assets/images/televisions/',
	tablets: 'ReactAppStore/dist/assets/images/tablets/'
}

// todo: наверняка можно сделать baseUrl = ReactAppStore/dist/assets/ и функцию которая бы клеила остатки к этому адресу.
// и с помощью webpack'а менять этот baseUrl на /assets/ в зависимости от команды для сборки