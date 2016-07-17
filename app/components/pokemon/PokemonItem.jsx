import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import { PICTURE_URL } from '../../constants'
import PokemonItemToolbar from './PokemonItemToolbar'

const propTypes = {
  pokemon: PropTypes.object.isRequired,
  linkTo: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isCaught: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  toggleCaught: PropTypes.func.isRequired
}

const PokemonItem = ({
    pokemon,
    linkTo,
    isSelected,
    isFavorite,
    isCaught,
    toggleFavorite,
    toggleCaught
}) => (
  <div className="PokemonItem">
    <Link
      to={linkTo}
      className={classNames('container', {
        selected: isSelected,
        favorite: isFavorite,
        caught: isCaught
      })}
      onClick={handleLinkClick}
    >
      <span className="pokemon-id">#{pad(+pokemon.id)}</span>
      <div className="pokemon-picture" style={{
        backgroundImage: `url(${PICTURE_URL}/${pokemon.id}.png)`
      }} />
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <PokemonItemToolbar
        pokemonId={pokemon.id}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        toggleCaught={toggleCaught}
      />
    </Link>
  </div>
)

const pad = (n) => {
  if (n > 100) return n
  if (n > 10) return '0' + n
  return '00' + n
}

const handleLinkClick = evt => {
  const el = evt.target
  if (el.tagName.toLowerCase() === 'button' || el.classList.contains('icon')) {
    evt.preventDefault()
  }
}

PokemonItem.propTypes = propTypes

export default PokemonItem
