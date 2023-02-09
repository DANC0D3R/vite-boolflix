<script>
import {store} from '../store'

import Card from './Card.vue'
export default {
    name:'AppMain',
    props:{
    title: String
    },
    data(){
        return{
        store
        }
    },
    components:{
    Card
    },
}
</script>

<template>
    <main>
        <div class="container dc-cont">
            <h1>Di tendenza</h1>
            <!-- Film -->
            <div class="row" v-show="store.typeOf ==='' || store.typeOf==='movie'">
                <h2>Film</h2>
                <Card v-for="movie in store.movie" :key="movie.id" :elem="movie"/>
            </div>
            <!-- Serie TV -->
            <div class="row" v-show="store.typeOf ==='' || store.typeOf==='tv'">
                <h2>Serie TV</h2>
                <Card v-for="tvshow in store.tv" :key="tvshow.id" :elem="tvshow"/>
            </div>
        </div>
    </main>
</template>

<!-- Stile -->
<style lang="scss" scoped>
@use '../assets/scss/general.scss';
    main{
        width:100vw;
        height:calc(100vh - 70px);

        background:linear-gradient(45deg, black, grey);
        overflow-y: auto;
    }
</style>
