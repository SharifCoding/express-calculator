/* eslint prefer-destructuring: 0 radix: 0 */

// IMPORT LIBRARY
const express = require('express');
const readMe = require('./controller/readMe');
const addition = require('./controller/addition');
const subtract = require('./controller/subtraction');
const multiply = require('./controller/multiplication');
const divide = require('./controller/division');

// INSTANTIATE APP
const app = express();

// GET ROUTE
app.get('/', readMe);

// GET WHO ROUTE
app.get('/hello/:who', (request, response) => {
  response.end(`Hello, ${request.params.who}.`);
});

// ADDITION ROUTE
app.get('/addition/:number1/:number2', addition);

// SUBTRACTION ROUTE
app.get('/subtract/:number1/:number2', subtract);

// MULTIPLE ROUTE
app.get('/multiply/:number1/:number2', multiply);

// DIVISION ROUTE
app.get('/divide/:number1/:number2', divide);

// FIRES UP WEB SERVER
app.listen(3000, () => console.log('Calculator app listening on port 3000!'));
