import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './components/App'

import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)