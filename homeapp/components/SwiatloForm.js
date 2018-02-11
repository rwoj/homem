import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import {Icon} from 'react-native-elements'

const SwiatloForm =({item, zapisz})=>(
    <View style={styles.itemBox}>    
        <TouchableOpacity onPress={()=>zapisz(item.idWySter, item.swiatlo===0?1:0)}>
            <Icon type='font-awesome' name='lightbulb-o' color={item.swiatlo===0?'blue':'yellow'} /> 
        </TouchableOpacity>
        <Text style={styles.item}>{item.nazwa} </Text>
    </View>    
)

export default SwiatloForm


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
        paddingLeft: 10
    },
    item: {
        color: '#3e2a19',
        // backgroundColor: '#e3791c',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
    }
  })