import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { StyleSheet, Text, View } from 'react-native'
import rootReducer from './reducers'
import MainNavigator from './components/MainNavigator'
import api from "./api";
import {pobraneUstawienia} from './actions/ustawienia'

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
)

api.ustawienia.getUstawieniaKonfiguracja()
  .then(konfiguracja => store.dispatch(pobraneUstawienia(konfiguracja)))

// store.dispatch(({type: "cokolwiek", dane: "heja"}));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <MainNavigator />
      </Provider>
    )
  }
}