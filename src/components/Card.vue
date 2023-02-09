<script>
import {store} from '../store'

export default {
    name:'Card',
    props:{
    elem:Object
    },
    data(){
        return{
        store,
        isPresent: ''
        }
    },
    methods:{
        rating(number){
            if(number > 0){
                let newRating = (Math.floor(Math.round(number / 2)));
            let stars = [];
            for(let i=newRating; i>=1; i--){
                stars.push(`<i class="fa-solid fa-star style="color: gold;"></i>`);
            };
            for(let j = (5 - newRating); j >= 1; j--){
                stars.push(`<i class="fa-regular fa-star"></i>`);
            }
            return stars.join('');
            } else {return 'Nessuna valutazione'}
        },
        getFlag(value){
        let flag;
        let flagPath = '/node_modules/flag-icons/flags/1x1/';
        switch(value){
            case 'da':
                flag = 'dk.svg';
                break;
            case 'de':
                flag = 'de.svg';
                break;
            case 'en':
                flag = 'us.svg';
                break;
            case 'es':
                flag = 'es.svg';
                break;
            case 'fr':
                flag = 'fr.svg';
                break;
            case 'hi':
                flag = 'in.svg';
                break;
            case 'it':
                flag = 'it.svg';
                break;
            case 'ja':
                flag = 'jp.svg';
                break;
            case 'ko':
                flag = 'kr.svg';
                break;
            case 'ru':
                flag = '/node_modules/flag-icons/flags/1x1/ru.svg';
                break;
            default:
            flag='';
            }
            return flagPath+flag;
        }
    }
}
</script>

<template>
    <div class="card col-2" v-show="elem.poster_path">
        <img :src="`${store.imgUrl}${elem.poster_path}`" class="card-img-top" :alt="elem.title">
        <div class="card-body">
            <!-- Titolo -->
            <p class="card-text">{{elem.title}}</p>
            <!-- Lingua Originale -->
            <p class="card-text">Lingua originale:
                <img v-if="isPresent=true" @error="isPresent=false" @load="isPresent=true" :src="getFlag(elem.original_language)" :alt="elem.original_language"/>
                <span v-else>{{elem.original_language}}</span>
            </p>
            <!-- Valutazione -->
            <p class="card-text" v-html="rating(elem.vote_average)"></p>
        </div>
    </div>
</template>

<!-- Stile -->
<style lang="scss" scoped>
@use '../assets/scss/general.scss'
</style>
