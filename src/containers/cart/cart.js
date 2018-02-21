import React, { Component } from 'react'
import { Product } from '../../components'
import styles from './cart.scss'
import { connect } from 'react-redux'

import { FetchBookList } from '../../redux-flow/reducers/showcase/action-creators'

class Cart extends Component {

  render() {
    return (
      <div>
        <div className={styles.showcase}>
          {this.props.cart.map(m =>
            <Product 
              img={m.volumeInfo.imageLinks.thumbnail}
              title={m.volumeInfo.title}
              price={m.saleInfo.retailPrice.amount}
              description={m.searchInfo.textSnippet}
            />
          )}
         </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  FetchBookList: () => {
    dispatch(FetchBookList(dispatch))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
