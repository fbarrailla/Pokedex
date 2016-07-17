import {
  TOGGLE_CAUGHT
} from '../constants/actionTypes'

export default (state=[], action) => {

  switch (action.type) {

    case TOGGLE_CAUGHT:
      if (state.indexOf(action.pokemonId) > -1) {
        return state.filter(id => id !== action.pokemonId)
      }
      return [ ...state, action.pokemonId ]

    default:
      return state

  }

}
