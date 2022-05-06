import React, { useEffect, useState } from 'react'
import { movieDB } from '../api/movieDB';
import { Movie, MovieInterface } from '../interfaces/movie';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [ movieNowPlaying, setmovieNowPlaying] = useState<Movie[]>([])

    useEffect(() => {
        getMovies()
    }, [])
    
    const getMovies = async () => {
        setIsLoading(true)
        const resp = await movieDB.get<MovieInterface>('/now_playing')
        const movies = resp.data.results
        setmovieNowPlaying(movies)

        setIsLoading(false)
    }
    
    
  return {
    isLoading,
    movieNowPlaying
  }
}
