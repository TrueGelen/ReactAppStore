import React, { useEffect } from 'react'
import withStore from '../../hocs/withStore'
import { urlBuilder } from '../../routes'
import PhoneCard from '../../components/productCard/phone'
import BtnAddToCart from '../../components/buttons/btnAddToCart'
import PageLayout from '../../components/pageLayouts/layout2'
import moduleStyles from './phones.module.scss'

function phones(props) {
	//phones store
	const phonesStore = props.rootStore.phones

	//get phones from server
	useEffect(() => {
		phonesStore.getProducts()
	}, [])

	//array with phones
	const phones = phonesStore.products ? phonesStore.products : []
	//cart store
	const cart = props.rootStore.cart

	const products = phones.map(phone => {
		return <PhoneCard
			key={phone.id}
			className={moduleStyles.cardStyles}
			img={{
				path: phonesStore.getImageURL(phone.data().imgs[0])
			}}
			title={{
				text: phone.data().title
			}}
			price={{
				text: phone.data().price.toString()
			}}
			onClick={() => { props.history.push(urlBuilder('phone', phone.id)) }}
			button={<BtnAddToCart
				inCart={cart.inCart(phone.id)}
				onAdd={() => { cart.addToCart(phone.id) }}
				onRemove={() => { cart.removeFromCart(phone.id) }} />}
		>
		</PhoneCard>
	})

	return (
		<PageLayout
			title={{ text: "Телефоны" }}
			products={products}
			filters={{ ...phonesStore.filters }}
			filterLabels={phonesStore.labels}
			onFilter={phonesStore.filter}
			onPriceFilter={phonesStore.rangeChanger}
		/>
	)
}

export default withStore(phones)