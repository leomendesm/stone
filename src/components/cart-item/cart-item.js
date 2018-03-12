import React from 'react'
import styles from './cart-item.scss'
import { Button } from '../index'
import PropTypes from 'prop-types'

const CartItem = ({title, price, quantity, decrementHandler, incrementHandler, removeHandler}) => (
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
      />
      <p>{quantity}</p>
      <Button
        onCart={true}
        text='+'
        clickHandler={incrementHandler}
      />          
    </div>
    <div className={styles.quantity}>  
      <p>R${(quantity * price).toFixed(2)}</p>
    </div>
    <div className={styles.quantity}>
      <Button onCart={true} text='x' clickHandler={removeHandler} />
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

export const CartHeader = () => (
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
