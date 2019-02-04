import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction, Action } from 'redux'
import { StoreState, PokemonList } from '../index';

import axios from 'axios'

// Action Definition
export interface LoadPokemonListAction extends Action {
  type: 'LOAD_POKEMON_LIST'
  payload: any
}

// Union Action Types
export type Action = LoadPokemonListAction
 
// Action Creators
export const getPokemonListActionCreator = (pokeProps:any): LoadPokemonListAction => {
  return { 
    type: 'LOAD_POKEMON_LIST',
    payload: pokeProps
  }
}

// thunk action
export const pokemonGetList = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return new Promise<void>((resolve) => {
        axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then( (returnedList) => {
        dispatch(getPokemonListActionCreator(returnedList))
      })
    })
  }
}
