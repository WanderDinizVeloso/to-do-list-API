const express = require('express');
const { json } = require('body-parser');
require('dotenv').config();

const root = require('../controllers/routers/root');
const { error } = require('../controllers/middlewares');

const app = express();

app.use(json());
app.use(root);
app.use(error);

module.exports = app;
