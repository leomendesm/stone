import React from 'react'
import styles from '../stylesheets/components/product.scss'
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart'
const Product = ({img, title, description, price}) => (
  <div className={styles.product}>
    <div><img alt={title} src={img} /></div>
    <div className={styles.content}>
      <p>{title}</p>
      <p>R${price}</p>
      <button><MdAddShoppingCart />Adicionar Carrinho</button>
    </div>
  </div>
)

export default Product
