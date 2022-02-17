const express = require('express');

const { create, remove, update } = require('../documents/users');
const {
  wrapper, auth, validateFirstName, validateLastName, validateEmail, validatePassword,
} = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  create,
]));

router.put('/', wrapper([
  auth,
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  update,
]));

router.delete('/', wrapper([
  auth,
  remove,
]));

module.exports = router;
