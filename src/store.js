import {reactive} from 'vue'

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/search/',
    trendUrl:'https://api.themoviedb.org/3/trending/',
    apiKey:'4e4dcff717724b5b605bbb9f0438a391',
    imgUrl:'https://image.tmdb.org/t/p/w342',
    movie:[],
    tv:[],
    // Ricerca titolo
    elementToSearch: '',
    // Ricerca Film /Serie TV filtrata
    typeOf: '',
    isLoaded: false,
})