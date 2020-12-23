<template>
<div>
    <button class="button is-warning" @click="loadJoke"> Load Joke</button>
    <p>{{joke}}</p>
    <normal-joke></normal-joke>
    <loud-joke></loud-joke>
    <snake-joke></snake-joke>
    
</div>
    
</template>


<script>
import LoudJoke from './LoudJoke.vue';
import NormalJoke from './NormalJoke.vue';
import SnakeJoke from './SnakeJoke.vue';
export default {
       name: 'JokeButton',
      components: {
          NormalJoke ,
           LoudJoke,
            SnakeJoke,
        },
    
  

    methods: {
        loadJoke(){
            this.$store.commit('displayJoke', '');
            this.$store.dispatch('loadJoke');
        }
    }
}
</script>


<style scoped>

</style>