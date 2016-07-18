import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  REQUEST_POKEMON_DETAILS,
  RECEIVE_POKEMON_DETAILS,
  RECEIVE_POKEMON_EVOLUTIONS,
  FETCH_POKEMONS,
  SELECT_POKEMON,
  SET_SEARCH_FILTER,
  CLEAR_SEARCH_FILTER,
  TOGGLE_FAVORITE,
  TOGGLE_CAUGHT
} from '../constants/actionTypes'

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS
})

export const requestPokemons = () => ({
  type: REQUEST_POKEMONS
})

export const receivePokemons = data => ({
  type: RECEIVE_POKEMONS,
  data
})

export const requestPokemonDetails = () => ({
  type: REQUEST_POKEMON_DETAILS
})

export const receivePokemonDetails = data => ({
  type: RECEIVE_POKEMON_DETAILS,
  data
})

export const receivePokemonEvolutions = evolutions => ({
  type: RECEIVE_POKEMON_EVOLUTIONS,
  evolutions
})

export const selectPokemon = pokemonId => ({
  type: SELECT_POKEMON,
  pokemonId
})

export const setSearchFilter = input => ({
  type: SET_SEARCH_FILTER,
  input
})

export const clearSearchFilter = () => ({
  type: CLEAR_SEARCH_FILTER
})

export const toggleFavorite = pokemonId => ({
  type: TOGGLE_FAVORITE,
  pokemonId
})

export const toggleCaught = pokemonId => ({
  type: TOGGLE_CAUGHT,
  pokemonId
})
