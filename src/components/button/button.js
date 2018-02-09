import React from 'react'
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart'
import styles from './button.scss'
import PropTypes from 'prop-types'

const Button = ({ text, clickHandler, showCart }) => (
  <div className={styles.button} onClick={clickHandler}>
    {showCart && <MdAddShoppingCart className={styles.icon} />}
    {text}
  </div>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  showCart: PropTypes.bool
}

Button.defaultProps = {
  showCart: false
}

export default Button
