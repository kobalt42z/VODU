
/*
*________BASEIC________
*/
export const API_KEY  = '?api_key=2b4c58716a8ad12c213cec5e081389ee'

export const BACK_DROP_BASE_URL = 'https://image.tmdb.org/t/p/original'
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w400'
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500'
export const BASE_URL = 'https://api.themoviedb.org/3/'
export const TV_URL = 'https://api.themoviedb.org/3/tv/'
export const MOVIE_URL = 'https://api.themoviedb.org/3/movie/'

/*
*________GENERAL KEYWORDS________
*/
export const LANGUAGE = '&language=en-Us'
export const QUERY ='&query=' 
export const PAGE = '&page='
export const DPOPULARITY = '&sort_by=popularity.desc'
export const APOPULARITY = '&sort_by=popularity.asc'

/*
*________FUNCTIONS________
*/
// ? multi search formula  BASE_URL+MULTI_SEARCH+API_KEY+LANGUAGE+QUERY+PAGE
//? genre formula  BASE_URL+GENERE_URL+API_KEY+LANGUAGE
export const MULTI_SEARCH = `search/multi`
export const GENERE_URL= `genre/movie/list`

/*
*________DISCOVER________
*/
// ? discover formula  BASE_URL+DISCOVER_MOVIE_URL+API_KEY+LANGUAGE+DPOPULARITY+PAGE
// ? discover formula  BASE_URL+DISCOVER_TV_URL+API_KEY+LANGUAGE+DPOPULARITY+PAGE
export const DISCOVER_MOVIE_URL = `discover/movie`
export const DISCOVER_TV_URL = `discover/tv`

/*
*________SEASONS & EPISODES________
*/
// ? season formula  TV_URL+SEASON+NUM+API_KEY+LANGUAGE+PAGE
// ? episode formula  TV_URL+SEASON+NUM+EPISODE+NUM+API_KEY+LANGUAGE+PAGE
export const  SEASON = `/season/`
export const  EPISODE = `/episode/`
export const KEYWORDS = `keywords`