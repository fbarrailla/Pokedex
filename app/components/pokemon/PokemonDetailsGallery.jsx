import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import PokemonImage from './PokemonImage'

export default class PokemonDetailsGallery extends Component {

  static propTypes = {
    items: PropTypes.object
  }

  state = this.getInitState()

  getInitState(items=this.props.items) {
    const _items = Object.keys(items)
      .map((k) => ({
        label: k.replace(/_/g, ' '),
        src: items[k]
      }))
      .filter(item => item.src)
    return {
      items: _items,
      selectedIndex: _items.reduce(
        (prev, item, i) => item.label === 'front default' ? i : prev,
        0
      )
    }
  }

  componentWillReceiveProps({ items }) {
    if (items !== this.props.items) {
      this.setState(this.getInitState(items))
    }
  }

  handlePrevClick() {
    const { selectedIndex } = this.state
    if (selectedIndex > 0) {
      this.setState({ selectedIndex: selectedIndex-1 })
    }
  }

  handleNextClick() {
    const { selectedIndex, items } = this.state
    if (selectedIndex < items.length - 1 ) {
      this.setState({ selectedIndex: selectedIndex+1  })
    }
  }

  render() {
    const { items, selectedIndex } = this.state
    if (!items.length) return null
    const selectedItem = items[selectedIndex]
    return (
      <div className="PokemonDetailsGallery">
        <div className="gallery">
          <button
            className={classNames({
              disabled: selectedIndex === 0
            })}
            onClick={this.handlePrevClick.bind(this)}
          >
            <span className="arrow-left" />
          </button>
          <PokemonImage src={selectedItem.src} />
          <button
            className={classNames({
              disabled: selectedIndex === items.length - 1
            })}
            onClick={this.handleNextClick.bind(this)}
          >
            <span className="arrow-right" />
          </button>
        </div>
        <h1 className="item-label">{selectedItem.label}</h1>
      </div>
    )
  }

}
