import React, { useEffect } from 'react'
// todo: сделать
// import PropTypes from 'prop-types'
import withStore from '../../hocs/withStore'
import BtnAddToCart from '../../components/buttons/btnAddToCart'
import Counter from '../../components/inputs/minmax'
import moduleStyles from './styles.module.scss'
import mainStyles from '../../../scss/main.module.scss'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ProductPage({ button, ...props }) {
	SwiperCore.use([Navigation, Pagination, Scrollbar]);

	/* the same code also is in a component pagelayout1 in filters */
	const storeMapForPage = {
		televisions: "televisions",
		phones: "phones",
		tablets: "tablets"
	}
	// todo: разобраться, как я тут сделал получение стора, кажется странным
	const storeKey = props.match.path.substring(
		props.match.path.indexOf("/") + 1, props.match.path.lastIndexOf("/")
	)

	//product store
	const store = props.rootStore[storeMapForPage[storeKey]]

	/*---- the same code is also in a component pagelayout1 in filters ---*/

	//cart store
	const cart = props.rootStore.cart
	const id = props.match.params.id
	const product = store.product !== null ? store.product : {}

	//get product from server
	useEffect(() => {
		store.getProduct(id)
	}, [])

	let arrDescription = []

	for (let key in product.description) {
		if (key !== 'about') {
			let p = <p key={Math.random()}> {store.labels[key]}: <span>{product.description[key]}</span></p>
			arrDescription.push(p)
		}
	}

	let swiperSlides = Object.values({ ...product.imgs }).map((img) => {
		return < SwiperSlide
			key={img}
			className={moduleStyles.slide} >
			<img src={`../${store.baseImgsUrl}${img}`} />
		</SwiperSlide >
	})

	return (
		<>
			<h1 className={`${mainStyles.borderRadiusBlock} ${moduleStyles.title}`}>{product.title}</h1>

			<div className={moduleStyles.content}>

				<Swiper className={moduleStyles.slider}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					loop
					pagination={{ clickable: true }}
				>
					{swiperSlides}
				</Swiper>

				<div className={moduleStyles.description}>
					{arrDescription}
				</div>

				<div className={moduleStyles.priceBlock}>
					<p><span>цена:</span> {product.price} <span>р.</span></p>

					<Counter
						className={`${moduleStyles.counter} ${!cart.inCart(product.id) && moduleStyles.counterHide}`}
						max={product.rest}
						cnt={cart.products[product.id] ? cart.products[product.id].amount : 0}
						onChange={(cnt) => { cart.changeAmount(product.id, cnt) }} />


					<BtnAddToCart
						inCart={cart.inCart(product.id)}
						onAdd={() => { cart.addToCart(product.id) }}
						onRemove={() => { cart.removeFromCart(product.id) }} />
				</div>
			</div>

			<div className={`${moduleStyles.about}`}>
				<p className={moduleStyles.aboutTitle}>О товаре</p>
				<p>{product.description && product.description.about}</p>
			</div>
		</>
	)
}

// ProductPage.defaultProps = {
//   button: null
// }

// ProductPage.propTypes = {
//   button: PropTypes.node
// }

export default withStore(ProductPage)