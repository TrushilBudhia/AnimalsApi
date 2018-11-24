import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state'
import { App } from './App'
import { injectGlobal } from 'emotion'


injectGlobal`
  html {
    background-color: #F1F1F1;
    font: 12px Roboto,arial,sans-serif
  }
`

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))

