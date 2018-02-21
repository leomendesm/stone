import React from 'react'
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart'
import styles from './button.scss'
import PropTypes from 'prop-types'

const Button = ({ text, clickHandler, showCart, onCart }) => {
  const buttonCss = []
  buttonCss.push(styles.button)
  if (onCart) buttonCss.push(styles.onCart)
  return (
  <div className={buttonCss.join(' ')} onClick={clickHandler}>
    {showCart && <MdAddShoppingCart className={styles.icon} />}
    {text}
  </div>
)}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  showCart: PropTypes.bool,
  onCart: PropTypes.bool,
}

Button.defaultProps = {
  showCart: false,
  onCart: false,
}

export default Button
