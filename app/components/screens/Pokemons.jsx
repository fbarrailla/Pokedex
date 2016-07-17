import React, { Component, PropTypes } from 'react'

import ProgressiveRenderer from '../ui/ProgressiveRenderer'
import PokemonItem from '../pokemon/PokemonItem'

export default class PokemonScreen extends Component {

  static propTypes = {
    pokemons: PropTypes.array.isRequired,
    searchFilter: PropTypes.string.isRequired,
    favorites: PropTypes.array.isRequired,
    caught: PropTypes.array.isRequired,
    fetchPokemons: PropTypes.func.isRequired,
    selectPokemon: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    toggleCaught: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { params, selectPokemon } = this.props
    this.props.fetchPokemons()
    if (params.id) {
      selectPokemon(params.id)
    }
  }

  componentWillReceiveProps({ params }) {
    if (params.id && params.id !== this.props.params.id) {
      this.props.selectPokemon(params.id)
    }
  }

  applySearchFilter(pokemons, searchFilter) {
    if (searchFilter) {
      return pokemons
        .filter(p => p.name.indexOf(searchFilter.toLowerCase()) > -1)
    }
    return pokemons
  }

  render() {
    const {
      pokemons,
      location,
      params,
      searchFilter,
      toggleFavorite,
      toggleCaught,
      favorites,
      caught,
      children
    } = this.props
    const basePath = location.pathname.match(/\/([a-z]+)/)[1]
    return (
      <div className="PokemonsScreen">
        <ProgressiveRenderer>
          {this.applySearchFilter(pokemons, searchFilter).map(pokemon => {
            const selected = params.id === pokemon.id
            return (
              <PokemonItem
                key={pokemon.id}
                pokemon={pokemon}
                isSelected={selected}
                linkTo={'/' + (selected ? basePath : `${basePath}/${pokemon.id}`)}
                isFavorite={favorites.indexOf(pokemon.id) > -1}
                isCaught={caught.indexOf(pokemon.id) > -1}
                toggleFavorite={toggleFavorite}
                toggleCaught={toggleCaught}
              />
            )
          })}
        </ProgressiveRenderer>
        {children}
      </div>
    )
  }

}
