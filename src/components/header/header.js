import React from 'react'
import styles from './header.scss'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'

const Header = () => (
  <header className={styles.header}> 
    <div className={styles.title}>Livraria Flip</div>
    <MdShoppingCart className={styles.cart} />
  </header>
)
 
export default Header
