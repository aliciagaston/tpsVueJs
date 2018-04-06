import MovieList from '../vue/components/movie-list'
import VueRouter from 'vue-router'

export default new VueRouter({
  routes :[
    {path: '/', component: MovieList}
    ]
});