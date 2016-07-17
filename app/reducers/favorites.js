import {
  TOGGLE_FAVORITE
} from '../constants/actionTypes'

export default (state=[], action) => {

  switch (action.type) {

    case TOGGLE_FAVORITE:
      if (state.indexOf(action.pokemonId) > -1) {
        return state.filter(id => id !== action.pokemonId)
      }
      return [ ...state, action.pokemonId ]

    default:
      return state

  }

}
