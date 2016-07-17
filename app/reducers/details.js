import {
  REQUEST_POKEMON_DETAILS,
  RECEIVE_POKEMON_DETAILS
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

    default:
      return state

  }

}
