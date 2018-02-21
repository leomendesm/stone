import React, { Component } from 'react'
import { Product } from '../../components'
import styles from './showcase.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { FetchBookList } from '../../redux-flow/reducers/showcase/action-creators'
import { addToCart } from '../../redux-flow/reducers/cart/action-creators'

class Showcase extends Component {
  componentWillMount(){
    this.props.FetchBookList()
  }
  render() {
    return (
      <div>
        <h2 className={styles.section}>{this.props.sectionName}</h2>
        <div className={styles.showcase}>
          {this.props.showcase.data.map(m =>
            <Product 
              img={m.volumeInfo.imageLinks.thumbnail}
              title={m.volumeInfo.title}
              price={m.saleInfo.retailPrice.amount}
              description={m.searchInfo.textSnippet}
              clickHandler={this.props.addToCart(m)}
            />
          )}
         </div>
      </div>
    )
  }
}

Product.PropTypes = {
  sectionName: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  showcase: state.showcase
})

const mapDispatchToProps = dispatch => ({
  FetchBookList: () => {
    dispatch(FetchBookList(dispatch))
  },
  addToCart: item => () => {
    dispatch(addToCart(item))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Showcase)
