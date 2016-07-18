import React, { Component } from 'react'

const BUFFER_SIZE = 20

export default class ProgressiveRenderer extends Component {

  state = {
    items: []
  }

  componentWillReceiveProps({ children }) {
    if (
      children.length > BUFFER_SIZE
      && childrenHaveChanged(children, this.props.children)
    ) {
      this.setState({ items: [] })
      requestAnimationFrame(() => this.bufferItemRendering(children, 0))
    } else if (children !== this.props.children) {
      this.setState({ items: children })
    }
  }

  bufferItemRendering(children, i) {
    const { items } = this.state
    if ((i+1) * BUFFER_SIZE >= children.length) {
      this.setState({ items: children })
    } else {
      const from = i * BUFFER_SIZE
      const to = from + BUFFER_SIZE
      this.setState({
        items: this.state.items.concat(children.slice(from, to))
      })
      requestAnimationFrame(() => this.bufferItemRendering(children, i+1))
    }
  }

  render() {
    const { children } = this.props
    let { items } = this.state
    if (children.length <= BUFFER_SIZE) {
      items = children
    }
    return <div className="ProgressiveRenderer">{items}</div>
  }

}

const childrenHaveChanged = (prev, next) => {
  return getSignature(prev) !== getSignature(next)
}

const getSignature = children => {
  return children.map(c => c.key).join('')
}
