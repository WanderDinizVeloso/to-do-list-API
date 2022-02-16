const express = require('express');

const { create, remove, update } = require('../documents/users');
const { wrapper, auth } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  create,
]));

router.put('/', wrapper([
  auth,
  update,
]));

router.delete('/', wrapper([
  auth,
  remove,
]));

module.exports = router;
