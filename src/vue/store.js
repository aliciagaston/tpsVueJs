import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 2,
    movies: [
      {
        id:0,
        title: 'Star Wars: Episode I – The Phantom Menace',
        date: '13/10/1999',
        real: 'George Lucas',
        synopsis: 'Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.',
        img: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
      },
      {
        id: 1,
        title: "Star Wars: Episode II – Attack of the Clones",
        date: '17/05/2002',
        real: 'George Lucas',
        synopsis: 'Set ten years after the events of "The Phantom Menace," the Republic continues to be mired in strife and chaos. A separatist movement encompassing hundreds of planets and powerful corporate alliances poses new threats to the galaxy that even the Jedi cannot stem. These moves, long planned by an as yet unrevealed and powerful force, lead to the beginning of the Clone Wars -- and the beginning of the end of the Republic.',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg/220px-Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
      }, {
        id: 2,
        title: "Star Wars: Episode III – Revenge of the Sith",
        date: '18/05/2005',
        real: 'George Lucas',
        synopsis: 'It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi (Ewan McGregor) and Jedi Knight Anakin Skywalker (Hayden Christensen) rescue Chancellor Palpatine (Ian McDiarmid) from General Grievous, the commander of the droid armies, but Grievous escapes. Suspicions are raised within the Jedi Council concerning Chancellor Palpatine, with whom Anakin has formed a bond. Asked to spy on the chancellor, and full of bitterness toward the Jedi Council, Anakin embraces the Dark Side.',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg/220px-Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
      }]
  },
  getters: {
    getMovie: (state) => (id) => {
     return state.movies.find(function(movie){return movie.id === Number(id);});
    }
  },

  mutations: {
    addMovie(state, movie) {
      movie.id = state.currentIndex+1;
      state.currentIndex++;
      state.movies.push(movie);
    },
    deleteMovie(state, id){
      var index = state.movies.findIndex((movie)=> {
        return movie.id === id;
      });
      state.movies.splice(index,1);
    },
    editMovie(state, myMovie){
      var index = state.movies.findIndex((movie)=> {
        return movie.id === myMovie.id;
      });
      state.movies[index] = myMovie;
    }

  },

  actions: {
    addMovie(context, newMovie) {
      context.commit('addMovie', newMovie);
    },
    deleteMovie(context, index) {
      context.commit('deleteMovie', index);
    },
    editMovie(context, movie)  {
      console.log('pass');
      context.commit('editMovie', movie);
    }
  }
});