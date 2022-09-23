const { isValidObjectId } = require('mongoose');

const validateId = (id, helpers) => {
  if (isValidObjectId(id)) {
    return id;
  }
  return helpers.error('Неверный id');
};

module.exports = validateId;
