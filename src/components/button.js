import React from 'react'
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart'
import styles from '../stylesheets/components/button.scss'

const Button = ({ text, clickHandler }) => (
  <div className={styles.button} onClick={clickHandler}><MdAddShoppingCart />{text}</div>
)

export default Button