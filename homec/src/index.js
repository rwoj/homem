import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import openSocket from 'socket.io-client'

import './App.css'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./reducers";
import api from "./api";
import {pobraneUstawienia} from './actions/ustawienia'
import {odczytRejestru, zmianaRejestruWyjscia, zmianaRejestruWySatel, 
        zmianaRejestruWyTemp, zmianaRejestruWyTempNast} from "./actions/rejestr"
import App from './App';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const socket = openSocket('http://192.168.0.133:8081')
const socket = openSocket('http://localhost:8081')

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

ReactDOM.render(
  <BrowserRouter >
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
