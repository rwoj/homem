import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import openSocket from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import rootReducer from "./rootReducer";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {odczytRejestru, zmianaRejestru} from "./actions/rejestr"
import api from "./api";
import {pobraneUstawienia} from './actions/ustawienia'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


const socket = openSocket('http://192.168.0.133:8081')
// const socket = openSocket('http://localhost:8081')
// socket.on('init', (data)=>store.dispatch(odczytRejestru(data)))
socket.on('zmiana', (data)=>store.dispatch(zmianaRejestru(data)))

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
