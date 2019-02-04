import * as React from 'react'
import store, { StoreState } from '../store'
import { pokemonGetList } from '../store/pokemon/pokemon.actions'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

interface State {
  
}

interface OwnProps {
}

interface DispatchProps {
  getPokemon: () => void
}

interface StateProps {
  pokemonLister: StoreState
}

type Props = StateProps & OwnProps & DispatchProps



class PokemonList extends React.Component<Props, State> {

  constructor(prop:Props) {
    super(prop)
  }

  public componentDidMount = () => {
    console.log("componentDidMount store: ", store)
  }


  render() {
    
    return (
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-6">
          <button className="btn btn-primary"  onClick={() => {this.props.getPokemon()}}>
              Get Pokemon List
            </button>
          </div>
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state:StoreState) => {
  return {
    pokemonLister: state.pokemonLister
  }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    getPokemon: async () => {
      await dispatch(pokemonGetList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)