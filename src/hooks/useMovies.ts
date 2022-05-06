import React, { useEffect, useState } from 'react'
import { movieDB } from '../api/movieDB';
import { Movie, MovieInterface } from '../interfaces/movie';

interface PeliculasState {
    nowPlaying:Movie[];
    popular:Movie[];
    topRated:Movie[];
    upcoming:Movie[];
}

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ moviesState, setMoviesState ] = useState<PeliculasState>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upcoming:[],
    })

    useEffect(() => {
        getMovies()
    }, [])
    
    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieInterface>('/now_playing')
        const popularPromise = movieDB.get<MovieInterface>('/popular')
        const topRatedPromise = movieDB.get<MovieInterface>('/top_rated')
        const upcomingPromise = movieDB.get<MovieInterface>('/upcoming')

        const resp = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results,
        })

        setIsLoading(false)
    }
    
    
  return {
      ...moviesState,
    isLoading
  }
}
