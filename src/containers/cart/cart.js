import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import styles from './cart.scss'

import { CartItem, CartHeader } from '../../components'
import { 
  removeFromCart,
  incrementQuantityOnCart,
  decrementQuantityOnCart } from '../../redux-flow/reducers/cart/action-creators'

const Cart = ({cart, decrementQuantityOnCart, incrementQuantityOnCart, removeFromCart}) => {
  let totalPrice = 0
  cart.forEach(m => {totalPrice += m.saleInfo.retailPrice.amount*m.quantity})
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Carrinho</h1>
        {cart.length > 0 && <CartHeader />}
        {cart.map((m, index) =>
          <CartItem
          key={index}
          title={m.volumeInfo.title}
          price={m.saleInfo.retailPrice.amount}
          quantity={m.quantity}
          decrementHandler={decrementQuantityOnCart(index)}
          incrementHandler={incrementQuantityOnCart(index)}
          removeHandler={removeFromCart(index)}
          />
        )}
        {cart.length === 0 && 
        <div className={styles.empty}>
          <p>Seu carrinho ainda está vazio! <Link to="/">Clique aqui</Link> e busque por produtos!</p>
        </div>
        }
        <div className={styles.price}>
          <h2>Preço total: R${totalPrice.toFixed(2)}</h2>
        </div>
      </div> 
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: index => () => dispatch(removeFromCart(index)),
  incrementQuantityOnCart: index => () => dispatch(incrementQuantityOnCart(index)),
  decrementQuantityOnCart: index => () => dispatch(decrementQuantityOnCart(index))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
