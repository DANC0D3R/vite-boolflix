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
            <!-- Film -->
            <div class="row p-2" v-show="store.typeOf ==='' || store.typeOf==='movie'">
                <h2>Film</h2>
                <Card v-for="movie in store.movie" :key="movie.id" :elem="movie"/>
            </div>
            <!-- Serie TV -->
            <div class="row py-3 px-1" v-show="store.typeOf ==='' || store.typeOf==='tv'">
                <h2>Serie TV</h2>
                <Card v-for="tvshow in store.tv" :key="tvshow.id" :elem="tvshow"/>
            </div>
        </div>
    </main>
</template>

<!-- Stile -->
<style lang="scss" scoped>
    main{
        width:100vw;
        height:calc(100vh - 170px);

        overflow-y: auto;
        &::-webkit-scrollbar{
        width: 8px;
        
        border-radius: 3px;

        background-color: rgba(73, 71, 71, 0.725);
        }
        &::-webkit-scrollbar-thumb{
        background:#DB0011; 

        border-radius: 3px;
        }
        .dc-cont > .row{
        margin-bottom: 15px;

        padding: 12px;
        }
    }
    h1{
        margin: 15px 0;

        padding:0;

        font-size: 4rem;
    }
    h2{
        margin: 18px 0 15px;

        padding:0;

        font-size: 2.5rem;
    }
</style>
