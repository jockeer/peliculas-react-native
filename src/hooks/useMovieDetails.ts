import {useEffect, useState} from 'react';
import { movieDB } from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/credist';
import { MovieFull } from '../interfaces/movie';

interface MovieDetails {
  isLoading:boolean;
  movieFull?:MovieFull;
  cast:Cast[]
}

export const useMovieDetails = (movieID:number) => {

  const [state, setState] = useState<MovieDetails>({
    isLoading:true,
    movieFull: undefined,
    cast:[]
  });

  const getMovieDetails = async () => {
    const movieDetails = movieDB.get<MovieFull>(`/${movieID}`)
    const movieCast = movieDB.get<CreditsResponse>(`/${movieID}/credits`)

    const [ movieDetalisResp, castResp] = await Promise.all([
      movieDetails,
      movieCast
    ])

    setState({
      isLoading:false,
      movieFull:movieDetalisResp.data,
      cast:castResp.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])
  
  return {
    ...state
  }
}
