import { combineReducers } from 'redux'
import pokemons from './pokemons'
import details from './details'
import searchFilter from './searchFilter'
import favorites from './favorites'
import caught from './caught'

export default combineReducers({
  pokemons,
  details,
  searchFilter,
  favorites,
  caught
})
