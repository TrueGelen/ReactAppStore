/* lib */
import React, { useEffect } from 'react'

/* helpers */
import withStore from '../../hocs/withStore'

/* components */
import LineCard from '../../components/productCard/lineCard'
import BtnAddToCart from '../../components/buttons/btnAddToCart'

/* styles */
import moduleStyles from './tv.module.scss'
import mainStyles from '../../../scss/main.module.scss'


function tv(props) {
  console.log('TV page')

  //television store
  const TVStore = props.rootStore.televisions

  //get tvs from server
  useEffect(() => {
    // console.log('useEffect TV page', TVStore)
    TVStore.getTelevisions()
  }, [])

  //array with tvs
  const TVs = TVStore.televisions
  //cart store
  const cart = props.rootStore.cart

  const products = TVs.map(TV => {
    return <LineCard
      key={TV.id}
      className={moduleStyles.cardStyles}
      img={{
        path: TVStore.urlToImg(TV.data().imgs[0])
      }}
      title={{
        text: TV.data().title
      }}
      price={{
        text: TV.data().price.toString()
      }}
      description={TV.data().description}
      labels={TVStore.labels}
      button={
        <BtnAddToCart
          addClassName={moduleStyles.button}
          inCart={cart.inCart(TV.id)}
          onAdd={() => { cart.addToCart(TV.id) }}
          onRemove={() => { cart.removeFromCart(TV.id) }} />
      }
    >
    </LineCard>
  })

  return (
    <>
      <h1 className={`${mainStyles.borderRadiusBlock} ${moduleStyles.title}`}>Телевизоры</h1>

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

export default withStore(tv)