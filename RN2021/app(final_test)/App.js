import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RenderCom from './RenderCom'
import { styles } from './Styles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 201930113,
      name: "서은기"
    }
  }
  render() {
    const { id, name } = this.state
    return (
      <View style={styles.container}>
        <RenderCom
          id={id}
          name={name}
          str={"기말 평가"}
        />
      </View>
    )
  }
}
export default App