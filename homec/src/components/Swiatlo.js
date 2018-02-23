import React from 'react'
import {connect} from 'react-redux'
import {wyjsciaHashSelector} from '../reducers/register'
import {konfigSelector} from '../reducers/ustawienia'
import SwiatloForm from './SwiatloForm'
import api from '../api'

class Swiatlo extends React.Component {
    state={
        poziom: 'parter'
    }
    zapisz = (addr, value)=> api.rejestr.wyslijZmiane(addr, value)

    render(){
        const {poziom} = this.state
        const {konfig, wyjscia} = this.props
        const currentSwiatla={ parter: {}, pietro: {}, calyDom: {} }   

        konfig.map(x=>{
            const swiatlo = x.idWy>0 ? wyjscia.find(y=>y.id===x.idWy):{value: -1}
            const swiatloValue = swiatlo?swiatlo.value:-1
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
        const dataToShow=[]
        for (let lokal in currentSwiatla[poziom] ){
            dataToShow.push({lokal: lokal, data: currentSwiatla[poziom][lokal] })
        }

        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={()=>this.setState({poziom: 'parter'})}> 
                        <Text style={styles.item}>Parter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({poziom: 'pietro'})} text="Piętro">
                        <Text style={styles.item}>Piętro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.setState({poziom: 'calyDom'})}>
                        <Text style={styles.item}>Zewnętrzne</Text>
                    </TouchableOpacity>
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
      wyjscia: wyjsciaHashSelector(state),
      konfig: konfigSelector(state), 
    }
  }

export default connect(mapStateToProps)(Swiatlo)
