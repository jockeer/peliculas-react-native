import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movie';

interface Props{
    movie:Movie
}

export const MoviePoster = ({ movie }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <View style={{
        width: 300,
        height: 420,
    }}>
        <View style={styles.imageContainer}>
            <Image 
                source={{uri}}
                style={styles.image}
            />

        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    image: {
        flex:1,
        borderRadius:20
    },
    imageContainer:{
        flex:1,
        borderRadius:20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
	        height: 6,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7.0,

        elevation: 10,

    }
});