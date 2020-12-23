import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     joke: '',
//   },
//   mutations: {
//     displayJoke() {
//       axios.request({
//           type: 'get',
//           url: ' https://geek-jokes.sameerkumar.website/api?format=json',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           params: {
//               format: 'text',
//           }
//       }).then((response) => { 
//           console.log(response);
//           this.joke = response.data;
//       }).catch((error) => {
//           this.errorMessage = error;
//           console.log(error);
//       });
//   }
//   },
//   actions: {},
//   getters: {
//     getJoke(state) {
//       return state.joke;
//     },
//   }
// });

export default new Vuex.Store({
  state: {
    joke: '',
  },
  getters: {
    getJoke(state) {
      return state.joke;
    },
  },

  mutations: {
    SET_NEW_JOKE(state, payload) {
      state.joke = payload;
    },
  },

  actions: {
    loadJoke(context) {
      axios
        .request({
          type: "get",
          url: " https://geek-jokes.sameerkumar.website/api?format=json",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            format: "text",
          },
        })
        .then((response) => {
          context.commit("SET_NEW_JOKE", response.data.joke);
        })
        .catch((error) => {
          this.errorMessage = error;
          console.log(error);
        });
    },
  },
  modules: {},
});
