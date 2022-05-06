import React from 'react'

import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParams,'HomeScreen'>{}

export const HomeScreen = ({navigation}:Props) => {

  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title='ir detalle'
        onPress={()=> navigation.navigate('DetailScreen')}
      />

    </View>
  )
}
