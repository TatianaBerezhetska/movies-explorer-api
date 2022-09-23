const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlRegExp = require('../utils/RegExp');
const validateId = require('../utils/validateId');

const {
  getMovies,
  saveMovie,
  deleteMovie,
} = require('../controllers/movies');

const checkMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().custom(validateId, 'custom validation'),
  }),
});

router.get('/', getMovies);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(urlRegExp),
    trailerLink: Joi.string().required().pattern(urlRegExp),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(urlRegExp),
    movieId: Joi.string().required(),
  }),
}), saveMovie);

router.delete('/:movieId', checkMovieId, deleteMovie);

module.exports = router;
