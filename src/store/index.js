import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: ["hello frnds!!!"],
  },
  mutations: {
    displayJoke() {
      axios.request({
          type: 'get',
          url: ' https://geek-jokes.sameerkumar.website/api?format=json',
          headers: {
              'Content-Type': 'application/json',
          },
          params: {
              format: 'text',
          }
      }).then((response) => { 
          console.log(response);
          this.joke = response.data;
      }).catch((error) => {
          this.errorMessage = error;
          console.log(error);
      });
  }
  },
  actions: {},
  modules: {}
});
