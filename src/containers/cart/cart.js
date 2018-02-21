import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import styles from './cart.scss'

import { CartItem } from '../../components'
import { 
  removeFromCart,
  incrementQuantityOnCart,
  decrementQuantityOnCart } from '../../redux-flow/reducers/cart/action-creators'

class Cart extends Component {
  render(){
    let totalPrice = 0
    this.props.cart.forEach(m => {totalPrice += m.saleInfo.retailPrice.amount*m.quantity})
    return (
      <div>
        <div className={styles.container}>
          {this.props.cart.map((m, index) =>
            <CartItem
              key={index}
              title={m.volumeInfo.title}
              price={m.saleInfo.retailPrice.amount}
              description={m.searchInfo.textSnippet}
              quantity={m.quantity}
              decrementHandler={this.props.decrementQuantityOnCart(index)}
              incrementHandler={this.props.incrementQuantityOnCart(index)}
              removeHandler={this.props.removeFromCart(index)}
            />
          )}
          <div>
            <h2>Preço total: {totalPrice.toFixed(2)}
          </div>
        </div> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: index => () => {
    dispatch(removeFromCart(index))
  },
  incrementQuantityOnCart: index => () => {
    dispatch(incrementQuantityOnCart(index))
  },
  decrementQuantityOnCart: index => () => {
    dispatch(decrementQuantityOnCart(index))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
