import * as React from 'react'
import { RootState } from '../store'
import { pokemon } from '../store/pokemon/pokemon.actions'
import { PokemonState } from '../store/pokemon/pokemon.reducer'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

interface State {
}

interface OwnProps {
}

interface DispatchProps {
    pokemon: () => void
}

interface StateProps {
  state: PokemonState
}

type Props = StateProps & OwnProps & DispatchProps

export class PokemonList extends React.Component<Props, State> {

  constructor(prop:Props) {
    super(prop)
        this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-6">
          <button className="btn btn-primary" onClick={() => this.props.pokemon()}>
              Get Pokemon List
              {this.props.state.next}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (states: RootState, ownProps: OwnProps): StateProps => {
  return {
    state: states.pokeState.pState
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    pokemon: async () => {
        await dispatch(pokemon())
        console.log('mapDispatchToProps Done')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)