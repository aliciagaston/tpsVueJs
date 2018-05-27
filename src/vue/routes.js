import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'
import MovieEdit from './components/movie-edit'
import VueRouter from 'vue-router'

export default new VueRouter({
  routes :[
    {path: '/', component: MovieList},
    {path: '/movie/:id', component: MovieDetails},
    {path: '/movie/:id/edit', component: MovieEdit}
    ]
});