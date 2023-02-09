import {reactive} from 'vue'

export const store = reactive ({
    apiUrlMovie : 'https://api.themoviedb.org/3/search/movie?api_key=830f801987e075f53ffa8a84c8fde8d7&query=',
    apiUrlTv : 'https://api.themoviedb.org/3/search/tv?api_key=830f801987e075f53ffa8a84c8fde8d7&query=',
    imgUrl:'https://image.tmdb.org/t/p/w342',
    moviesList: [],
    // Ricerca titolo
    elementToSearch : '',
    // Ricerca Film /Serie TV filtrata
    typeToSearch:'',
    isLoaded : false,
})