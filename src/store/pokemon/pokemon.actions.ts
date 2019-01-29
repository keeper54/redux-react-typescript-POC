import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

// Action Definition
export interface GetPokemonListAction {
  type: 'GET_POKEMON_LIST'
}

// Union Action Types
export type Action = GetPokemonListAction

// Action Creators
export const getPokemonListActionCreator = (): GetPokemonListAction => {
  return { type: 'GET_POKEMON_LIST' }
}

// thunk action
export const pokemon = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(getPokemonListActionCreator)
      

    })
  }
}