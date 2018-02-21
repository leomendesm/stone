import React, { Component } from 'react'
import styles from './cart-item.scss'
import { Button } from '../index'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';

class CartItem extends Component {
  notify = () => toast("Produto removido do carrinho!");
  render(){
    const {title, description, price, quantity, decrementHandler, incrementHandler, removeHandler} = this.props
    return (
      <div className={styles.item}>
        <div className={styles.content}>
          <p>{title}</p>
        </div>
        <div className={styles.content}>
          <p>R${price}</p>
        </div>
        <div className={styles.quantity}>
          <Button onCart={true} text='-' clickHandler={decrementHandler} />
          <p>{quantity}</p>
          <Button onCart={true} text='+' clickHandler={incrementHandler} />          
        </div>
        <div className={styles.content}>  
          <p>R${(quantity * price).toFixed(2)}</p>
        </div>
        <div className={styles.content} onClick={this.notify}>
          <Button onCart={true} text='x' clickHandler={removeHandler} />
        </div>
        <ToastContainer />
      </div>
    )
  }   
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

CartItem.defaultProps = {
  img: '',
  title: '',
  description: '',
  price: 0
}

export default CartItem
