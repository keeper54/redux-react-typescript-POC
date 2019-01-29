import { createStore, combineReducers, applyMiddleware } from 'redux'
import pokeState, { State as PokemonState } from './pokemon/pokemon.reducer'
import thunk from 'redux-thunk'

export interface RootState {
  pokeState: PokemonState
}

export default createStore(combineReducers<RootState>({
    pokeState
}), applyMiddleware(thunk))