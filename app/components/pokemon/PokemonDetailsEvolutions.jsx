import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import PokemonName from './PokemonName'

const propTypes = {
  evolutions: PropTypes.array,
  basePath: PropTypes.string.isRequired
}

const defaultProps = {
  evolutions: []
}

const PokemonDetailsEvolutions = ({ evolutions, basePath }) => (
  <div className="PokemonDetailsEvolutions">
    <div className="label">Evolutions</div>
    {evolutions.length ? evolutions.map(({ id, name }, i) => (
      <div key={i} className="evolution-row">
        <div className="evolution">
          <Link to={`${basePath}/${id}`}>
            <PokemonName name={name} />
          </Link>
        </div>
      </div>
    )) : '-'}
  </div>
)

PokemonDetailsEvolutions.propTypes = propTypes
PokemonDetailsEvolutions.defaultProps = defaultProps

export default PokemonDetailsEvolutions
