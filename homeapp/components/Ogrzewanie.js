import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import {connect} from 'react-redux'
import {wyjsciaSelector, wyTempSelector} from '../reducers/register'
import {konfigTempSelector} from '../reducers/ustawienia'

class Ogrzewanie extends React.Component {
    render(){
        const {konfigTemp, wyTemp, wyjscia} = this.props
        const currentTemp=[{"poziom": 'parter', "data": []},
                            {"poziom": 'pietro', "data": []},
                            {"poziom": 'calyDom', "data": []}]
        //     parter:[],
        //     pietro:[],
        //     calyDom:[]
        // }
        // console.log("ogrz :")
        konfigTemp.map(x=>{
            const temp = x.idTempWy>0? wyTemp.find(y=>y.id===x.idTempWy):{value: ''}
            const tempValue = temp?temp.value:''
            const tempNast = x.idTempWy>0? wyTemp.find(y=>y.id===x.idTempNast):{value: ''}
            const tempNastValue = tempNast?tempNast.value:''
            const ogrzew = x.idGrzanie>0? wyjscia.find(y=>y.id===x.idGrzanie):{value: ''}
            const ogrzewValue = ogrzew?ogrzew.value:''
            if (x.poziom==='parter'){
                return currentTemp[0].data.push(
                    {...x, ogrzewanie : ogrzewValue, temp: tempValue, tempNast: tempNastValue })
            } else if (x.poziom==='pietro') {
                return currentTemp[1].data.push(
                    {...x, ogrzewanie : ogrzewValue, temp: tempValue, tempNast: tempNastValue })
            } 
                return currentTemp[2].data.push(
                    {...x, ogrzewanie : ogrzewValue, temp: tempValue, tempNast: tempNastValue })
            
        })

        return (
            <View style={styles.container}>
            <SectionList
              sections={currentTemp}
            //       [
            //     {title: 'D', data: ['Devin']},
            //     {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            //   ]}
              renderItem={({item}) => 
                            <Text style={styles.item}>
                                {item.nazwa} {item.ogrzewanie} {item.temp} {item.tempNast}
                            </Text>}
              renderSectionHeader={({section}) => 
                            <Text style={styles.sectionHeader}>{section.poziom}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
        )
    }
}
function mapStateToProps (state){
    return {
      wyTemp: wyTempSelector(state),
      wyjscia: wyjsciaSelector(state),
      konfigTemp: konfigTempSelector(state), 
    }
  }

export default connect(mapStateToProps)(Ogrzewanie)

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
//   <View style={styles.container}>
//   <FlatList
//       data={[
//           {key: 'Devin'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//       ]}
//       renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
// </View>