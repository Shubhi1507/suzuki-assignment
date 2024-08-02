/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import ParentComponent from './app/screens/Parent';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ParentComponent />
    </SafeAreaView>
  );
}



export default App;
