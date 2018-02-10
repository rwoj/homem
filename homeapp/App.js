import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import Horizon from '@horizon/client'
import { StyleSheet, Text, View } from 'react-native'
import rootReducer from './reducers'
import MainNavigator from './components/MainNavigator'
import api from "./api";
import {pobraneUstawienia} from './actions/ustawienia'
import {odczytRejestru} from "./actions/rejestr"

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
)

const hz = Horizon({host: '192.168.0.151:8082'});
hz.connect();
hz('wyjscia').order('id').watch().subscribe(
  (res)=>store.dispatch(odczytRejestru({wyjscia: res})),
  (err)=>console.error(err)
)
hz('wy_satel').order('id').watch().subscribe(
  (res)=>store.dispatch(odczytRejestru({wySatel: res})),
  (err)=>console.error(err)
)
hz('wy_temp').order('id').watch().subscribe(
  (res)=>store.dispatch(odczytRejestru({wyTemp: res})),
  (err)=>console.error(err)
)

api.ustawienia.getUstawieniaKonfiguracja()
  .then(konfiguracja => store.dispatch(pobraneUstawienia(konfiguracja)))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <MainNavigator />
      </Provider>
    )
  }
}