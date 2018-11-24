import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import App from './src/components/App'
import users from './src/reducers/users'

const reducers = combineReducers({
  users
})
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
