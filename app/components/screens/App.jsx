import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const menuLinks = {
  pokemons: 'All',
  favorites: 'Favorites',
  caught: 'Caught'
}

export default class LayoutScreen extends Component {

  static propTypes = {
    pokemons: PropTypes.array.isRequired,
    favorites: PropTypes.array.isRequired,
    caught: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired
  }

  state = {
    searchStr: ''
  }

  handleSearchInputChange(evt) {
    evt.preventDefault()
    this.props.search(evt.target.value)
    this.setState({ searchStr: evt.target.value })
  }

  handleClearSearch(evt) {
    evt.preventDefault()
    this.props.clearSearch()
    this.setState({ searchStr: '' })
  }

  render() {
    const { children, clearSearch, location, params } = this.props
    const { searchStr } = this.state
    const appClassName = classNames('AppScreen', {
      'details-visible': params.id !== undefined
    })
    const inputClassName = classNames('search-input', {
      filled: searchStr.length
    })
    return (
      <div className={appClassName}>
        <div className="header">
          <h1>Pokédex</h1>
          <input
            className={inputClassName}
            type="text"
            value={this.state.searchStr}
            placeholder="search by name..."
            onChange={this.handleSearchInputChange.bind(this)}
          />
          {searchStr.length ?
            <button
              className="clear-search-btn"
              onClick={this.handleClearSearch.bind(this)}
            >
              x
            </button>
          : null}
          <div className="menu-links">
            {Object.keys(menuLinks).map(link => (
              { key: link, label: menuLinks[link], path: `/${link}` }
            )).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={classNames({
                  active: location.pathname.indexOf(link.path) > -1
                })}
              >
                {link.label} ({this.props[link.key].length})
              </Link>
            ))}
          </div>
        </div>
        <div className="wrapper">
          {children}
        </div>
      </div>
    )
  }
}
