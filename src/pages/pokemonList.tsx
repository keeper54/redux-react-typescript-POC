import * as React from 'react'
import store from '../store'
import { pokemon } from '../store/pokemon/pokemon.actions'
import { PokemonProps } from '../store/pokemon/pokemon.reducer'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

interface State {
  
}

interface OwnProps {
}

interface DispatchProps {
  // getPokemon: string
}

interface StateProps {
  // pokeStateProps: string
}

type Props = StateProps & OwnProps & DispatchProps



class PokemonList extends React.Component<Props, State> {

  constructor(prop:Props) {
    super(prop)
  }

  public componentDidMount = () => {
    console.log('componentDidMount')
    console.log("store: ", store)
  }


  render() {
    
    console.log('right inside render')
    return (
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-6">
          <button className="btn btn-primary">
              Get Pokemon List
            </button>
          </div>
        </div>
      </div>
    )
  }
}



// const mapStateToProps = (states: RootState, stateProps: Props): State => {
//   console.log('mapstatetoprops')
//   return ({
//     pokeStateProps: states.pokeState.pState
//   })
// }

const mapStateToProps = (state:any) => {
  console.log("mapStateToProps state: ", state)
  return {
    pokeStateProps: state,
    pmState: {}
  }
}

/*
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ heroes }: ApplicationState) => ({
  loading: heroes.loading,
  errors: heroes.errors,
  data: heroes.data
})*/
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    getPokemon: "hello"
  }
}

export default connect(mapStateToProps)(PokemonList)