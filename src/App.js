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
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
        <Router>
          <div>
            <Header />
            <Route exact path={'/'} component={Showcase} />
            <Route exact path={'/cart'} component={Cart} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
