import React, { useEffect } from 'react'
import withStore from '../../hocs/withStore'

import moduleStyles from './cart.module.scss'
import mainStyles from '../../../scss/main.module.scss'

function cart(props) {
	console.log('cart')

	const cartStore = props.rootStore.cart
	const products = cartStore.products


	for (let key in products) {
		console.log(key, '========')
		for (let k in products[key]) {
			console.log(k, products[key][k])
		}
	}

	/* const PhoneStore = props.rootStore.phones

	const phones = PhoneStore.phones

	useEffect(() => {
		console.log('useEffect')
		PhoneStore.getPhones()
	}, [])

	const products = phones.map(phone => {
		// console.log(PhoneStore.urlToImg(phone.data().imgs[0]))
		return <ProductCard key={phone.id}>
			<img src={PhoneStore.urlToImg(phone.data().imgs[0])}
				className={moduleStyles.imgInCard}></img>
			<h2>{phone.data().title}</h2>
		</ProductCard>
	})

	const unrealChange = () => {
		console.log('unrealCh')

		props.rootStore.phones.phones.push('new')
	} */

	return (
		<>

			<div className={moduleStyles.test}>cart</div>
			{/* <h1 className={`${mainStyles.borderRadiusBlock} ${moduleStyles.title}`}>Мобильные телефоны</h1>

			<div className={moduleStyles.pagePhoneWrapper}>
				<div className={moduleStyles.filtersWrapper}>
					Фильтры
					<div className={moduleStyles.filter}>Какой то фильтр</div>
				</div>

				<div className={moduleStyles.productsWrapper}>
					{products}
				</div>
			</div> */}
		</>
	)
}

export default withStore(cart)