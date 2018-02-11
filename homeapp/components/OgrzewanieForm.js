import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import {Icon} from 'react-native-elements'

class OgrzewanieForm extends React.Component {
    state={
        initTempNastawy: 0,
        tempNastawy: 0,
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.item.tempNast!==this.state.initTempNastawy){
            this.setState(
                {tempNastawy: nextProps.item.tempNast, initTempNastawy: nextProps.item.tempNast})
        }
    }
    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
    })
    increase = () =>
        this.setState({
            tempNastawy: Number(this.state.tempNastawy)+0.5
        })

    decrease = () =>
    this.setState({
        tempNastawy: Number(this.state.tempNastawy)-0.5
    })

    render(){
        const {tempNastawy} = this.state
        const {item, zapisz} = this.props

        return (
        <View style={styles.itemBox}>
            <Text style={styles.item}>
                {item.nazwa} 
            </Text>
            {item.ogrzewanie==1 && <Icon type='material-icon' name='wb-iridescent' color='red' />}    
            <Text style={styles.temp}>
                {item.temp} 
            </Text>
            {item.tempNast!==''&& <View style={styles.nastawa}>    
                <TouchableOpacity onPress={this.decrease}>
                    <Icon type='material-community' name='minus-box' color='#3e2a19' /> 
                </TouchableOpacity>
                <Text style={styles.tempNast}>
                    {tempNastawy}
                </Text>
                <TouchableOpacity onPress={this.increase}>
                    <Icon type='material-community' name='plus-box' color='#3e2a19' /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>zapisz(item.idTempNast, this.state.tempNastawy)}>
                    <Icon type='material-community' name='checkbox-marked' color='#3bb8c4' /> 
                </TouchableOpacity>
            </View>}
        </View>    
    )}
}
export default OgrzewanieForm


const styles = StyleSheet.create({
    text: {
        // width: 350,
        color: '#202c36',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6,
        margin: 10,
    }, 
    itemBox: {
        flex: 1, 
        flexDirection: 'row',
        paddingLeft: 5, 
        alignItems: 'flex-end'
    },
    temp: {
        color: '#202c36',
        // backgroundColor: '#e3791c',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
    },
    tempNast: {
        color: '#3e2a19',
        backgroundColor: '#e3791c',
        fontSize: 16,
        fontWeight: 'bold',
    },
    item: {
        color: '#3e2a19',
        // backgroundColor: '#e3791c',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
    },
    nastawa: {
        flex: 1,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderColor: 'red',
        alignItems: 'flex-end',
    }     
})
        // text: {
        //     // width: 350,
        //     color: '#202c36',
        //     fontSize: 18,
        //     fontWeight: 'bold',
        //     padding: 6,
        //     margin: 10,
        // }, 
        // itemBox: {
        //     flex: 1, 
        //     flexDirection: 'row',
        //     paddingLeft: 10
        // },
        // item: {
        //     color: '#3e2a19',
        //     // backgroundColor: '#e3791c',
        //     fontSize: 15,
        //     fontWeight: 'bold',
        //     marginLeft: 20,
        //     marginRight: 20,
 