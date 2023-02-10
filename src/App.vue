<script>
import {store} from './store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import Card from './components/Card.vue'

export default {
  name:'App',
  data(){
    return{
      store,
      title: ''
    }
  },
  components:{
    AppHeader,
    AppMain,
    Card
  },
  methods:{
    firstLaunch(){
      axios.get(store.trendUrl+'movie/week?api_key='+store.apiKey+'&language=it-IT',
      {params: {media_type:'movie'}})
      .then(result => {
        store.movie = result.data.results
      })
      .catch( error =>{
        console.log(error);
      })
      axios.get(store.trendUrl+'tv/week?api_key='+store.apiKey+'&language=it-IT',
      {params: {media_type:'tv'}})
      .then(result => {
        store.tv = result.data.results
      })
      .catch( error =>{
        console.log(error);
      })
      store.isLoaded=true;
      this.title='Di tendenza'
    },
    showResults(){
        if(store.typeOf===''){
          this.getApiCall('movie')
          this.getApiCall('tv')
        }else{
          this.getApiCall(store.typeOf)
        }
        this.title='Risultati della ricerca'
    },
    getApiCall(type){
      store.isLoaded = false;
      store[type]=[];
        axios.get(store.apiUrl+type+'?api_key='+store.apiKey+'&query='+store.elementToSearch+'&language=it-IT')
      .then( result =>{
        store[type] = result.data.results;
        store.isLoaded = true;
      })
      .catch( error =>{
        console.log(error);
      })
    }
  },
  created(){
    console.log('lanciata');
    this.firstLaunch();
  }
}
</script>

<template>
  <AppHeader @cercaserie="showResults" @changeType="showResults"/>
  <h1>{{ title }}</h1>
  <AppMain/>
</template>

<!-- Stile -->
<style lang="scss">
@use './assets/scss/general.scss';
h1{
  text-align: center;
  
  margin: 0 auto 0;

  font-size: 3.5rem;
  }
</style>
