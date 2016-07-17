import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Loader from 'halogen/PulseLoader'

export default class PokemonDetailsScreen extends Component {

  static propTypes = {
    details: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  }

  state = {
    visible: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }))
  }

  render() {
    const { visible } = this.state
    const { loading } = this.props
    const className = classNames('PokemonDetailsScreen', {
      visible
    })
    return (
      <div className={className}>
        {loading ? (
          <Loader className="loader" color="#26A65B" size="16px" margin="4px" />
        ) : (
          <h1>Ready...</h1>
        )}
      </div>
    )
  }
}
