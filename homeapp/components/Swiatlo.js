import React from 'react'
import { StyleSheet, Text, View, Button, SectionList } from 'react-native'
import {connect} from 'react-redux'
import {wyjsciaSelector} from '../reducers/register'
import {konfigSelector} from '../reducers/ustawienia'
import SwiatloForm from './SwiatloForm'
import api from '../api'

class Swiatlo extends React.Component {
    state={
        poziom: 'parter'
    }
    zapisz = (addr, value)=> 
        api.rejestr.wyslijZmiane(addr, value)

    render(){
        const {poziom} = this.state
        const {konfig, wyjscia} = this.props
        const currentSwiatla={
            parter: {},
            pietro: {},
            calyDom: {}
        }   
            // [{"poziom": 'parter', "data": []},
            //                {"poziom": 'pietro', "data": []},
            //                {"poziom": 'calyDom', "data": []}]

        konfig.map(x=>{
            const swiatlo = x.idWy>0? wyjscia.find(y=>y.id===x.idWy):{value: -1}
            const swiatloValue = swiatlo?swiatlo.value:-1
            // const swiatloSter = x.idWySter>0? wyjscia.find(y=>y.id===x.idWySter):{value: ''}
            // const swiatloSterValue = swiatloSter?swiatloSter.value:''
            if(x.rodzaj==='swiatlo'){
                if (x.poziom==='parter'){
                    if (!currentSwiatla.parter[x.nazwaLokalu]){
                        currentSwiatla.parter[x.nazwaLokalu]=[]
                    }
                    return currentSwiatla.parter[x.nazwaLokalu].push(
                        {...x, swiatlo : swiatloValue})
                } else if (x.poziom==='pietro') {
                    if (!currentSwiatla.pietro[x.nazwaLokalu]){
                        currentSwiatla.pietro[x.nazwaLokalu]=[]
                    }
                    return currentSwiatla.pietro[x.nazwaLokalu].push(
                        {...x, swiatlo : swiatloValue})
                }
                if (!currentSwiatla.calyDom[x.nazwaLokalu]){
                    currentSwiatla.calyDom[x.nazwaLokalu]=[]
                }
                return currentSwiatla.calyDom[x.nazwaLokalu].push(
                    {...x, swiatlo : swiatloValue}) 
            }
        })
        // console.log("parter",currentSwiatla.parter)
        const dataToShow=[]
        for (let lokal in currentSwiatla[poziom] ){
            dataToShow.push({lokal: lokal, data: currentSwiatla[poziom][lokal] })
        }

        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Button color='#3b84c4' onPress={()=>this.setState({poziom: 'parter'})} title='Parter'/>
                    <Button color='#3b84c4' onPress={()=>this.setState({poziom: 'pietro'})} title='Piętro'/>
                    <Button color='#3b84c4' onPress={()=>this.setState({poziom: 'calyDom'})} title='Zewnętrzne'/>
                </View>    
                <SectionList style={styles.box}
                    sections={dataToShow}
                    renderItem={({item}) => 
                        <SwiatloForm item={item} zapisz={this.zapisz}/>}    
                    renderSectionHeader={({section}) => 
                        <Text style={styles.sectionHeader}>{section.lokal}</Text>}
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
