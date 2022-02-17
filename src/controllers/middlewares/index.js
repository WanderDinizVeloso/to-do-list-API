const auth = require('./auth');
const error = require('./error');
const wrapper = require('./wrapper');
const validateEmail = require('./validations/validateEmail');
const validateFirstName = require('./validations/validateFirstName');
const validateId = require('./validations/validateId');
const validateLastName = require('./validations/validateLastName');
const validateMessage = require('./validations/validateMessage');
const validateOrder = require('./validations/validateOrder');
const validatePassword = require('./validations/validatePassword');
const validateSort = require('./validations/validateSort');
const validateStatus = require('./validations/validateStatus');

module.exports = {
  auth,
  error,
  wrapper,
  validateEmail,
  validateFirstName,
  validateId,
  validateLastName,
  validateMessage,
  validateOrder,
  validatePassword,
  validateSort,
  validateStatus,  
};