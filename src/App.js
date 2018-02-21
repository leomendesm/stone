import React, { Component } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux-flow/reducers'
import {
  createStore,
  applyMiddleware } from 'redux'
  import { composeWithDevTools } from 'redux-devtools-extension'
import { Showcase, Cart } from './containers'
import { Header } from './components'
  
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          {/* <Showcase sectionName="Últimos lançamentos" />*/}
          <Showcase sectionName="Best Sellers 2018" /> 
          <Cart />
        </div>
      </Provider>
    );
  }
}

export default App
