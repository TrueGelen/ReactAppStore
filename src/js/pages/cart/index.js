import React, { useEffect } from 'react'
import withStore from '../../hocs/withStore'
import BtnAddToCart from '../../components/buttons/btnAddToCart'

import moduleStyles from './cart.module.scss'
import mainStyles from '../../../scss/main.module.scss'

function cart(props) {
  console.log('cart page=========\n')

  const cartStore = props.rootStore.cart
  // const products = cartStore.products

  // console.log(products)
  // for (let key in products) {
  //   console.log(key, '========')
  //   for (let k in products[key]) {
  //     console.log(k, products[key][k])
  //     // console.log(k, products[key][k])
  //   }
  // }

  useEffect(() => {
    console.log('useEffect from cart page')
    // cartStore.getDetailedProducts()
    cartStore.getDetailedProducts()
    console.log('=============after=============', cartStore.products)
  }, [])

  const products = Object.keys(cartStore.products).map(id => {
    // console.log('id:', id)
    // console.log('title:', cartStore.products[id].title)
    // console.log('price:', cartStore.products[id].price)
    // console.log('amount:', cartStore.products[id].amount)
    // console.log('rest:', cartStore.products[id].rest)
    // console.log('imgs:', cartStore.products[id].imgs)
    return <div className={moduleStyles.product} key={id}>
      {cartStore.products[id].imgs ?
        <img className={moduleStyles.img} src={`assets/imgs/phones/${cartStore.products[id].imgs[0]}`} /> :
        false}
      <p className={moduleStyles.productName}>{cartStore.products[id].title}</p>
      <p className={moduleStyles.price}>{cartStore.products[id].price}</p>
      {/* it needs to be here a count component */}
      <BtnAddToCart
        inCart={cartStore.inCart(id)}
        // addClassName={moduleStyles.insideCardMargin}
        // onAdd={() => { cartStore.addToCart(phone.id) }}
        onRemove={() => { cartStore.removeFromCart(id) }}>
        X
        </BtnAddToCart>
    </div>
  })

  return (
    <>
      <p className={moduleStyles.total}>{cartStore.total}</p>
      <h2 className={moduleStyles.title}>У вас в корзине:</h2>
      <div className={moduleStyles.products}>
        {products}
      </div>
    </>
  )
}

export default withStore(cart)