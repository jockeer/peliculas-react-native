import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movie';

interface Props{
    movie:Movie;
    height?:number;
    width?:number
}



export const MoviePoster = ({ movie, height= 420, width = 300}:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const navigation = useNavigation()
    return (
        <TouchableOpacity 
            style={{ width, height, marginHorizontal:2, paddingBottom:20, paddingHorizontal:6, borderRadius:20 }}
            activeOpacity={0.9}
            onPress={() => (navigation.navigate('DetailScreen' as never, movie as never))}
        >
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={styles.image}
                />

            </View>
        </TouchableOpacity>
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