<template>
  <div>
    <div class="post">
      <div v-if="movie" class="content">
        <h2>{{ movie.title }}</h2>
        <p>{{movie.date}}</p>
        <p>{{movie.real}}</p>
        <p>{{movie.synopsis}}</p>
      </div>
      <button v-on:click="back">Retour</button>
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
      }
    }
  }
</script>