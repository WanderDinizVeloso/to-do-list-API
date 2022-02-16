const express = require('express');

const { create, remove, update } = require('../documents/users');

const router = express.Router({ mergeParams: true });

router.post('/', create);

router.put('/', update);

router.delete('/', remove);

module.exports = router;
