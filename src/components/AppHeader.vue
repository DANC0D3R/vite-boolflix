<script>
import {store} from '../store'
export default {
    name:'AppHeader',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container-fluid h-100">
            <div class="row align-items-center h-100 justify-content-between">
                <!-- Logo -->
                <div class="col-2 logo h-100 align-items-center">
                    <img src="../assets/img/boolflix-logo.png" alt="logo-boolfix">
                </div>
                <!-- Barra di ricerca -->
                <div class="search-field col-4 d-flex">
                    <span class="d-flex align-items-center justify-content-center"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="search" id="boolsearch" name="boolsearch" v-model="store.elementToSearch" @keyup.enter="$emit('cercaserie')">
                    <select class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <option class="dropdown-item" selected value="">Categoria</option>
                        <option class="dropdown-item" value="movie">Film</option>
                        <option class="dropdown-item" value="TV">Serie TV</option>
                    </select>
                </div>
            </div>
        </div>
    </header>
</template>

<!-- Stile -->
<style lang="scss">
@use '../assets/scss/variables' as *;

</style>
