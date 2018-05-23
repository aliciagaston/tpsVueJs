<template>

  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" style="height: 200px" :src='movie.img'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        {{ movie.title }}</span>
      <p>{{movie.date}}</p>
    </div>
    <div class="card-action">
      <a v-on:click="detail">Détails</a>
      <a v-on:click="edit">Editer</a>
    </div>
  </div>
</template>

<script>

  export default {
    props: ["movie"],
    data: function () {
      return {
        showDetails: false
      }
    },
    methods: {
      edit() {
        this.$router.push({path: `/movie/${this.movie.id}/edit`})
      },
      remove() {
        this.$store.dispatch('deleteMovie', this.movie.id);
      },
      detail() {
        this.$router.push({ path: `/movie/${this.movie.id}` });
      }
    }
  }
</script>