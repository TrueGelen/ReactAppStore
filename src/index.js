import '../node_modules/normalize.css/normalize.css'
import scss from './scss/main.module.scss'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import App from './js/app'
import rootStore from './js/stores'

//temporary import for adding items to database
//import './js/temporaryToAddData/addDataToFirebase'

//console.log(scss)

//get cart from local storage and then emb app to DOM
const cartStore = rootStore.cart
cartStore.getCartFromLocalStorage()

ReactDom.render(<Provider rootStore={rootStore}><App></App></Provider>, document.querySelector('#app'))