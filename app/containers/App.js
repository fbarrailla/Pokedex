import { connect } from 'react-redux'
import { setSearchFilter, clearSearchFilter } from '../actions/pokemons'
import LayoutScreen from '../components/screens/App'

export default connect(
  // map state to props
  ({ pokemons, favorites, caught }) => ({
    pokemons: pokemons.items,
    favorites,
    caught
  }),
  // map dispatch to props
  dispatch => ({
    search(input) {
      dispatch(setSearchFilter(input))
    },
    clearSearch() {
      dispatch(clearSearchFilter())
    }
  })
)(LayoutScreen)
