import React, { Component } from 'react'
import styles from './product.scss'
import { Button } from '../index'
import PropTypes from 'prop-types'
import { notify } from 'react-notify-toast'
class Product extends Component {
  constructor() {
    super();
    this.show = notify.createShowQueue();
  }
  render(){
    const {img, title, description, price, clickHandler} = this.props
    return (
      <div className={styles.product}>
        <div>
          <img alt={title} src={img} />
        </div>
        <div className={styles.content}>
          <p>{title}</p>
          <p className={styles.description}>{description}</p>
          <p>R${price}</p>
          <div onClick={() => this.show("Produto adicionado ao carrinho!","success", 1000)}>
            <Button text='Adicionar ao Carrinho' showCart={true} clickHandler={clickHandler} />
          </div>
        </div>
      </div>
    ) 
  }   
}

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
