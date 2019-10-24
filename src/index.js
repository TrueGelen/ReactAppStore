import '../node_modules/normalize.css/normalize.css'
import scss from './scss/main.module.scss'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import App from './js/app'
import stores from './js/stores'

console.log(scss)

ReactDom.render(<Provider stores={stores}><App></App></Provider>, document.querySelector('#app'))