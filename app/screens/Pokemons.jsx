import React, { Component, PropTypes } from 'react'

import PokemonItem from '../components/pokemon/PokemonItem'

export default class PokemonScreen extends Component {

  static propTypes = {
    pokemons: PropTypes.shape({
      loading: PropTypes.bool,
      Items: PropTypes.array
    }).isRequired
  }

  componentWillMount() {
    
  }

  render() {
    const { pokemons } = this.props
    return (
      <div className="PokemonsScreen">
        <h1>Pokémons</h1>
        {pokemons.items.map(pokemon => <PokemonItem pokemon={pokemon} />)}
      </div>
    )
  }

}
