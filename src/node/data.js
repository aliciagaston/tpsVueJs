exports.movies = [{
  id:0,
  title: 'Star Wars: Episode I – The Phantom Menace',
  date: '13/10/1999',
  language: 'English',
  genre: 'epic space opera',
  real: {
    name: 'Georges Lucas',
    nationality: 'American',
    birthDate : '14/05/1944'
  },
  plot: 'Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.',
  img: '/../../static/poster/poster1.jpg',
  mark: '3'
},
  {
    id:1,
    title: 'Star Wars: Episode I – The Phantom Menace',
    date: '13/10/1999',
    language: 'English',
    genre: 'epic space opera',
    real: {
      name: 'Georges Lucas',
      nationality: 'American',
      birthDate : '14/05/1944'
    },
    plot: 'Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.',
    img: '/../../static/poster/poster1.jpg',
    mark: '3'
  }, {
    id:2,
    title: 'Star Wars: Episode I – The Phantom Menace',
    date: '13/10/1999',
    language: 'English',
    genre: 'epic space opera',
    real: {
      name: 'Georges Lucas',
      nationality: 'American',
      birthDate : '14/05/1944'
    },
    plot: 'Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.',
    img: '/../../static/poster/poster1.jpg',
    mark: '3'
  }];

exports.currentId = 2;

exports.editMovie = function(myMovie){
  var index = movies.findIndex((movie) => {
    return movie.id === myMovie.id;
  });
  if(id !== -1){
    movies[index] = myMovie;
    return movies;
  }

};

exports.deleteMovie = function(id){
  if(id !== -1) {
    movies.splice(id, 1);
    return movies;
  } else {
    response.status(404);
    response.json({error: "DELETE : Movie not found."})
  }
};