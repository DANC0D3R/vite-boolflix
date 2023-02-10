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
                <div class="col-2 logo d-flex align-items-center">
                    <a href="index.html"><img class="logo-text" src="../assets/img/boolflix-text.png" alt="boolfix"></a>
                </div>
                <!-- Barra di ricerca -->
                <div class="search-field col-4 d-flex">
                    <span class="d-flex align-items-center justify-content-center"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="search" id="boolsearch" name="boolsearch" placeholder="Cerca un film o una serie tv..." v-model="store.elementToSearch" @keyup="$emit('cercaserie')">
                    <!-- Selzione categoria -->
                    <select class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" v-model="store.typeOf" @change="$emit('changeType')">
                        <option class="dropdown-item" selected value="">Categoria</option>
                        <option class="dropdown-item" value="movie">Film</option>
                        <option class="dropdown-item" value="tv">Serie TV</option>
                    </select>
                </div>
            </div>
        </div>
    </header>
</template>

<!-- Stile -->
<style lang="scss" scoped>
    header{
        height: 70px;

        padding: 7px;
        .logo a > img{
            max-height: 90%;
        }
        .search-field{
            justify-content: flex-end;
            span{
                padding: 10px;

                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;

                color: #FFFFFF;
                background-color: rgba(52, 49, 49, 0.876);
            }
            .dropdown-toggle{
                font-size: 80%;

                border: none;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;

                color: #FFFFFF;
                background-color: #DB0011;
                
                outline: none;

                cursor: pointer;
            }
            input[data-v-48a13218]{ 
                min-width: 200px;
                
                padding: 5px;

                font-size: 80%;
                &:focus-visible{
                    border-color: #DB0011;

                    outline: #DB0011;
                }
            }
        }
    }
</style>
