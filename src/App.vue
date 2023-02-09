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
    getApiCall(){
      store.isLoaded = false;
      store.moviesList=[];
      console.log(axios.get(store.apiUrlMovie+store.elementToSearch))
      axios.get(store.apiUrlMovie+store.elementToSearch)
      .then( result =>{
          store.moviesList = result.data.results;
          console.log(store.moviesList);
          store.isLoaded = true;
      })
      .catch( error =>{
        console.log(error);
      })
    }
  },
  mounted(){
    console.log('lanciata');
    this.getApiCall()
  }
}
</script>

<template>
  <AppHeader @cercaserie="getApiCall"/>
  <AppMain />
</template>

<!-- Stile -->
<style lang="scss">
@use './assets/scss/general.scss';

</style>
