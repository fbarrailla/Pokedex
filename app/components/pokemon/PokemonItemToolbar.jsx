import React, { PropTypes } from 'react'

const propTypes = {
  pokemonId: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  toggleCaught: PropTypes.func.isRequired
}

const PokemonItemToolbar = ({
  pokemonId,
  isFavorite,
  toggleFavorite,
  toggleCaught
}) => (
  <div className="PokemonItemToolbar">
    <button
      className="favorite-btn"
      onClick={() => toggleFavorite(pokemonId)}
    >
      <span className="icon">{isFavorite ? '★' : '☆'}</span>
    </button>
    <button
      className="caught-btn"
      onClick={() => toggleCaught(pokemonId)}
    >
      <span className="icon" />
    </button>
  </div>
)

PokemonItemToolbar.propTypes = propTypes

export default PokemonItemToolbar
