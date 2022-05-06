import React from 'react'
import Carousel from 'react-native-snap-carousel';

import { StackScreenProps } from '@react-navigation/stack'
import { ActivityIndicator, LogBox, ScrollView, useWindowDimensions, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
])

interface Props extends StackScreenProps<RootStackParams,'HomeScreen'>{}

export const HomeScreen = ({navigation}:Props) => {


  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
  const {top} = useSafeAreaInsets()

  const {width, height} = useWindowDimensions()

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={40}/>
      </View>
    )
  }


  return (
    <ScrollView>
      <View style={{marginTop: top + 20 }}>
      
        <View style={{height:440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }) => <MoviePoster movie={item}/> }
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={1}
          />
        </View>

        <HorizontalSlider movies={popular} title="Populares"/>
        <HorizontalSlider movies={topRated} title="Mejor Valoradas"/>
        <HorizontalSlider movies={upcoming} title="Proximas"/>
      </View>

    </ScrollView>
  )
}
