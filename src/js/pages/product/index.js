/* lib */
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

/* helpers */
import withStore from '../../hocs/withStore'

// /* components */
// import PhoneCard from '../../components/productCard/phone'
import BtnAddToCart from '../../components/buttons/btnAddToCart'

// /* styles */
import moduleStyles from './styles.module.scss'
import mainStyles from '../../../scss/main.module.scss'

/* swiper */
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

/* code */
function ProductPage({ button, ...props }) {
  console.log('Page ProductPage')

  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  //television store
  const TVStore = props.rootStore.televisions
  //cart store
  const cart = props.rootStore.cart

  const id = props.match.params.id

  const tv = TVStore.tv !== null ? TVStore.tv : {}

  //get tvs from server
  useEffect(() => {
    TVStore.getTv(id)
  }, [])

  let arrDescription = []

  for (let key in tv.description) {
    if (key !== 'about') {
      let p = <p key={Math.random()}>{TVStore.labels[key]}: <span>{tv.description[key]}</span></p>
      arrDescription.push(p)
    }
  }

  return (
    <>
      <h1 className={`${mainStyles.borderRadiusBlock} ${moduleStyles.title}`}>{tv.title}</h1>

      <div className={moduleStyles.content}>

        <Swiper className={moduleStyles.slider}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={moduleStyles.slide}><img src={'/assets/imgs/televisions/' + { ...tv.imgs }[0]}></img></SwiperSlide>
          <SwiperSlide className={moduleStyles.slide}><img src={'/assets/imgs/televisions/' + { ...tv.imgs }[1]}></img></SwiperSlide>
        </Swiper>

        <div className={moduleStyles.description}>
          {arrDescription}
        </div>

        <div className={moduleStyles.priceBlock}>
          <p><span>цена:</span> {tv.price} <span>₽</span></p>
          <BtnAddToCart
            // addClassName={moduleStyles.button}
            inCart={cart.inCart(tv.id)}
            onAdd={() => { cart.addToCart(tv.id) }}
            onRemove={() => { cart.removeFromCart(tv.id) }} />
        </div>
      </div>

      <div className={`${moduleStyles.content} ${moduleStyles.about}`}>
        <p>{tv.description ? tv.description.about : false}</p>
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