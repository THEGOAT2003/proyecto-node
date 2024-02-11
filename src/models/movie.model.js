const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {type: String,
    required: [true, 'una pelicula debe tener titulo'],
unique: true,
trim: true,
minlength: 2
},
director: {
    type: String,
    required: [true, 'una pelicula debe tener director'],
    trim: true
},
genre: {
    type: String,
    required: [true, 'una pelicula debe tener año'],
    trim: true
},
year: {
    type: Number,
    required: [true, 'una pelicula debe tener año'],
    trim: true
}
})