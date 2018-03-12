<template>
  <div>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search title.."/>
      <label>Search title:</label>
    </div>
    <h1>Ma liste de film</h1>
    <div id="list">
      <ul>
        <movie-item v-for="(movie, index) in filteredList"
                    v-bind:movie="movie"
                    v-on:edit="edit"
                    v-on:remove="remove(index)"
                    v-bind:key="index"></movie-item>
      </ul>
    </div>
    <div id="formEdit" v-if="movieModif != null">
      <label>Titre: : </label><input type="text" v-model="movieModif.title"> <br/>
      <label>Date de réalisation : </label><input type="text" v-model="movieModif.date"> <br/>
      <label>Réalisateur : </label><input type="text" v-model="movieModif.realisateur"> <br/>
      <label>Synopsis : </label><input type="text" v-model="movieModif.synopsis"> <br/>
      <button v-on:click="valider">Modifier</button>
      <br/>
    </div>

    <div id="formCreate">
      <h2>Nouveau film : </h2>
      <span>Titre : </span><input type="text" v-model="newMovie.title"/> <br/>
      <span>Date de sortie: </span><input type="text" v-model="newMovie.date"/> <br/>
      <span>Réalisateur : </span><input type="text" v-model="newMovie.realisateur"/> <br/>
      <span>Synopsis : </span><input type="text" v-model="newMovie.synopsis"/> <br/>
      <button v-on:click="ajouter"><span class="fa fa-plus-square"/></button>
      <br/>
    </div>

    <div>Nombre de films : {{nbMovies}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        movies: [
          {
            title: 'Star wars I',
            date: '02/02/2017',
            realisateur: 'maitre yoda',
            synopsis: 'c\'est star wars I',
          },
          {
            title: "Star wars II",
            date: '10/06/2017',
            realisateur: 'darkvador',
            synopsis: 'c\'est star wars II',
          }, {
            title: "Star wars III",
            date: '10/06/2017',
            realisateur: 'hermione',
            synopsis: 'c\'est star wars III',
          }],
        movieTitleModif: '',
        movieModif: null,
        idMovie: -1,
        newMovie: {
          title: '',
          date: '',
          realisateur: '',
          synopsis: '',
          showDetails: false
        },
        search: ''
      }
    },
    methods: {
      edit: function (movie) {
        this.movieModif = movie;

      },
      valider: function () {
        this.movieModif = null;

      },
      remove: function (index) {
        this.movies.splice(index, 1);
      },
      ajouter: function () {
        this.newMovie.showDetails = false;
        this.movies.push(this.newMovie);
        this.newMovie = {
          title: '',
          date: '',
          realisateur: '',
          synopsis: '',
          showDetails: false
        };
      },
    },
    computed: {
      nbMovies: function () {
        return this.movies.length;
      },
      filteredList() {
        return this.movies.filter(movie => {
          var matchedTitle = movie.title.toLowerCase().includes(this.search.toLowerCase());
          var matchedDate = movie.date.toLowerCase().includes(this.search.toLowerCase());
          var matchedReal = movie.realisateur.toLowerCase().includes(this.search.toLowerCase());
          return matchedTitle + matchedDate + matchedReal;
        })
      }
    }
  }
</script>

<style>
  #msg {
    color: red;
  }
</style>