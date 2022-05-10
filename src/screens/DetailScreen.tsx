import React from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, ActivityIndicator,TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

export const DetailScreen = ({route, navigation}:Props) => {

  const movie = route.params

  const {height} = useWindowDimensions()

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);
  
  return (
    <ScrollView>
      <View style={{...styles.imageContainer, height:height*0.7}}>
        <View style={styles.imageBorder}>
          <Image
            source={{uri}}
            style={styles.posterImage}
          />
        </View>

      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>

      </View> 
      
        { isLoading 
          ? <ActivityIndicator size={30} color='blue' style={{marginTop: 20}}/>
          : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.pop()}
        >
          <Icon
            name='arrow-back'
            color={'white'}
            size={40}
          />

        </TouchableOpacity>


    </ScrollView>
  )
}
const styles = StyleSheet.create({
  imageContainer:{
    width:'100%',
    // overflow:'hidden',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7.0,
    
    elevation: 10,
    borderBottomEndRadius:25,
    borderBottomLeftRadius:25,
    
  },
  imageBorder:{
    flex:1,
    overflow:'hidden',
    borderBottomEndRadius:25,
    borderBottomLeftRadius:25,

  },
  posterImage:{
    flex:1,
    // borderBottomEndRadius:20
  },
  marginContainer:{
    marginHorizontal:20,
    marginTop:20
  },
  subTitle:{
    fontSize:18,
    opacity:0.6,
    color:'black'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  backButton:{
    position:'absolute',
    zIndex:999,
    elevation:9,
    top:30,
    left:5
  }

});
