import React, { PropTypes } from 'react'

const propTypes = {
  name: PropTypes.string.isRequired
}

const PokemonName = ({ name }) => (
  <h1 className="PokemonName">
    {name.replace('-f', ' ♀').replace('-m', ' ♂')}
  </h1>
)

PokemonName.propTypes = propTypes

export default PokemonName
