import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const SwiatloForm =({item})=>(
    <View style={styles.itemBox}>    
        <Text style={styles.item}> {item.nazwaLokalu} {item.nazwa} {item.swiatlo}  </Text>
    </View>    
)

export default SwiatloForm


const styles = StyleSheet.create({
    text: {
        width: 350,
        color: '#202c36',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6,
        margin: 10,
    }, 
    itemBox: {
    },
    item: {
        color: '#3e2a19',
        backgroundColor: '#e3791c',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
    }
  })