import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const CzujkaForm =({howManyActive, currentCzujki})=>(
    <View style={styles.box}>    
        <Text style={styles.text}> Aktywne czujki: {howManyActive} </Text>
        <FlatList
            data={currentCzujki}
            renderItem={({item})=>
                <Text style={styles.item}>
                    {item.nazwaLokalu} ({item.poziom})
                </Text>}
        />
    </View>    

)
export default CzujkaForm


const styles = StyleSheet.create({
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
    text: {
        width: 350,
        color: '#202c36',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6,
        margin: 10,
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
