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
   handleClick() {
     this._timeout = setTimeout(() => {
       this.openWidget();
     }, 2000);
   }
   componentWillUnmount() {
     clearTimeout(this._timeout);
   }
   render() {
     return <SomeComponent
       handleClick={() => this.handleClick()} />
   }
 }
 
 export default App;