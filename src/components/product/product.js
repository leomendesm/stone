import React from 'react'
import styles from './product.scss'
import { Button } from '../index'
import PropTypes from 'prop-types'

const Product = ({img, title, description, price}) => (
  <div className={styles.product}>
    <div><img alt={title} src={img} /></div>
    <div className={styles.content}>
      <p>{title}</p>
      <p>{description}</p>
      <p>R${price}</p>
      <Button text='Adicionar ao Carrinho' showCart={true} clickHandler={() => {}}/>
    </div>
  </div>
)

Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  img: '',
  title: '',
  description: '',
  price: 0
}

export default Product
