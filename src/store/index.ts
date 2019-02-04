import { createStore, combineReducers, applyMiddleware,Reducer } from 'redux'
import pokemonReducer from './pokemon/pokemon.reducer'
import thunkMiddleware  from 'redux-thunk'

export type StoreState = {
  pokemonLister:any
}

export type PokemonListItem = {
  name: string;
  url: string;
}

export type PokemonList = {
  pokemonListItem?: PokemonListItem[]
  count?: number
  previous?: string
  next?: string
  error?: string
}


export default createStore(combineReducers<StoreState>({
  pokemonLister: pokemonReducer
}), applyMiddleware(thunkMiddleware ))