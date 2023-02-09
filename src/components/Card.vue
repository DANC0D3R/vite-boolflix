<script>
import {store} from '../store'
export default {
    name:'Card',
    props:{
    movie:Object
    },
    data(){
        return{
        store
        }
    },
    methods:{
        rating(number){
            let newRating = (Math.floor(Math.round(number / 2)));
            let stars = [];
            for(let i=newRating; i>=1; i--){
                stars.push(`<i class="fa-solid fa-star"></i>`);
            };
            for(let j = (5 - newRating); j >= 1; j--){
                stars.push(`<i class="fa-regular fa-star"></i>`);
            }
            return stars.join('');
        }
    }
}
</script>

<template>
    <div class="card col-2">
        <img :src="`${store.imgUrl}${movie.poster_path}`" class="card-img-top" :alt="movie.title">
        <div class="card-body">
            <p class="card-text">{{movie.title}}</p>
            <p class="card-text">Voto originale:{{(movie.vote_average)}}</p>
            <p class="card-text" v-html="rating(movie.vote_average)"></p>
        </div>
    </div>
</template>

<!-- Stile -->
<style lang="scss" scoped>
@use '../assets/scss/general.scss'
</style>
