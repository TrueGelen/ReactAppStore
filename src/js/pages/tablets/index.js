/* lib */
import React, { useEffect } from 'react'

/* helpers */
import withStore from '../../hocs/withStore'
import { urlBuilder } from '../../routes'

/* components */
import LineCard from '../../components/productCard/lineCard'
import BtnAddToCart from '../../components/buttons/btnAddToCart'
import Counter from '../../components/inputs/minmax'

/* styles */
import moduleStyles from './tablet.module.scss'
import mainStyles from '../../../scss/main.module.scss'

function tablets(props) {
  console.log('Tablets page')

  //tablets store
  const tabletStore = props.rootStore.tablets

  //get tablets from server
  useEffect(() => {
    // console.log('useEffect TV page', TVStore)
    tabletStore.getTablets()
  }, [])

  //array with tablets
  const tablets = tabletStore.tablets
  //cart store
  const cart = props.rootStore.cart

  const products = tablets.map(tablet => {
    return <LineCard
      key={tablet.id}
      inCart={cart.inCart(tablet.id)}
      img={{
        path: tabletStore.urlToImg(tablet.data().imgs[0])
      }}
      title={{
        text: tablet.data().title
      }}
      price={{
        text: tablet.data().price.toString()
      }}
      description={tablet.data().description}
      labels={tabletStore.labels}
      onClick={() => { props.history.push(urlBuilder('tablet', tablet.id)) }}
      button={
        <BtnAddToCart
          addClassName={moduleStyles.button}
          inCart={cart.inCart(tablet.id)}
          onAdd={() => { cart.addToCart(tablet.id) }}
          onRemove={() => { cart.removeFromCart(tablet.id) }} />
      }
      counter={
        <Counter
          max={tablet.data().rest}
          cnt={cart.products[tablet.id] ? cart.products[tablet.id].amount : 0}
          onChange={(cnt) => { cart.changeAmount(tablet.id, cnt) }}
          className={moduleStyles.counter} />
      }
    >
    </LineCard>
  })

  return (
    <>
      <h1 className={`${mainStyles.borderRadiusBlock} ${moduleStyles.title}`}>Планшеты</h1>

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

export default withStore(tablets)