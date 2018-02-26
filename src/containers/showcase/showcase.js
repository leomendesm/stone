import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import styles from './showcase.scss'

import { Product } from '../../components'
import { FetchBookList } from '../../redux-flow/reducers/showcase/action-creators'
import { addToCart } from '../../redux-flow/reducers/cart/action-creators'

class Showcase extends Component {
  componentWillMount(){
    this.props.FetchBookList()
  }
  render() {
    return (
      <div>
        <h1 className={styles.section}>{this.props.sectionName}</h1>
        <div className={styles.showcase}>
          {this.props.showcase.data.map((m, index) =>
            <Product
              key={index}
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

Showcase.PropTypes = {
  sectionName: PropTypes.string
}

Showcase.defaultProps = {
  sectionName: 'Livros mais vendidos',
  FetchBookList: () => {},
  showcase: {
    data: [{
      "volumeInfo": {
        "title": "UX Design Process",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=v-8ztNSkac8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=v-8ztNSkac8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
      },
      "saleInfo": {
          "retailPrice": {
              "amount": 11.13
          }
      },
      "searchInfo": {
        "textSnippet": "In this book, you’ll learn how lean UX has made the whole discipline more approachable and attractive to startups, and you’ll see that UX issues aren’t just a quick fix, but should also address big-picture issues."
      }
    }]
  }
}

const mapStateToProps = state => ({
  showcase: state.showcase
})

const mapDispatchToProps = dispatch => ({
  FetchBookList: () => dispatch(FetchBookList(dispatch)),
  addToCart: item => () => dispatch(addToCart(item))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showcase))

export {Showcase as ShowcaseTest}
