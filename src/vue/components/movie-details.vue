<template>
  <div>
    <div class="title" v-if="movie"><h1>{{ movie.title }}</h1></div>
    <div class="post">
      <button v-on:click="edit">Edit</button>
      <button v-on:click="back">Retour</button>
        <p><b>Release Date</b> {{movie.date}}</p>
        <p><b>Language</b> {{movie.language}}</p>
        <p><b>Fimmaker</b> {{movie.real.name}} ({{movie.real.nationality}}) - {{movie.real.birthDate}}</p>
        <p><b>Plot</b> {{movie.plot}}</p>
        <p><b>Genre</b> {{movie.genre}}</p>
        <p><b>Mark</b> {{movie.mark}}</p>
        <img v-if="movie.img" :src='movie.img' />
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        loading: false,
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
        this.error = this.post = null;
        this.loading = true;
        var id = this.$route.params.id;
        this.movie = this.$store.getters.getMovie(id);
      },
      back () {
        this.$router.push({ path: '/' });
      },
      edit() {
        this.$router.push({path: `/movie/${this.movie.id}/edit`})
      }
    }
  }
</script>