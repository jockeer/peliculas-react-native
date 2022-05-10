import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movie';
import { Cast } from '../interfaces/credist';
import Icon  from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem';

interface Props {
    movieFull:MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({movieFull,cast}:Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{marginHorizontal:20,}}>
            <View style={{flexDirection:'row', alignItems:'center',}}>
                <Icon
                    name='star'
                    size={20}
                    color='blue'
                />
                <Text style={{marginLeft:10,}}>{movieFull.vote_average} </Text>

                <Text>
                    - { movieFull.genres.map(g => g.name ).join(', ') }
                </Text>
                
            </View>
            {/* Historia */}
            <Text style={{fontSize:18, marginTop:10, fontWeight:'bold', color:'black'}}>
                Historia
            </Text>
            <Text style={{color:'black'}}>
                {movieFull.overview}
            </Text>
            <Text style={{fontSize:18, marginTop:10, fontWeight:'bold', color:'black'}}>
                Presupuesto
            </Text>
            <Text style={{color:'black'}}>
                { currencyFormatter.format(movieFull.budget,{code:'USD'} ) }
            </Text>
        </View>

        {/* Casting */}
        <View style={{marginTop:10, marginBottom:100}}>
            <Text style={{fontSize:18, marginTop:10, fontWeight:'bold', color:'black', marginHorizontal:20}}>
                Actores
            </Text>
            <FlatList
                data={cast}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=> <CastItem actor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10, height:113}}
            />

        </View>
    </>
  )
}
