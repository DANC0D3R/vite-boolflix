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
        isPresent: true
        }
    },
    methods:{
        rating(number){
            if(number > 0){
                let newRating = (Math.floor(Math.round(number / 2)));
            let stars = [];
            for(let i = newRating; i >= 1; i--){
                stars.push(`<i class="fa-solid fa-star style="color: #FFD700;"></i>`);
            };
            for(let j = (5 - newRating); j >= 1; j--){
                stars.push(`<i class="fa-regular fa-star" style="color: rgba(52, 49, 49, 0.876);></i>`);
            }
            return stars.join('');
            } else {
                return 'Nessuna valutazione'
            }
        },
        getFlag(value){
        let flag;
        let flagPath = '/node_modules/flag-icons/flags/4x3/';
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
                flag = 'ru.svg';
                break;
            default:
            flag='';
            }
            return flagPath+flag;
        },
        getImg(el){
            if(el.poster_path!==0){
                return `${store.imgUrl}${el.poster_path}`
            } else{
                return '../assets/img/placeholder-cover-not-avielable.png'
            }
        }
    }
}
</script>

<template>
    <div class="mia-card">
        <img v-if="elem.poster_path" :src="store.imgUrl+elem.poster_path" class="dc-card-img dc-card-front" :alt="elem.title">
        <img v-else src="../assets/img/placeholder-cover-not-avielable.png" class="dc-card-img dc-card-front" :alt="elem.title">
        <div class="dc-card-overlay"></div>
        <div class="info-container">
            <!-- Titolo -->
            <h4 class="card-text">{{ elem.title || elem.name }}</h4>
            <!-- Descrizione -->
            <p class="mia-sum mt-3">{{ elem.overview }}</p>
            <!-- Lingua Originale -->
            <p class="card-text mt-3">Lingua originale:
                <img v-if="isPresent===true" @load="isPresent=true" @error="isPresent=false" class="mini-flag" :src="getFlag(elem.original_language)"/>
                <span v-else>{{ elem.original_language }}</span>
            </p>
            <!-- Valutazione -->
            <p class="card-text" v-html="rating(elem.vote_average)"></p>
        </div>
    </div>
</template>

<!-- Stile -->
<style lang="scss" scoped>
@use '../assets/scss/general.scss';
.mia-card{
    position: relative;

    width: calc(100% / 5);
    max-height: 450px;

    padding: 0;

    overflow: hidden;

    transition: all 0.5s ease-in;
    & > img{
        width: 100%;
        height: 100%;

        border-radius: 5px;

        object-fit: cover;
        
        transition: all 0.5s ease-in-out;
        }
        .info-container{
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            padding: 12px;

            font-size: 90%;

            color:#FFFFFF;
            background-color: rgba(0,0,0,0.75);
            
            opacity: 0;

            overflow-y: auto;

            transition: all 0.5s ease-in-out;
            h4{
                margin-bottom: 6px;

                font-size: 1.2rem;
            }
            p{
                margin-bottom: 10px;

                font-size: 0.8rem;
                line-height: 0.8rem;
            }
            .mini-flag{
                max-height: 13px;

                border-radius: 2px;
            }
            .mia-sum{
                height: 50%;
                max-height: 200px;

                overflow-y:auto;
                &::-webkit-scrollbar{
                    width: 5px;

                    border-radius: 2px;

                    background-color: rgba(73, 71, 71, 0.725);
                }
                &::-webkit-scrollbar-thumb{
                    border-radius: 2px;

                    background:#DB0011; 
                }
            }
        }
}
.mia-card:hover>.info-container{
    opacity: 1;
}
.mia-card:hover>img{
    width: 100%;
    height: 100%;

    transform: scale(110%);
}
</style>
