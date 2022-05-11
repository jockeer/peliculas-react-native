import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

export const App = () => {
  return (
    <>
       <StatusBar 
        backgroundColor='black'
        barStyle='light-content'
      />
      <NavigationContainer>
        <GradientProvider>
          <Navigation />
        </GradientProvider>
        {/* <FadeScreen/> */}
      </NavigationContainer>
    
    </>
   
  )
}
