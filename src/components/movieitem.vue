<template>
  <div>
    <li v-on:click="showDetails = !showDetails">
      <div class="title">{{ movie.title }}</div>, <div class="date">{{movie.date}}</div>
      <button v-on:click="modifier"><span class="fa fa-pencil-alt"/></button>
      <button v-on:click="supprimer"><span class="fa fa-trash-alt"/></button>
    </li>
    <div class="details" v-if="showDetails">
     <b>Réalisateur : </b> {{ movie.realisateur }}, <b>Synopsis : </b>{{ movie.synopsis }}
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
      modifier() {
        this.$emit('edit', this.movie)
      },
      supprimer() {
        this.$emit('remove')
      }
    }
  }
</script>