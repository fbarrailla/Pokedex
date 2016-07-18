import { POKEAPI_URL } from '../constants'

export const getAll = () => {
  return fetch(`${POKEAPI_URL}/pokemons.json`)
    .then(resp => resp.json())
    .then(data => data.results)
}

export const getDetails = pokemonId => {
  return fetch(`${POKEAPI_URL}/pokemon-${pokemonId}.json`)
    .then(resp => resp.json())
}

export const getEvolutions = id => {
  return fetch(`${POKEAPI_URL}/evolution-${id}.json`)
    .then(resp => resp.json())
}
