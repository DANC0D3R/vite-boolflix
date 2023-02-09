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
      store
    }
  },
  components:{
    AppHeader,
    AppMain,
    Card
  },
  methods:{
    firstLaunch(){
      // Da rivedere
      axios.get(store.trendUrl+'movie/week?api_key='+store.apiKey+'&language=it-IT',
      {params: {media_type:'tv'}})
      .then(result => {
        store.movie = result.data.results
        console.log(store.movie);
      })
      .catch( error =>{
        console.log(error);
      })
      axios.get(store.trendUrl+'tv/week?api_key='+store.apiKey+'&language=it-IT',
      {params: {media_type:'tv'}})
      .then(result => {
        store.tv = result.data.results
        console.log(store.tv);
      })
      .catch( error =>{
        console.log(error);
      })
      store.isLoaded=true;
    },
    showResults(){
        if(store.typeOf===''){
          this.getApiCall('movie')
          this.getApiCall('tv')
        }else{
          this.getApiCall(store.typeOf)
        }
    },
    getApiCall(type){
      store.isLoaded = false;
      console.log(store.typeOf);
      store[type]=[];
        axios.get(store.apiUrl+type+'?api_key='+store.apiKey+'&query='+store.elementToSearch+'&language=it-IT')
      .then( result =>{
          store[type] = result.data.results;
          console.log(store[type]);
          store.isLoaded = true;
      })
      .catch( error =>{
        console.log(error);
      })
    }
  },
  created(){
    console.log('lanciata');
    this.firstLaunch()
  }
}
</script>

<template>
  <AppHeader @cercaserie="showResults" @changeType="showResults"/>
  <AppMain/>
</template>

<!-- Stile -->
<style lang="scss">
@use './assets/scss/general.scss';

</style>
