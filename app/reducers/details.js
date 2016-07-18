import {
  REQUEST_POKEMON_DETAILS,
  RECEIVE_POKEMON_DETAILS,
  RECEIVE_POKEMON_EVOLUTIONS
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: {}
}

export default (state=initialState, action) => {

  switch (action.type) {

    case REQUEST_POKEMON_DETAILS:
      return { ...state, loading: true }

    case RECEIVE_POKEMON_DETAILS:
      return { ...state, loading: false, data: action.data }

    case RECEIVE_POKEMON_EVOLUTIONS:
      return {
        ...state,
        data: {
          ...state.data,
          evolutions: getEvolutions(action.evolutions)
        }
      }

    default:
      return state

  }

}

const getEvolutions = (node, arr=[]) => {
  const pokemon = node.species
  const pokemonId = pokemon.url.match(/([0-9]+)\/$/)[1]
  const children = node.evolves_to
  if (pokemonId <= 150) {
    arr.push({
      name: pokemon.name,
      id: pokemonId
    })
  }
  if (!children.length) {
    return arr
  }
  children.forEach(child => getEvolutions(child, arr))
  return arr
}
