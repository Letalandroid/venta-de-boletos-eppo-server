const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const ruta = require('./rutas.js');

// Middlewares
app.use(morgan('combined'));
app.use(ruta);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
	console.log('🚀 Server on port 5000');
});

module.exports = app;
