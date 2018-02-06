import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Ogrzewanie extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.text}> Ogrzewanie </Text>

            </View>
        )
    }
}
export default Ogrzewanie

const styles = StyleSheet.create({
    text: {
      backgroundColor: 'whitesmoke',
      color: '#4A90E2',
      fontSize: 24,
      padding: 10,
    },
  })