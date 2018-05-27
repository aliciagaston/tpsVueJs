const cors    = require('cors');
const data    = require('./data');
const express = require('express');
const router  = express();


router.use(cors());
router.use(express.json());
router.use(express.urlencoded());
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

router.get('/api/movies/all', (req, res) => {
  res.send(data.movies)});

router.put('/api/movies/:id', (req, res) => {
  var id = req.params.id;
  var myMovie = req.body;
  var index = data.movies.findIndex((movie) => {
    return movie.id === Number(id);
  });
  if(index !== -1){
    data.movies[index] = myMovie;
    res.send(data.movies);
  }
  else {
    res.status(404);
  }
});

router.put('/api/movies/delete/:id', (req, res) => {
  var id = req.params.id;
  if(id !== -1) {
    data.movies.splice(id, 1);
    res.send(data.movies);
  } else {
    res.status(404);
  }
});

router.post('/api/movies', (req, res)=> {
  console.log(req.body);
  data.currentId ++;
  var id = data.currentId;
  var movie = req.body;
  movie.id = id;
  data.movies.push(movie);
  res.status(200);
  res.send(data.movies);
});

module.exports = router;