import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

export const App = () => {
  return (
    <>
       <StatusBar 
        backgroundColor='black'
        barStyle='light-content'
      />
      <NavigationContainer>
        
        <Navigation />
      </NavigationContainer>
    
    </>
   
  )
}
