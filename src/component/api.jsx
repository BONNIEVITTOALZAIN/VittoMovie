import axios  from "axios";


export const getMovieList = async () => {
    const movie = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4b48127dff28cde3ea24d3f3b708824d")
    console.log({movieList: movie})
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=4b48127dff28cde3ea24d3f3b708824d`)
    return search.data
}
