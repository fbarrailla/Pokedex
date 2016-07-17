import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  items: []
}

export default (state=initialState, action) => {

  switch (action.type) {

    case REQUEST_POKEMONS:
      return { ...state, loading: true }

    case RECEIVE_POKEMONS:
      return { ...state, items: action.data.map(pokemon => ({
        id: pokemon.url.match(/\/([0-9]+)\/$/)[1],
        name: pokemon.name,
        url: pokemon.url
      })) }

    default:
      return state

  }

}
