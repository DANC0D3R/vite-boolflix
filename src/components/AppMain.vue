<script>
import {store} from '../store'
import Card from './Card.vue'
export default {
    name:'AppMain',
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
            <div class="row">
                <Card v-for="movie in store.moviesList" :key="movie.id" :movie="movie"/>
            </div>
        </div>
    </main>
</template>

<!-- Stile -->
<style>
    
</style>
