import React from 'react'
import {StackNavigator } from 'react-navigation'
import Ogrzewanie from './Ogrzewanie'

const MainNavigator = StackNavigator({
    Home: {
    screen: Ogrzewanie,
    navigationOptions: {
      header: null
    }
  },
//   DeckView: {
//     screen: DeckView,
//     navigationOptions: {
//       title: 'Deck Info',
//       headerTintColor: white,
//       headerStyle: {
//         backgroundColor: purple
//       }
//     }
//   },
//   AddCard: {
//     screen: AddCard,
//       navigationOptions: {
//         title: 'Add Card',
//         headerTintColor: white,
//         headerStyle: {
//           backgroundColor: purple
//         }
//       }
//     },
//     Quiz: {
//       screen: Quiz,
//         navigationOptions: {
//           title: 'Quiz',
//           headerTintColor: white,
//           headerStyle: {
//             backgroundColor: purple
//           }
//         }
//     }
})
export default MainNavigator