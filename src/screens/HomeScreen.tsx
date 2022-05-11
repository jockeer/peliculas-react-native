import React, { useContext } from 'react'
import Carousel from 'react-native-snap-carousel';

import ImageColors from 'react-native-image-colors'

import { ActivityIndicator, ScrollView, useWindowDimensions, View, LogBox } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getColores } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
])

export const HomeScreen = () => {


  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
  const {top} = useSafeAreaInsets()

  const {width} = useWindowDimensions()

  const {setMainColors} = useContext(GradientContext)
  const getPosterColores = async (index:number) => {

    const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`

    const [primary ='green', secundary='orange'] = await getColores(uri)

    setMainColors({primary,secundary})
  
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColores(0)
    }
  }, [nowPlaying])
  

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={40}/>
      </View>
    )
  }


  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20 }}>
        
          <View style={{height:440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item}/> }
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={1}
              onSnapToItem={(index ) => getPosterColores( index )}
            />
          </View>

          <HorizontalSlider movies={popular} title="Populares"/>
          <HorizontalSlider movies={topRated} title="Mejor Valoradas"/>
          <HorizontalSlider movies={upcoming} title="Proximas"/>
        </View>

      </ScrollView>
      
    </GradientBackground>
  )
}
