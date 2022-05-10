import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/credist';

interface Props {
    actor:Cast
}
export const CastItem = ({actor}:Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
        <View style={styles.container}>
            {
                actor.profile_path &&
                <Image
                    source={{uri}}
                    style={{width:80,height:80, borderRadius:10}}
                />
            }
            
            <View style={styles.actorInfo}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>
                    {actor.name}
                </Text>     
                <Text style={{fontSize:15, color:'grey'}}>
                    {actor.character}
                </Text>     
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor:'#E9E9E9',
        borderWidth:1,
        flexDirection:'row',
        height:90,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7.0,
        
        elevation: 10,
        marginRight:15,
        padding:5
        
    },
    actorInfo:{
        marginHorizontal:10
    }
});
