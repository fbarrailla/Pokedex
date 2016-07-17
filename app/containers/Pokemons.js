import { connect } from 'react-redux'
import {
  fetchPokemons,
  selectPokemon,
  toggleFavorite,
  toggleCaught
} from '../actions/pokemons'

import PokemonScreen from '../components/screens/Pokemons'

export default connect(
  // map state to props
  ({ pokemons, searchFilter, favorites, caught, selectPokemon }, ownProps) => {
    return {
      pokemons: filterPokemons(ownProps, pokemons, favorites, caught),
      searchFilter,
      favorites,
      caught
    }
  },
  // map dispatch to props
  dispatch => ({
    fetchPokemons() {
      dispatch(fetchPokemons())
    },
    selectPokemon(pokemonId) {
      dispatch(selectPokemon(pokemonId))
    },
    toggleFavorite(pokemonId) {
      dispatch(toggleFavorite(pokemonId))
    },
    toggleCaught(pokemonId) {
      dispatch(toggleCaught(pokemonId))
    }
  })
)(PokemonScreen)

const filterPokemons = (ownProps, pokemons, favorites, caught) => {
  switch (ownProps.location.pathname.match(/\/([a-z]+)/)[1]) {
    case 'favorites':
      return pokemons.items.filter(p => favorites.indexOf(p.id) > -1)
    case 'caught':
      return pokemons.items.filter(p => caught.indexOf(p.id) > -1)
    default:
      return pokemons.items
  }
}
