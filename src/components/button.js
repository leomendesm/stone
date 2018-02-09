import React from 'react'
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart'
import styles from '../stylesheets/components/button.scss'
import PropTypes from 'prop-types'

const Button = ({ text, clickHandler, showCart }) => (
<div className={styles.button} onClick={clickHandler}>{showCart && <MdAddShoppingCart />}{text}</div>
)

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  showCart: PropTypes.bool
}

Button.defaultProps = {
  showCart: false
}

export default Button
