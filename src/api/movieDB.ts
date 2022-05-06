import axios from "axios";

export const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'674535e177433f737c75f1f5f7707ffd',
        language:'es-ES'
    }
})