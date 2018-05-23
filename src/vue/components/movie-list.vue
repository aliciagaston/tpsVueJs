<template>
  <div class="container">
    <div class="search-wrapper">
      <input type="text" class="search-bar" v-model="search" placeholder="Search title.."/>
    </div>
    <h1>Movies</h1>
    <div>Nombre de films : {{nbMovies}}</div>
    <div class="list">
      <movie-item v-for="(movie, index) in filteredList"
                  v-bind:movie="movie"
                  v-bind:key="index"></movie-item>
    </div>


    <div id="formCreate" class="card-panel">
      <h2>Add a movie : </h2>
      <span>Titre : </span><input type="text" placeholder="..." v-model="newMovie.title"/> <br/>
      <span>Date de sortie: </span><input type="text" placeholder="..." v-model="newMovie.date"/> <br/>
      <span>Réalisateur : </span><input type="text" placeholder="..." v-model="newMovie.real"/> <br/>
      <span>Synopsis : </span><input type="text" placeholder="..."  v-model="newMovie.synopsis"/> <br/>
      <button id="submit" class="btn waves-effect waves-light" type="submit" name="action" v-on:click="addMovie">
        <i class="material-icons right">send</i>
        Submit
      </button>
      <br/>
    </div>


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