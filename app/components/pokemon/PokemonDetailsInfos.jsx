import React, { PropTypes } from 'react'

const propTypes = {
  types: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  abilities: PropTypes.array.isRequired
}

const PokemonDetailsInfos = ({ types, height, weight, abilities }) => (
  <div className="PokemonDetailsInfos">
    <div className="detail-row">
      <span className="label">Type</span>
      {types.map((type, i) => (
        <span key={i} className="item">{type.type.name}</span>
      ))}
    </div>
    <div className="detail-row">
      <span className="label">Height</span>
      <span className="item">{height / 10}m</span>
    </div>
    <div className="detail-row">
      <span className="label">Weight</span>
      <span className="item">{weight / 10}kg</span>
    </div>
    <div className="detail-row">
      <span className="label">Abilities</span>
      {abilities.map((ability, i) => (
        <span key={i} className="item">{ability.ability.name}</span>
      ))}
    </div>
  </div>
)

PokemonDetailsInfos.propTypes = propTypes

export default PokemonDetailsInfos
