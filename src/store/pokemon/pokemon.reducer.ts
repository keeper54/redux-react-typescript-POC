// store/session/reducers.ts
import {AnyAction, Store} from 'redux'
import { LoadPokemonListAction, Action } from './pokemon.actions'
import {StoreState, PokemonList} from '../index'

const initialState:StoreState = {
    pokemonLister: []
}

const pokemonReducer = (state: StoreState = initialState, action: Action): StoreState => {
    switch (action.type) {
        case 'LOAD_POKEMON_LIST':
            console.log('myState: action.payload value: ', action.payload)
            return { 
                ...state,
                pokemonLister: action.payload
            }
        default:
            console.log('default return: ', state)
            return  state = state
    }
}

export default pokemonReducer