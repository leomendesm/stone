import React from 'react'
import styles from './header.scss'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className={styles.header}> 
    <Link to="/" className={styles.title}>Livraria Flip</Link>
    <Link to="/cart" className={styles.cart}><MdShoppingCart className={styles.cart} /></Link>
  </header>
)
 
export default Header
