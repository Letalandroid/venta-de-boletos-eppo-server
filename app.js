const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// const morgan = require('morgan');
const rutas = require('./rutas');

// Middlewares
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(rutas);

module.exports = app;
