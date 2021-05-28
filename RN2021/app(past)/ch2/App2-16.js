/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 //import React, {Component} from 'react'
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 class App extends React.Component {
   constructor() {
     super()
     this.state = { loading: true, data: {} }
   }
   componentDidMount() {
       // #simulate ajax call
     setTimeout(() => {
       this.setState({
         loading: false,
         data: { name: 'Nader Dabit', age: 35 }
       })
     }, 2000)
   }
   render() {
     if (this.state.loading) {
       return <Text>Loading</Text>
     }
     const { name, age } = this.state.data
     return (
       <View>
         <Text>Name: {name}</Text>
         <Text>Age: {age}</Text>
       </View>
     )
   }
 }
 
 export default App;