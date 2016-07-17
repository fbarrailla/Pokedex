import {
  SET_SEARCH_FILTER,
  CLEAR_SEARCH_FILTER
} from '../constants/actionTypes'

export default (state='', action) => {

  switch (action.type) {

    case SET_SEARCH_FILTER:
      return action.input

    case CLEAR_SEARCH_FILTER:
      return ''

    default:
      return state

  }

}
