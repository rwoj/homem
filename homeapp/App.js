import React from 'react'
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'remote-redux-devtools'
import openSocket from 'socket.io-client'

import rootReducer from './reducers'
import api from "./api";
import {pobraneUstawienia} from './actions/ustawienia'
import {odczytRejestru, zmianaRejestruWyjscia, zmianaRejestruWySatel, 
  zmianaRejestruWyTemp, zmianaRejestruWyTempNast} from "./actions/rejestr"
import MainNavigator from './components/MainNavigator'

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
)

const socket = openSocket('http://192.168.0.133:8081')

socket.on('wyjscia', (dane)=>store.dispatch(zmianaRejestruWyjscia(dane)))
socket.on('wySatel', (dane)=>store.dispatch(zmianaRejestruWySatel(dane)))
socket.on('wyTemp', (dane)=>store.dispatch(zmianaRejestruWyTemp(dane)))
socket.on('wyTempNast', (dane)=>store.dispatch(zmianaRejestruWyTempNast(dane)))

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