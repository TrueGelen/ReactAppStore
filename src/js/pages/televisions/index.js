/* lib */
import React, { useEffect } from 'react'
// import { useHistory } from "react-router-dom";

/* helpers */
import withStore from '../../hocs/withStore'

/* components */
import LineCard from '../../components/productCard/lineCard'
import BtnAddToCart from '../../components/buttons/btnAddToCart'
import Counter from '../../components/inputs/minmax'

/* styles */
import moduleStyles from './tv.module.scss'
import mainStyles from '../../../scss/main.module.scss'


function tv(props) {
  // console.log('tv page')
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

  /* let history = useHistory();

  const goTo = () => {

  } */

  // console.log(cart.products["1uy7ePmoJU1wwdxZSIRE"].amount)

  const products = TVs.map(TV => {
    // console.log(cart.products[TV.id].amount)
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
      onClick={() => { props.history.push('/product/' + TV.id) }}
      button={
        <BtnAddToCart
          addClassName={moduleStyles.button}
          inCart={cart.inCart(TV.id)}
          onAdd={() => { cart.addToCart(TV.id) }}
          onRemove={() => { cart.removeFromCart(TV.id) }} />
      }
      counter={<Counter
        max={TV.data().rest}
        cnt={cart.products[TV.id] ? cart.products[TV.id].amount : 0}
        onChange={(cnt) => { cart.changeAmount(TV.id, cnt) }}
      />}
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