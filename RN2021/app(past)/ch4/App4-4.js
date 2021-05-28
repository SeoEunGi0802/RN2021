import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { styles, buttons } from './styles'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={buttons.primary}>
          <Text style={{ fontSize: 18, color: 'red' }}>Some Text</Text>
        </TouchableHighlight>
      </View >
    )
  }
}