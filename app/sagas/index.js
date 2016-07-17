import { take, put, fork } from 'redux-saga/effects'

import {
  FETCH_POKEMONS,
  SELECT_POKEMON
} from '../constants/actionTypes'

// service methods
import { getAll, getDetails } from '../services/pokemons'

// actions
import {
  requestPokemons,
  receivePokemons,
  requestPokemonDetails,
  receivePokemonDetails
} from '../actions/pokemons'

export function * fetchPokemons() {
  while (true) {
    yield take(FETCH_POKEMONS)
    yield put(requestPokemons())
    const pokemons = yield getAll()
    yield put(receivePokemons(pokemons))
  }
}

export function * fetchDetails() {
  while (true) {
    const { pokemonId } = yield take(SELECT_POKEMON)
    yield put(requestPokemonDetails())
    //const data = yield getDetails(pokemonId)
    //console.log(data)
    //yield put(receivePokemons(pokemons))
  }
}

export default function * root() {
  yield fork(fetchPokemons)
  yield fork(fetchDetails)
}
