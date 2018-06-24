import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux'
import App from './components/App'
import './style.scss'

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default
  middleware = [...middleware, logger]
}

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
