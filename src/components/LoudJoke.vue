<template>
<div>
    <button class="button is-info" @click="displayJoke"> Loud Joke</button>
    <p>{{joke}}</p>
</div>
    
</template>


<script>
import axios from 'axios';
export default {
    name: 'LoudJoke',
    computed: {
        joke(){
            return this.$store.state.joke.toUpperCase;
        }

    },
    methods: {
        displayJoke(){
            this.$store.commit('displayJoke', this.joke);
        }
       
    },
}
</script>


<style scoped>

</style>