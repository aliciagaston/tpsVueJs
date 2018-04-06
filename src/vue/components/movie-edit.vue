<div id="formEdit" v-if="movieModif != null">
  <label>Titre: : </label><input type="text" v-model="movieModif.title"> <br/>
  <label>Date de réalisation : </label><input type="text" v-model="movieModif.date"> <br/>
  <label>Réalisateur : </label><input type="text" v-model="movieModif.realisateur"> <br/>
  <label>Synopsis : </label><input type="text" v-model="movieModif.synopsis"> <br/>
  <button v-on:click="valider">Modifier</button>
  <br/>
</div>