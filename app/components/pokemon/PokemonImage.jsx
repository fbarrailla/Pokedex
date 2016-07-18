import React, { PropTypes } from 'react'
import { PICTURE_URL } from '../../constants'

const propTypes = {
  pokemonId: PropTypes.string,
  src: PropTypes.string
}

const PokemonImage = ({ pokemonId, src }) => {
  const imageSource = src || `${PICTURE_URL}/${pokemonId}.png`
  return (
    <div
      className="PokemonImage"
      style={{
        backgroundImage: `url(${imageSource})`
      }}
    />
  )
}

PokemonImage.propTypes = propTypes

export default PokemonImage
