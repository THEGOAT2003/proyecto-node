const express = require('express');
const movierouter = express.Router();
const {getMovies,getMovie,createMovie,updateMovie,deleteMovie} = require('../controllers/movie.controller');

    movierouter.get('/', getMovies);
    movierouter.get('/:id', getMovie);
    movierouter.post('/', createMovie);
    movierouter.patch('/:id', updateMovie);
    movierouter.delete('/:id', deleteMovie);

    module.exports = movierouter;