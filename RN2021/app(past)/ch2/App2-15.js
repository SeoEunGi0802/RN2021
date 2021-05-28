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
 
 export default class App extends React.Component {
   state = {
     userLoggedIn: false
   }
 
   static getDerivedStateFromProps(nextProps, nextState) {
     if (nextProps.user.authenticated) {
       return {
         userLoggedIn: true
       }
     }
     return null
   }
   
   render() {
     return (
       <View>
         {
           this.state.userLoggedIn && (
             <AuthenticatedComponent />
           )
         }
       </View>
     );
   }
 }
 
 
 //export default App;