<template>

  <div class="card" v-on:click="detail">
    <div class="card-image">
      <img :src='movie.img'>
    </div>
    <div class="card-content">
      <span class="card-title">
        {{ movie.title }}</span>
      <p>{{movie.real.name}}</p>
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
      detail() {
        this.$router.push({ path: `/movie/${this.movie.id}` });
      }
    }
  }
</script>