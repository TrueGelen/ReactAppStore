/* lib */
import React, { useEffect } from 'react'

/* helpers */
import withStore from '../../hocs/withStore'

/* components */
import PhoneCard from '../../components/productCard/phone'
import BtnAddToCart from '../../components/buttons/btnAddToCart'

/* styles */
import moduleStyles from './phones.module.scss'
import mainStyles from '../../../scss/main.module.scss'


/* code */
function phones(props) {
  console.log('getPhones4 page')

  //phones store
  const phoneStore = props.rootStore.phones

  //get phones from server
  useEffect(() => {
    console.log('useEffect Phone page')
    phoneStore.getPhones()
  }, [])

  //array with phones
  const phones = phoneStore.phones
  //cart store
  const cart = props.rootStore.cart

  const products = phones.map(phone => {
    // console.log(phoneStore.urlToImg(phone.data().imgs[0]))
    return <PhoneCard
      key={phone.id}
      className={moduleStyles.cardStyles}
      img={{
        path: phoneStore.urlToImg(phone.data().imgs[0])
      }}
      title={{
        text: phone.data().title
      }}
    >
      <BtnAddToCart
        inCart={cart.inCart(phone.id)}
        onAdd={() => { cart.addToCart(phone.id) }}
        onRemove={() => { cart.removeFromCart(phone.id) }} />
    </PhoneCard>
  })

  //to do it's to del later
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