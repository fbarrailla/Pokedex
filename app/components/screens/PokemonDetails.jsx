import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Loader from 'halogen/PulseLoader'
import PokemonName from '../pokemon/PokemonName'
import PokemonDetailsGallery from '../pokemon/PokemonDetailsGallery'
import PokemonDetailsInfos from '../pokemon/PokemonDetailsInfos'
import PokemonDetailsEvolutions from '../pokemon/PokemonDetailsEvolutions'

export default class PokemonDetailsScreen extends Component {

  static propTypes = {
    details: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  }

  state = {
    visible: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }))
  }

  renderDetails() {
    const { details, location } = this.props
    if (typeof details.id === undefined) {
      return null
    }
    const basePath = '/' + location.pathname.match(/\/([a-z]+)/)[1]
    return (
      <div>
        <Link className="close-link" to={basePath}>✕</Link>
        <PokemonName name={details.name} />
        <div className="details-container">
          <PokemonDetailsGallery items={details.sprites} />
          <PokemonDetailsInfos
            types={details.types}
            height={details.height}
            weight={details.weight}
            abilities={details.abilities}
          />
          <PokemonDetailsEvolutions
            evolutions={details.evolutions}
            basePath={basePath}
          />
        </div>
      </div>
    )
  }

  render() {
    const { visible } = this.state
    const { loading } = this.props
    const className = classNames('PokemonDetailsScreen', {
      visible
    })
    return (
      <div className={className}>
        {loading ? (
          <Loader className="loader" color="#4cafff" size="16px" margin="4px" />
        ) : this.renderDetails()}
      </div>
    )
  }
}