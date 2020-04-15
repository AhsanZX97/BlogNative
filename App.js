import React from 'react';
import Routes from './components/Routes'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

export default class App extends React.Component {
  render() {

    state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={state}>
        <Routes />
      </Provider>

    );
  }
}