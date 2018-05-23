import MovieList from '../vue/components/movie-list'
import MovieDetails from '../vue/components/movie-details'
import MovieEdit from '../vue/components/movie-edit'
import VueRouter from 'vue-router'

export default new VueRouter({
  routes :[
    {path: '/', component: MovieList},
    {path: '/movie/:id', component: MovieDetails},
    {path: '/movie/:id/edit', component: MovieEdit}
    ]
});