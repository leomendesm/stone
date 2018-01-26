import React, { Component } from 'react'
import { Showcase } from './containers'
import { Header } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Showcase />
      </div>
    );
  }
}

export default App
