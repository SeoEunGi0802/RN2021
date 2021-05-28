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
 
//UNSAFE_componentWillMount 생명주기 메서드
//리액트 17 버젼에서는 componentDidUpdate 메서드가 UNSAFE_componentWillMount로 바뀌었다

 class App extends React.Component {
   UNSAFE_componentWillMount(prevProps, prevState) {
     if(prevState.showToggled === this.state.showToggled) {
          this.setState({
         showToggled: !showToggled
       })
     }
   }
   render() {
     return <SomeComponent />
   }
 }
 
 export default App;