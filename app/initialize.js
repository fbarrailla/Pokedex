import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import configureStore from './store/configureStore'
import * as storage from './storage'
import rootSaga from './sagas'

// containers
import AppContainer from './containers/App'
import PokemonsContainer from './containers/Pokemons'
import PokemonDetailsContainer from './containers/PokemonDetails'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore([ sagaMiddleware ], storage.loadState())

store.subscribe(() => {
  const { favorites, caught } = store.getState()
  storage.saveState({
    favorites,
    caught
  })
})

sagaMiddleware.run(rootSaga)

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="pokemons" />
        <Route path="pokemons" component={PokemonsContainer}>
          <Route path=":id" component={PokemonDetailsContainer} />
        </Route>
        <Route path="favorites" component={PokemonsContainer}>
          <Route path=":id" component={PokemonDetailsContainer} />
        </Route>
        <Route path="caught" component={PokemonsContainer}>
          <Route path=":id" component={PokemonDetailsContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
