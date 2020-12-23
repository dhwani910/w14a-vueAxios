<template>
<div>
    <button class="button is-info" @click="loadJoke()"> Loud Joke</button>
   
</div>
    
</template>


<script>

export default {
    name: 'LoudJoke',
    computed: {
        joke(){
            return this.$store.getters.getJoke.toUpperCase();
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