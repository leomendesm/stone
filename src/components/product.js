import React from 'react'
import styles from '../stylesheets/components/product.scss'
import Button from './button'
import PropTypes from 'prop-types'

const Product = ({img, title, description, price}) => (
  <div className={styles.product}>
    <div><img alt={title} src={img} /></div>
    <div className={styles.content}>
      <p>{title}</p>
      <p>{description}</p>
      <p>R${price}</p>
      <Button text='Adicionar ao Carrinho' showCart={true} />
    </div>
  </div>
)

Product.PropTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

Product.defaultProps = {
  img: '',
  title: '',
  description: '',
  price: ''
}

export default Product
