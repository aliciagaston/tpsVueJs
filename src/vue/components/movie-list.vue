<template>
  <div class="container">
    <div class="title"><h1>My Movies Collection</h1></div>

    <div class="search-wrapper">
      <input type="text" class="search-bar" v-model="search" placeholder="Search..."/>
    </div>
    <div id="nb-movies">{{nbMovies}}</div>
    <div class="list">
      <movie-item v-for="(movie, index) in filteredList"
                  v-bind:movie="movie"
                  v-bind:key="index"></movie-item>
    </div>


    <div id="formCreate">
      <div class="form">
        <h2>Add a movie : </h2>
        <label>Title : </label><input type="text" placeholder="Title..." v-model="newMovie.title"/> <br/>
        <label>Release date : </label><input type="date" placeholder="Date..." v-model="newMovie.date"/> <br/>
        <label>Language : </label><input type="text" placeholder="..." v-model="newMovie.language"/> <br/>
        <label>Genre : </label><input type="text" placeholder="..." v-model="newMovie.genre"/> <br/>
        <label>Filmmarker's name : </label><input type="text" placeholder="..." v-model="newMovie.real.name"/> <br/>
        <label>Filmmarker's birthdate : </label><input type="date" placeholder="..." v-model="newMovie.real.birthDate"/> <br/>
        <label>Filmmarker's nationality : </label><input type="text" placeholder="..." v-model="newMovie.real.nationality"/> <br/>
        <label>Plot : </label><input type="text" placeholder="..."  v-model="newMovie.plot"/> <br/>
        <label>Poster : </label><input type="text" placeholder="..."  v-model="newMovie.img"/><br/>

        <label>Evaluate : </label><select v-model="newMovie.mark">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select><br/>
        <button id="submit" type="submit" name="action" v-on:click="addMovie">
          <i class="fas fa-chevron-circle-right"/>
          Add
        </button>
        <br/>
      </div>
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
          genre: '',
          language: '',
          real: {
            name: '',
            birthDate: '',
            nationality: '',
          },
          plot: '',
          img: '',
          mark: 1
        },
        movies: [],
        search: '',
      }
    },
    created : function() {
      this.movies = this.$store.dispatch('getMoviesFromAPI');
    },
    methods: {
      addMovie: function () {
        this.$store.dispatch('addMovieFromAPI', this.newMovie);
      },
    },
    computed: {
      nbMovies: function () {
        return this.movies.length;
      },
      filteredList() {
        return this.$store.state.movies.filter(movie => {
          var matchedRealBirth = movie.real.birthDate.toLowerCase().includes(this.search.toLowerCase());
          var matchedRealNationality = movie.real.nationality.toLowerCase().includes(this.search.toLowerCase());
          var matchedLanguage = movie.language.toLowerCase().includes(this.search.toLowerCase());
          var matchedPlot = movie.plot.toLowerCase().includes(this.search.toLowerCase());
          var matchedGenre = movie.genre.toLowerCase().includes(this.search.toLowerCase());
          var matchedTitle = movie.title.toLowerCase().includes(this.search.toLowerCase());
          var matchedDate = movie.date.toLowerCase().includes(this.search.toLowerCase());
          var matchedRealName = movie.real.name.toLowerCase().includes(this.search.toLowerCase());

          return matchedTitle + matchedDate + matchedRealName + matchedRealBirth + matchedGenre + matchedPlot + matchedRealNationality + matchedLanguage;
        })
      }
    }
  }
</script>