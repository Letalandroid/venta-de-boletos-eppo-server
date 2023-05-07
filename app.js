const express_app = require('express');
const app = express_app();
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const rutas = require('./rutas');

// Middlewares
app.use(morgan('dev'));
app.use(express_app.json());
app.use(express_app.urlencoded({ extended: true }));

// Routes
app.use(rutas);

module.exports = app;
