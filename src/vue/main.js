import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './app.vue'
import MovieItem from './components/movie-item'
import MovieList from './components/movie-list'
import routes from './routes'
import myStore from './store'


Vue.use(VueRouter);

Vue.component("movie-list", MovieList);
Vue.component("movie-item", MovieItem);

new Vue({
  el: '#app',
  render: h => h(app),
  router: routes,
  store: myStore
});
