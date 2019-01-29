// store/session/reducers.ts
import { combineReducers } from 'redux'
import { Action } from './pokemon.actions'
import { PokemonListItem } from '../../classes/Pokemon';
import  PokemonList  from '../../pages/pokemonList';

// States' definition
export interface PokemonProps {  //info available to store
    pokeList?: PokemonListItem[] 
    count?:number
    next?: string
    previous?: string;
    error?: string;
}

export const defaultState:PokemonProps = {
    count: 1, 
    next: "next", 
    previous: "previous"
}

export interface State {
    myState: PokemonProps
}



const pState = (state: PokemonProps = defaultState, action: Action): PokemonProps => {
    console.log('inside const pState');
    
    switch (action.type) {
        case 'GET_POKEMON_LIST':
            console.log('GET_POKEMON_LIST reducer')
            console.log(state)
            return { ...state }
        default:
            console.log('default return: ', state)
            return  state 
    }
}
export default pState