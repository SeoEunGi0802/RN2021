import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.flexContainer]}>
          <Example style={[{ flex: 1 }, styles.darkgrey]}>A 50%</Example>
          <Example style={[{ flex: 1 }]}>B 50%</Example>
        </View>
        <View style={[styles.flexContainer]}>
          <Example style={[{ flex: 1 }, styles.darkgrey]}>C 33%</Example>
          <Example style={{ flex: 2 }}>D 66%</Example>
        </View>
        <View style={[styles.flexContainer]}>
          <Example style={[{ flex: 1 }, styles.darkgrey]}>E 25%</Example>
          <Example style={{ flex: 3 }}>F 75%</Example>
        </View>
      </View>
    );
  }
}

const Example = (props) => (
  <View style={[styles.example, props.style]}>
    <Text>
      {props.children}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    flex: 1
  },
  example: {
    width: 75,
    height: 75,
    borderWidth: 2,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
});