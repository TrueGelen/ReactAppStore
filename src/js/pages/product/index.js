/* lib */
import React, { useEffect } from 'react'

/* helpers */
import withStore from '../../hocs/withStore'

// /* components */
// import PhoneCard from '../../components/productCard/phone'
// import BtnAddToCart from '../../components/buttons/btnAddToCart'

// /* styles */
// import moduleStyles from './phones.module.scss'
// import mainStyles from '../../../scss/main.module.scss'


/* code */
function ProductPage(props) {
  console.log('product page')

  //television store
  const TVStore = props.rootStore.televisions

  const id = props.match.params.id

  //get tvs from server
  useEffect(() => {
    TVStore.getTv(id)
  }, [])

  console.log("prod in prod page", TVStore.tv)

  return (
    <div>
      продукт
      {/* <p>{TVStore.tv.rest}</p> */}
    </div>
  )
}

export default withStore(ProductPage)