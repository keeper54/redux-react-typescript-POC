import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {PokemonList} from './pages/pokemonList'



class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <PokemonList>
            {store.getState}
          </PokemonList>>
      </Provider>
    );
  }
}

export default App;
