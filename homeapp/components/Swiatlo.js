import React from 'react'
import { StyleSheet, Text, View, Button, SectionList } from 'react-native'
import {connect} from 'react-redux'
import {wyjsciaSelector} from '../reducers/register'
import {konfigSelector} from '../reducers/ustawienia'
import SwiatloForm from './SwiatloForm'

class Swiatlo extends React.Component {
    render(){
        const {konfig, wyjscia} = this.props
        const currentSwiatla=[{"poziom": 'parter', "data": []},
                           {"poziom": 'pietro', "data": []},
                           {"poziom": 'calyDom', "data": []}]

        konfig.map(x=>{
            const swiatlo = x.idWy>0? wyjscia.find(y=>y.id===x.idWy):{value: -1}
            const swiatloValue = swiatlo?swiatlo.value:-1
            // const swiatloSter = x.idWySter>0? wyjscia.find(y=>y.id===x.idWySter):{value: ''}
            // const swiatloSterValue = swiatloSter?swiatloSter.value:''
            if(x.rodzaj==='swiatlo'){
                if (x.poziom==='parter'){
                    return currentSwiatla[0].data.push(
                        {...x, swiatlo : swiatloValue})
                            // , swiatloSter: swiatloSterValue })
                } else if (x.poziom==='pietro') {
                    return currentSwiatla[1].data.push(
                        {...x, swiatlo : swiatloValue})
                        // , swiatloSter: swiatloSterValue })
                } 
                    return currentSwiatla[2].data.push(
                        {...x, swiatlo : swiatloValue})
                        // , swiatloSter: swiatloSterValue })
            }
        })
        return (
            <View style={styles.container}>
            <SectionList
              sections={currentSwiatla}
              renderItem={({item}) => 
                <SwiatloForm item={item} />}    
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
      wyjscia: wyjsciaSelector(state),
      konfig: konfigSelector(state), 
    }
  }

export default connect(mapStateToProps)(Swiatlo)

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
