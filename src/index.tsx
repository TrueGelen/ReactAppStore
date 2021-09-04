import '../node_modules/normalize.css/normalize.css'
import scss from './scss/main.module.scss'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
// @ts-ignore
import rootStore from './js/stores'
import { App } from './js/app/App'

//temporary import for adding items to database
// import './js/temporaryToAddData/addDataToFirebase'

//temporary import for testing authentication
// import './js/temporaryToAddData/auth_test'

//console.log(scss)

//get cart from local storage and then emb app to DOM
const cartStore = rootStore.cart
cartStore.getCartFromLocalStorage()

ReactDom.render(
	<Provider rootStore={rootStore}><App/></Provider>,
	document.querySelector('#app')
)