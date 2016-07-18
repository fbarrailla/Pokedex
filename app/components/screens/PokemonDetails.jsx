import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
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
    const { details, location, loading } = this.props
    const basePath = '/' + location.pathname.match(/\/([a-z]+)/)[1]
    return (
      <div>
        <Link className="close-link" to={basePath}>✕</Link>
        <PokemonName name={details.name || 'lol'} />
        {!loading && typeof details.id !== undefined ? (
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
        ) : null}
      </div>
    )
  }

  render() {
    const { visible } = this.state
    const { loading } = this.props
    const className = classNames('PokemonDetailsScreen', {
      visible,
      loading
    })
    console.log(className)
    return (
      <div className={className}>
        {this.renderDetails()}
      </div>
    )
  }
}
