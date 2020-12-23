<template>
<div>
    <button class="button is-info" @click="loadJoke()"> Snake Joke </button>
</div>
    
</template>


<script>

export default {
    name: 'SnakeJoke',
     computed: {
        joke(){
            return this.$store.getters.getJoke.toLowerCase();
        }

    },
    methods: {
        loadJoke(){
            this.$store.commit('SET_NEW_JOKE', this.joke);
        }
       
    },
}
</script>


<style scoped>

</style>