import React, { useEffect } from 'react'
import withStore from '../../hocs/withStore'
import { urlBuilder } from '../../routes/routes'
import LineCard from '../../components/productCard/lineCard'
import BtnAddToCart from '../../components/buttons/btnAddToCart'
import Counter from '../../components/inputs/minmax'
import PageLayout from '../../components/pageLayouts/layout1'
import moduleStyles from './tv.module.scss'


function tv(props) {
	//television store
	const TVStore = props.rootStore.televisions

	//get tvs from server
	useEffect(() => {
		TVStore.getProducts()
	}, [])

	//array with tvs
	const TVs = TVStore.products ? TVStore.products : []
	//cart store
	const cart = props.rootStore.cart

	const products = TVs.map(TV => {
		return <LineCard
			key={TV.id}
			inCart={cart.inCart(TV.id)}
			img={{
				path: TVStore.getImageURL(TV.data().imgs[0])
			}}
			title={{
				text: TV.data().title
			}}
			price={{
				text: TV.data().price.toString()
			}}
			description={TV.data().description}
			labels={TVStore.labels}
			// onClick={() => { props.history.push(`/product/` + TV.id) }}
			// onClick={() => { props.history.push('/product/' + TV.id) }}
			onClick={() => { props.history.push(urlBuilder('television', TV.id)) }}
			button={
				<BtnAddToCart
					inCart={cart.inCart(TV.id)}
					onAdd={() => { cart.addToCart(TV.id) }}
					onRemove={() => { cart.removeFromCart(TV.id) }} />
			}
			counter={<Counter
				max={TV.data().rest}
				cnt={cart.products[TV.id] ? cart.products[TV.id].amount : 0}
				onChange={(cnt) => { cart.changeAmount(TV.id, cnt) }}
				className={moduleStyles.counter} />
			}
		>
		</LineCard>
	})

	return (
		<PageLayout
			title={{ text: "Телевизоры" }}
			products={products}
			filters={{ ...TVStore.filters }}
			filterLabels={TVStore.labels}
			onFilter={TVStore.filter}
			onPriceFilter={TVStore.rangeChanger}
		/>
	)
}

export default withStore(tv)