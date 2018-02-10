import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SectionList } from 'react-native'
import {connect} from 'react-redux'
import {wyjsciaSelector, wySatelSelector} from '../reducers/register'
import {konfigSelector} from '../reducers/ustawienia'
import CzujkaForm from './CzujkaForm'

class Dom extends React.Component {
    render(){
        const {konfig, wyjscia, wySatel} = this.props
        const currentCzujki=[]
        const grzanie=[16941, 16950]
        let howManyActive=0 
        const wyFind=wyjscia.find(x=>x.id===16999)   
        const howManyLights= wyFind?wyFind.value:0
        const howManyGrzanie=wyjscia.reduce((acc,x)=>
            acc=(x.id>=grzanie[0]&&x.id<=grzanie[1]&&x.value===1)?acc+=1:acc , 0)  

        konfig.map(x=>{
            const czujka = x.idWy>0? wySatel.find(y=>y.id===x.idWy):{value: -1}
            const czujkaValue = czujka? czujka.value: -1

            howManyActive=czujkaValue===1?howManyActive+=1: howManyActive

            if(x.rodzaj==='czujka' && czujkaValue===1){
                return currentCzujki.push({...x, key: x.id, czujka : czujkaValue})
            }
        })

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}> Włączone światła: {howManyLights}  </Text>
                    <TouchableOpacity style={styles.boxPress} 
                        onPress={() => this.props.navigation.navigate('Swiatlo')}>
                        <Text style={styles.text}> Swiatla </Text>
                    </TouchableOpacity>    
                    <TouchableOpacity style={styles.boxPress} 
                        onPress={() => this.props.navigation.navigate('Efekty')}>
                        <Text style={styles.text}> Efekty/sceny </Text>
                    </TouchableOpacity>    
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}> Włączone grzejniki: {howManyGrzanie}  </Text>
                    <TouchableOpacity style={styles.boxPress} 
                        onPress={() => this.props.navigation.navigate('Ogrzewanie')}>
                        <Text style={styles.text} >Ogrzewanie</Text>
                    </TouchableOpacity>       
                    <TouchableOpacity style={styles.boxPress} 
                        onPress={() => this.props.navigation.navigate('Harmonogram')}>
                        <Text style={styles.text}>Harmonogram</Text>
                    </TouchableOpacity>    
                </View>
                <CzujkaForm howManyActive={howManyActive} currentCzujki={currentCzujki} />
            </View>
        )
    }
}

function mapStateToProps (state){
    return {
        wyjscia: wyjsciaSelector(state),
        wySatel: wySatelSelector(state),
        konfig: konfigSelector(state), 
    }
  }

export default connect(mapStateToProps)(Dom)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#202c36',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
        borderRadius: 20,
        width: 350,
        height: 250,
        margin: 10,
    },
    boxPress: {
        backgroundColor: 'chocolate',
        borderStyle: 'solid',
        borderColor: '#3e2a19',
        borderWidth: 5,
        borderRadius: 20,
        width: 150,
        height: 100,
        margin: 10,
    },
    boxPressLong: {
        backgroundColor: 'green',
        width: 320,
        height: 50,
        margin: 10,
    },
    text: {
        width: 350,
        margin: 10,
        color: '#202c36',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6
    },
  })