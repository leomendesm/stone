import React, { Component } from 'react'
import { Showcase } from './containers'
import { Header } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Showcase sectionName="Últimos lançamentos" />
        <Showcase sectionName="Best Sellers 2018" />
      </div>
    );
  }
}

export default App
