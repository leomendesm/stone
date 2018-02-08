import React from 'react'
import styles from '../stylesheets/components/product.scss'
import Button from './button'

const Product = ({img, title, description, price}) => (
  <div className={styles.product}>
    <div><img alt={title} src={img} /></div>
    <div className={styles.content}>
      <p>{title}</p>
      <p>R${price}</p>
      <Button text='Adicionar ao Carrinho'/>
    </div>
  </div>
)

export default Product
