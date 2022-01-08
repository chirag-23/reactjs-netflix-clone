const API_KEY = "1fce841d29dd3277503812dcbc20adf3";
const movie_id = "19404";
// 
const Requests = {
    fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,

    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    
    fetchTVPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchRomanticTV: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchSimilarSuggestions: `/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    
    
    fetchLatestTV: `/tv/latest?api_key=${API_KEY}&language=en-US`,
}

export default Requests;