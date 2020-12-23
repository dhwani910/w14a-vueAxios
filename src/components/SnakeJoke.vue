<template>
<div>
    <button class="button is-info" @click="displayJoke"> Snake Joke </button>
</div>
    
</template>


<script>
import axios from 'axios';
export default {
    name: 'SnakeJoke',
     computed: {
        joke(){
            return this.$store.state.joke.toLowerCase;
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