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
     this.state = {
       book: 'React Native in Action'
     }
   }
 
   updateBook() {
     this.setState({
       book: 'Express in Action'
     })
   }
 
   render() {
     const { book } = this.state
     return (
       <BookDisplay
         updateBook={() => this.updateBook()}
         book={book} />
     )
   }
 }
 
 class BookDisplay extends React.Component {
   render() {
     const { book, updateBook } = this.props
     return (
       <View>
         <Text
           onPress={updateBook}>
           {book}
         </Text>
       </View>
     )
   }
 }
 
 
 export default App;