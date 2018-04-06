<template>

  <div class="card" style="width: 300px">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" style="height: 200px" :src='movie.img'>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{ movie.title }}<i class="material-icons right">more_vert</i></span>
      <p>{{movie.date}}, </p>
    </div>
    <div class="card-action">
      <a v-on:click="edit">Editer</a>
      <a v-on:click="remove">Supprimer</a>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{{movie.title}}<i class="material-icons right">close</i></span>
      <p><b>Réalisateur : </b> {{ movie.real }}, <b>Synopsis : </b>{{ movie.synopsis }}</p>
    </div>
  </div>


  <!--<div>
    <li v-on:click="showDetails = !showDetails">
      <div class="title">{{ movie.title }}</div>, <div class="date">{{movie.date}}</div>
      <button v-on:click="edit"><span class="fa fa-pencil-alt"/></button>
      <button v-on:click="remove"><span class="fa fa-trash-alt"/></button>
    </li>
    <div class="details" v-if="showDetails">
     <b>Réalisateur : </b> {{ movie.real }}, <b>Synopsis : </b>{{ movie.synopsis }}
    </div>
  </div>-->
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
      },
      remove() {
        this.$store.dispatch('deleteMovie', this.movie.id);
      }
    }
  }
</script>