import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import openSocket from 'socket.io-client'
import rootReducer from './reducers'
import MainNavigator from './components/MainNavigator'
import api from "./api";
import {pobraneUstawienia} from './actions/ustawienia'
import {odczytRejestru, zmianaRejestru} from "./actions/rejestr"

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
)
const socket = openSocket('http://192.168.0.133:8081')
// // const socket = openSocket('http://localhost:8081')
// // socket.on('init', (data)=>store.dispatch(odczytRejestru(data)))
socket.on('zmiana', (data)=>store.dispatch(zmianaRejestru(data)))

api.rejestr.getCurrentState()
  .then(currentState => store.dispatch(odczytRejestru(currentState)))

api.ustawienia.getUstawieniaKonfiguracja()
  .then(konfiguracja => store.dispatch(pobraneUstawienia(konfiguracja)))
api.ustawienia.getUstawieniaKonfiguracjaTemp()
  .then(konfiguracjaTemp => store.dispatch(pobraneUstawienia(konfiguracjaTemp)))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <MainNavigator />
      </Provider>
    )
  }
}