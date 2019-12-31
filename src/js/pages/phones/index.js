import React, { useEffect } from 'react'
import withStore from '../../hocs/withStore'
import ProductCard from '../../components/productCard'
import BtnAddToCart from '../../components/buttons/btnAddToCart'

import moduleStyles from './phones.module.scss'
import mainStyles from '../../../scss/main.module.scss'

function phones(props) {
	console.log('getPhones4 page')

	//phones store
	const phoneStore = props.rootStore.phones

	//get phones from server
	useEffect(() => {
		console.log('useEffect')
		phoneStore.getPhones()
	}, [])

	//array with phones
	const phones = phoneStore.phones

	//cart store
	const cart = props.rootStore.cart

	const products = phones.map(phone => {
		// console.log(phoneStore.urlToImg(phone.data().imgs[0]))
		return <ProductCard
			key={phone.id}
			addClassName={moduleStyles.cardStyles}>
			<img
				src={phoneStore.urlToImg(phone.data().imgs[0])}
				className={`${moduleStyles.imgInCard} ${moduleStyles.insideCardMargin}`}>
			</img>
			<h2
				className={`${moduleStyles.title} ${moduleStyles.insideCardMargin}`}>
				{phone.data().title}
			</h2>
			<BtnAddToCart
				inCart={cart.inCart(phone.id)}
				addClassName={moduleStyles.insideCardMargin}
				onAdd={() => { cart.addToCart(phone.id) }}
				onRemove={() => { cart.removeFromCart(phone.id) }} />
		</ProductCard>
	})

	const unrealChange = () => {
		console.log('unrealCh')

		props.rootStore.phones.phones.push('new')
	}

	return (
		<>
			<h1 className={`${mainStyles.borderRadiusBlock} ${moduleStyles.title}`}>Мобильные телефоны</h1>

			<div className={moduleStyles.pagePhoneWrapper}>
				<div className={moduleStyles.filtersWrapper}>
					Фильтры
					<div className={moduleStyles.filter}>Какой то фильтр</div>
				</div>

				<div className={moduleStyles.productsWrapper}>
					{products}
				</div>
			</div>
		</>
	)
}

export default withStore(phones)