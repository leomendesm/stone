import React, { Component } from 'react'
import { Product } from '../../components'
import styles from './showcase.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { FetchBookList } from '../../redux-flow/reducers/showcase/action-creators'

class Showcase extends Component {
  componentWillMount(){
    this.props.FetchBookList()
  }
  render() {
    return (
      <div>
        <h2 className={styles.section}>{this.props.sectionName}</h2>
        <div className={styles.showcase}>
          {this.props.showcase.data.map(m =>{
            console.log(m)
            return (<Product img={m.volumeInfo.imageLinks.thumbnail} title={m.volumeInfo.title} price={m.saleInfo.retailPrice.amount} description={m.searchInfo.textSnippet} />)
            }
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Showcase)
