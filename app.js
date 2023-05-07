const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// const morgan = require('morgan');
const ruta = require('./rutas.js');

// Middlewares
// app.use(morgan('dev'));
app.use(ruta);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
