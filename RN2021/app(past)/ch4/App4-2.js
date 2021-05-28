import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>    
        <Text style={[styles.message,styles.warning]}>Some Text</Text>    
      </View>    
    )
  }
}

const styles = StyleSheet.create({
  container: {    
    marginLeft: 20,
    marginTop: 20
  },
  message: {    
    fontSize: 18
  },
  warning: {    
    color: 'red'      
  }
});