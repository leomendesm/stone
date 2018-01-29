import React from 'react'
import styles from '../stylesheets/components/header.scss'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'

const Header = () => (
  <div className={styles.header}> 
    <div className={styles.title}>Livraria Flip</div>
    <MdShoppingCart className={styles.cart} />
  </div>
)
 
export default Header
