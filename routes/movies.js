const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
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

const checkUrl = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.message('Введите ссылку');
};

router.get('/movies', getMovies);

router.post('/movies', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(checkUrl),
    trailerLink: Joi.string().required().custom(checkUrl),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().custom(checkUrl),
    movieId: Joi.number().required(),
  }),
}), saveMovie);

router.delete('/movies/:movieId', checkMovieId, deleteMovie);

module.exports = router;
