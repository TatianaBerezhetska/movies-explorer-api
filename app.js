const express = require('express');
require('dotenv').config();

const { PORT = 3000 } = process.env;
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');

const options = require('./utils/CORS-options');
const signin = require('./middlewares/signin');
const signup = require('./middlewares/signup');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-err');
const DefaultError = require('./errors/default-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect('mongodb://localhost:27017/moviesdb');

app.use(express.json());

app.use('*', cors(options));

app.use(requestLogger);

app.use(signin);
app.use(signup);

app.use(auth);

app.use(require('./routes/user'));
app.use(require('./routes/movies'));

app.use((req, res, next) => {
  next(new NotFoundError('Страница по указанному маршруту не найдена'));
});

app.use(errorLogger);

app.use(errors());

app.use(DefaultError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
