<template>
  <div>
    <div class="title" v-if="movie"><h1>Edit {{movie.title}}</h1></div>
    <button v-on:click="validate">Save</button>
    <button v-on:click="deleteMovie">Delete</button>
    <button v-on:click="back">Back</button>
    <div id="formEdit" v-if="movie">
      <label>Title: : </label><input type="text" v-model="movie.title"> <br/>
      <label>Release Date : </label><input type="date" v-model="movie.date"> <br/>
      <label>Genre : </label><input type="text" v-model="movie.genre"> <br/>
      <label>Language : </label><input type="text" v-model="movie.language"> <br/>
      <label>Filmmaker's name: </label><input type="text" v-model="movie.real.name"> <br/>
      <label>Filmmakers's birth date: </label><input type="date" v-model="movie.real.birthDate"> <br/>
      <label>Filmmaker's nationality: </label><input type="text" v-model="movie.real.nationality"> <br/>
      <label>Plot : </label><input type="text" v-model="movie.plot"> <br/>
      <label>Link to poster : </label><input type="text" v-model="movie.img"> <br/>
      <label>Evaluate </label><select v-model="movie.mark">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
      <br/>
    </div>
  </div>

</template>

<script>

  export default {
    data () {
      return {
        movie: null
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        var id = this.$route.params.id;
        this.movie = this.$store.getters.getMovie(id);
      },
      validate () {
        this.$store.dispatch('editMovieFromAPI', this.movie);
        this.$router.push({ path: `/movie/${this.movie.id}` });
      },
      deleteMovie () {
        this.$store.dispatch('deleteMovieFromAPI', this.movie.id);
        this.$router.push({ path: '/' });
      },
      back () {
        this.$router.push({path: `/movie/${this.movie.id}`});
      }
    }

  }
</script>