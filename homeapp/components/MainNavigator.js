import {StackNavigator } from 'react-navigation'
import Dom from './Dom'
import Ogrzewanie from './Ogrzewanie'
import Swiatlo from './Swiatlo'
import Czujki from './Czujki'

export default MainNavigator = StackNavigator(
    {
        Dom: {
            screen: Dom,
            navigationOptions: {
                title: 'Dom',
                backgroundColor: '#888'
            }
        },
        Ogrzewanie: {
            screen: Ogrzewanie,
            navigationOptions: {
                title: 'Ogrzewanie',
                backgroundColor: '#888'
            }
        }, 
        Swiatlo: {
            screen: Swiatlo,
            navigationOptions: {
                title: 'Swiatlo',
                backgroundColor: '#888'
            }
        }, 
        Czujki: {
            screen: Czujki,
            navigationOptions: {
                title: 'Czujki',
                backgroundColor: '#888'
            }
        } 
    },
    {
        initialRouteName: 'Dom',
    }
)
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