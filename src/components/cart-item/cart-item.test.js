import React from 'react'
import ReactDOM from 'react-dom'
import CartItem, {CartHeader} from './cart-item'
describe('<CartItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <CartItem 
      title="Test"
      price={1}
      quantity={0}
      decrementHandler={()=>{}}
      incrementHandler={()=>{}}
      removeHandler={()=>{}} 
    />, div)
  })
})

describe('<CartHeader />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CartHeader />, div)
  })
})
