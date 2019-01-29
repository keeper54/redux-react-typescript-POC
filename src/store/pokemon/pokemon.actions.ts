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
  console.log('inside getPokemonListActionCreator')
  return { type: 'GET_POKEMON_LIST' }
}

// thunk action
export const pokemon = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  console.log('const pokemon from /actions')
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      console.log('before dispatching getPokemonListActionCreator')
      dispatch(getPokemonListActionCreator)
      

    })
  }
}