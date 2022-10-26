const options = {
  origin: [
    'https://localhost:3010',
    'http://localhost:3010',
    'https://berezhetska.diplomafront.nomorepartiesxyz.ru',
    'http://berezhetska.diplomafront.nomorepartiesxyz.ru',
    'https://TatianaBerezhetska.github.io',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = options;
