import { createStore, combineReducers, applyMiddleware } from 'redux'
import pState, { State as PokemonState } from './pokemon/pokemon.reducer'
import thunk from 'redux-thunk'

// export interface RootState {
//   pokeState: PokemonState
// }
// console.log("pState: ", pState)

var rootReducer = () => {
  console.log('combine reducers')
  combineReducers<PokemonState>({
    pState
  })
}
export default createStore(rootReducer, applyMiddleware(thunk))