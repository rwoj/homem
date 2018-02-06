import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class Swiatlo extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.text}> swiatlo </Text>
                <Button
                    title="Go to Ogrzewanie"
                    onPress={() => this.props.navigation.navigate('Ogrzewanie')}
                    />
            </View>
        )
    }
}
export default Swiatlo

const styles = StyleSheet.create({
    text: {
      backgroundColor: 'whitesmoke',
      color: '#4A90E2',
      fontSize: 24,
      padding: 10,
    },
  })
