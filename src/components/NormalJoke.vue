<template>
<div>
   <button class="button is-info" @click="loadJoke()"> Normal Joke</button>
     
</div>
    
</template>


<script>

export default {
    name: 'NormalJoke',
    computed: {
        joke(){
            return this.$store.getters.getJoke;
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