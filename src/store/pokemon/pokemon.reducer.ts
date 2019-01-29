// store/session/reducers.ts
import { combineReducers } from 'redux'
import { Action } from './pokemon.actions'
import { PokemonListItem } from '../../classes/Pokemon';

// States' definition
export interface PokemonState {
    pokeList?: PokemonListItem[]
    count?:number;
    next?: string;
    previous?: string;
    error?: string;
}

export interface State {
    pState: PokemonState
}

const pState = (state: PokemonState = { pokeList:[],count:0 }, action: Action): PokemonState => {
    switch (action.type) {
        case 'GET_POKEMON_LIST':
            return { ...state }
        default: { return state }
  }
}
export default combineReducers<State>({
    pState
})