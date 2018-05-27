import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

let url = "http://localhost:3000/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 2,
    movies: []
  },
  getters: {
    getMovie: (state) => (id) => {
     return state.movies.find(function(movie){return movie.id === Number(id);});
    }
  },

  mutations: {
    updateMovies: (state, movies) => {
      state.movies = movies
    },
  },

  actions: {
    addMovieFromAPI(context, newMovie) {
      Axios.post(url + '/movies/', newMovie)
        .then(response => {
          context.commit('updateMovies', response.data);
        });
    },
    deleteMovieFromAPI(context, index) {
      Axios.put(url + '/movies/delete/' + index)
        .then(response => {
          context.commit('updateMovies', response.data);
        });
    },
    editMovieFromAPI(context, movie)  {
      Axios.put(url + '/movies/' + movie.id, movie)
        .then(response => {
          context.commit('updateMovies', response.data);
        });
    },
    getMoviesFromAPI(context){
      Axios.get(url + '/movies/all')
        .then(response => {
          context.commit('updateMovies', response.data);
        })
    }
  }
});