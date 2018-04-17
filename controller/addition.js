/* eslint prefer-destructuring: 0 */

// ADDITION FUNCTION
const addition = (request, response) => {
  // parseFloat can parse a string with a decimal into a number
  // using here instead of parseInt which is only for whole numbers
  const number1 = parseFloat(request.params.number1);
  const number2 = parseFloat(request.params.number2);

  response.send({ number: number1 + number2 });
};

// VARIABLES EXPORTED
module.exports = addition;
