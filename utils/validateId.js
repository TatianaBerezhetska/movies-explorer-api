const { isValidObjectId } = require('mongoose');

const validateId = (id, helpers) => {
  if (isValidObjectId(id)) {
    return id;
  }
  return helpers.message('Неверный id');
};

module.exports = validateId;
