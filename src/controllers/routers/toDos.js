const express = require('express');

const { wrapper, auth } = require('../middlewares');

const { create, remove, searchAll, update } = require('../documents/toDos');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  auth,
  searchAll,
]));

router.post('/', wrapper([
  auth,
  create,
]));

router.put('/:id', wrapper([
  auth,
  update,
]));

router.delete('/:id', wrapper([
  auth,
  remove,
]));

module.exports = router;
