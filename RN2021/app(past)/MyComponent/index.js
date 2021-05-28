 /**
  * @format
  */
 import React from 'react';
 import { AppRegistry } from 'react-native';
 import MyComponent from './app/MyComponent';
 import { name as appName } from './app.json';
 AppRegistry.registerComponent(appName, () => MyComponent)