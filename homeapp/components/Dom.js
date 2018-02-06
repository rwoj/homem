import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class Dom extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Ogrzewanie')}>
                    <Text style={styles.text}> Ogrzewanie </Text>
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Swiatlo')}>
                    <Text style={styles.text}> Swiatlo </Text>
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Czujki')}>
                    <Text style={styles.text}> Czujki </Text>
                </TouchableOpacity>    
            </View>
        )
    }
}
export default Dom

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      backgroundColor: 'whitesmoke',
      color: '#4A90E2',
      fontSize: 24,
      padding: 10,
    },
  })