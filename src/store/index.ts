import { createStore, combineReducers, applyMiddleware } from 'redux'
import pokeState, { State } from './pokemon/pokemon.reducer'
import thunk from 'redux-thunk'

export interface RootState {
  pokeState: State
}

export default createStore(combineReducers<RootState>({
    pokeState
}), applyMiddleware(thunk))