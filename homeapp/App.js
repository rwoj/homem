import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { StyleSheet, Text, View } from 'react-native'
import rootReducer from './reducers'
import Ogrzewanie from './components/Ogrzewanie';

const store=createStore(
  rootReducer,
  applyMiddleware(thunk) 
)


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <MainNavigator /> */}
          <Ogrzewanie />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});