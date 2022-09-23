const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (image) => validator.isURL(image),
      message: 'Укажите ссылку',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (trailerLink) => validator.isURL(trailerLink),
      message: 'Укажите ссылку',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (thumbnail) => validator.isURL(thumbnail),
      message: 'Укажите ссылку',
    },
  },
  owner: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    default: [],
  }],
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);