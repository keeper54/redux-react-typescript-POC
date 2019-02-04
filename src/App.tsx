import React, { Component } from 'react'
import PokemonList from './pages/pokemonList'
// import {RootState} from './store'


class App extends Component {

  render() {
    console.log('this in App component: ', this)
    return (
          <PokemonList>         
          </PokemonList>
    );
  }
}

export default App;
