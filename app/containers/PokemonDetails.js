import { connect } from 'react-redux'
import PokemonDetailsScreen from '../components/screens/PokemonDetails'

export default connect(
  // map state to props
  ({ details }) => ({
    details: details.data,
    loading: details.loading
  }),
  // map dispatch to props
  dispatch => ({
  })
)(PokemonDetailsScreen)
