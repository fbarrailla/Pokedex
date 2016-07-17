import { POKEAPI_URL, POKEAPI_DETAILS_URL } from '../constants'

export const getAll = () => {
  return fetch(POKEAPI_URL)
    .then(resp => resp.json())
    .then(data => data.results)
}

export const getDetails = pokemonId => {
  return fetch(`${POKEAPI_DETAILS_URL}/${pokemonId}`)
    .then(resp => resp.json())
}
