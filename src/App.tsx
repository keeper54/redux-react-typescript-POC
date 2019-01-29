import React, { Component, PureComponent } from 'react'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div id="route-container">
              
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
