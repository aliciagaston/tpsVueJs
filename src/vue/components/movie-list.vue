<template>
  <div class="container">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search title.."/>
    </div>
    <h1>Movies</h1>
    <div class="list">
      <movie-item v-for="(movie, index) in filteredList"
                  v-bind:movie="movie"
                  v-bind:key="index"></movie-item>
    </div>


    <div id="formCreate">
      <h2>Nouveau film : </h2>
      <span>Titre : </span><input type="text" v-model="newMovie.title"/> <br/>
      <span>Date de sortie: </span><input type="text" v-model="newMovie.date"/> <br/>
      <span>Réalisateur : </span><input type="text" v-model="newMovie.real"/> <br/>
      <span>Synopsis : </span><input type="text" v-model="newMovie.synopsis"/> <br/>
      <button v-on:click="addMovie"><span class="fa fa-plus-square"/></button>
      <br/>
    </div>

    <div>Nombre de films : {{nbMovies}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        movieTitleModif: '',
        movieModif: null,
        idMovie: -1,
        newMovie: {
          title: '',
          date: '',
          real: '',
          synopsis: '',
          showDetails: false
        },
        search: ''
      }
    },
    methods: {
      addMovie: function () {
        this.newMovie.showDetails = false;
        this.$store.dispatch('addMovie', this.newMovie);
        this.newMovie = {
          title: '',
          date: '',
          real: '',
          synopsis: '',
          showDetails: false
        };
      },
    },
    computed: {
      movies() {
        return this.$store.state.movies;
      },
      nbMovies: function () {
        return this.movies.length;
      },
      filteredList() {
        return this.movies.filter(movie => {
          var matchedTitle = movie.title.toLowerCase().includes(this.search.toLowerCase());
          var matchedDate = movie.date.toLowerCase().includes(this.search.toLowerCase());
          var matchedReal = movie.real.toLowerCase().includes(this.search.toLowerCase());
          return matchedTitle + matchedDate + matchedReal;
        })
      }
    }
  }
</script>