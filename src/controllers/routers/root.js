const express = require('express');

const users = require('./users');
const login = require('./login');
const toDos = require('./toDos');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/todos', toDos);

module.exports = root;
