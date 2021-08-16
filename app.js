'use strict'
const express = require('express');
const app = express();

const swaggerUI = require("swagger-ui-express");

const PORT = process.env.PORT || 3000;

const swaggerDocument = require('./swagger.json');

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));
app.listen(PORT, (req,res) => {
console.log(`Server is listening on PORT ${PORT}`);
})