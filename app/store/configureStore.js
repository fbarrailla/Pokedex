import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'

export default function configureStore(middlewares=[], initialState={}) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    // redux devtool chrome extension
    process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer.default)
    })
  }

  return store
}
