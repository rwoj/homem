import React from 'react'
import { StyleSheet, Text, View, SectionList, Button } from 'react-native'
import {connect} from 'react-redux'
import {wyjsciaSelector, wyTempSelector} from '../reducers/register'
import {konfigTempSelector} from '../reducers/ustawienia'
import OgrzewanieForm from './OgrzewanieForm'
import api from '../api'

class Ogrzewanie extends React.Component {
  state={
    poziom: 'all',
  }
  zapisz = (addr, value)=> 
    api.rejestr.wyslijZmianeTemp(addr, value)
        .catch(err => console.log(err))

  render(){
    const {poziom} = this.state
    const {konfigTemp, wyTemp, wyjscia} = this.props
    const currentTemp=[{"poziom": 'parter', "data": []},
                        {"poziom": 'pietro', "data": []}]
    const currentTempCalyDom =[{"poziom": 'calyDom', "data": []}]
    
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
            return currentTempCalyDom[0].data.push(
                {...x, ogrzewanie : ogrzewValue, temp: tempValue, tempNast: tempNastValue })
        
    })

    return (
        <View style={styles.container}>
        <View style={styles.buttons}>
            <Button color='#3b84c4' onPress={()=>this.setState({poziom: 'all'})} title='Parter/Piętro'/>
            <Button color='#3b84c4' onPress={()=>this.setState({poziom: 'calyDom'})} title='Pozostałe'/>
        </View>    
        <SectionList style={styles.box}
          sections={poziom==='all'?currentTemp:currentTempCalyDom}
          renderItem={({item}) => 
            <OgrzewanieForm item = {item} zapisz={this.zapisz}/>}
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
    backgroundColor: '#202c36',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22
},
buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#202c36',
    width: 350,
   },
box: {
    flex: 1,
    backgroundColor: 'chocolate',
    borderStyle: 'solid',
    borderColor: '#3e2a19',
    borderWidth: 5,
    borderRadius: 10,
    width: 350,
    height: 500,
    margin: 10,
},
sectionHeader: {
  paddingTop: 5,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 2,
  fontSize: 16,
  fontWeight: 'bold',
  backgroundColor: '#3e2a19',
  color: '#c9d5df'
},
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
})
      // container: {
      //  flex: 1,
      //  paddingTop: 22
      // },
      // buttons: {
      //   flexDirection: 'row',
      //   justifyContent: 'space-between',
      //   backgroundColor: '#202c36',
      //   width: 350,
      //  },
      // sectionHeader: {
      //   paddingTop: 2,
      //   paddingLeft: 10,
      //   paddingRight: 10,
      //   paddingBottom: 2,
      //   fontSize: 14,
      //   fontWeight: 'bold',
      //   backgroundColor: 'rgba(247,247,247,1.0)',
      // },
      // item: {
      //   padding: 10,
      //   fontSize: 18,
      //   height: 44,
      // },
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