const express = require('express');

const {
  wrapper, auth, validateMessage, validateStatus, validateId, validateOrder, validateSort,
} = require('../middlewares');
const { create, remove, searchAll, update } = require('../documents/toDos');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  auth,
  validateSort,
  validateOrder,
  searchAll,
]));

router.post('/', wrapper([
  auth,
  validateMessage,
  validateStatus,
  create,
]));

router.put('/:id', wrapper([
  auth,
  validateId,
  validateMessage,
  validateStatus,
  update,
]));

router.delete('/:id', wrapper([
  auth,
  validateId,
  remove,
]));

module.exports = router;
