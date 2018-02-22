import React, { Component } from 'react'
import styles from './cart-item.scss'
import { Button } from '../index'
import PropTypes from 'prop-types'
import { notify } from 'react-notify-toast'

class CartItem extends Component {
  constructor() {
    super();
    this.show = notify.createShowQueue();
  }
  render(){
    const {title, price, quantity, decrementHandler, incrementHandler, removeHandler} = this.props
    return (
      <div className={styles.item}>
        <div className={styles.content}>
          <p>{title}</p>
        </div>
        <div className={styles.quantity}>
          <p>R${price}</p>
        </div>
        <div className={styles.quantity}>
          <Button
            onCart={true}
            text='-'
            clickHandler={decrementHandler}
            onClick={() => { this.show("Quantia alterada!","success", 1000) }} />
          <p>{quantity}</p>
          <Button
            onCart={true}
            text='+'
            clickHandler={incrementHandler}
            onClick={() => { this.show("Quantia alterada!","success", 1000) }} />          
        </div>
        <div className={styles.quantity}>  
          <p>R${(quantity * price).toFixed(2)}</p>
        </div>
        <div className={styles.quantity} onClick={() => { this.show("Produto removido do carrinho!","warning", 1000) }}>
          <Button onCart={true} text='x' clickHandler={removeHandler} />
        </div>
      </div>
    )
  }   
}

export const CartHeader = ({title, price, quantity, decrementHandler, incrementHandler, removeHandler}) => (
  <div className={styles.item}>
    <div className={styles.content}>
      <p>Nome do Produto</p>
    </div>
    <div className={styles.quantity}>
      <p>Preço Unitário</p>
    </div>
    <div className={styles.quantity}>
      <p>Quantidade</p>      
    </div>
    <div className={styles.quantity}>  
      <p>Preço</p>
    </div>
    <div className={styles.quantity}>
      Remover
    </div>
  </div>
)

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  decrementHandler: PropTypes.func.isRequired,
  incrementHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired,
}

CartItem.defaultProps = {
  img: '',
  title: '',
  description: '',
  price: 0
}

export default CartItem
