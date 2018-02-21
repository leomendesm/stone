import React, { Component } from 'react'
import styles from './product.scss'
import { Button } from '../index'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';

class Product extends Component {
  notify = () => toast("Produto adicionado ao carrinho!")
  render(){
    const {img, title, description, price, clickHandler} = this.props
    return (
      <div className={styles.product}>
        <div><img alt={title} src={img} /></div>
        <div className={styles.content}>
          <p>{title}</p>
          <p className={styles.description}>{description}</p>
          <p>R${price}</p>
          <div onClick={this.notify}>
            <Button text='Adicionar ao Carrinho' showCart={true} clickHandler={clickHandler} />
          </div>
          <ToastContainer />
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
