import React, { Component } from 'react'
import { Product } from '../components'
import styles from '../stylesheets/containers/showcase.scss'
import PropTypes from 'prop-types'

class Showcase extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      books: {
        title: "Rápido e Devagar - Duas Formas de Pensar",
        description: "O vencedor do Nobel de Economia Daniel Kahneman nos mostra as formas que controlam a nossa mente em Rápido e devagar, as duas formas de pensar: o pensamento rápido, intuitivo e emocional e o devagar, lógico e ponderado. Daniel nos mostra a capacidade do pensamento rápido, sua influência persuasiva em nossas decisões e até onde podemos ou não confiar nele. O entendimento do funcionamento dessas duas formas de pensar pode ajudar em nossas decisões pessoais e profissionais.",
        price: 55.1,
        image: "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4074748&qld=90&l=430&a=-1"
      }
    }
  }
  render() {
    return (
      <div>
        <h2 className={styles.section}>{this.props.sectionName}</h2>
        <div className={styles.showcase}>
          <Product img={this.state.books.image} title={this.state.books.title} price={this.state.books.price} description={this.state.books.description} />
          <Product img={this.state.books.image} title={this.state.books.title} price={this.state.books.price} description={this.state.books.description} />
          <Product img={this.state.books.image} title={this.state.books.title} price={this.state.books.price} description={this.state.books.description} />
         </div>
      </div>
    )
  }
}

Product.PropTypes = {
  sectionName: PropTypes.string.isRequired
}

export default Showcase
