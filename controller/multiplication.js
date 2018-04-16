/* eslint prefer-destructuring: 0 */

// MULTIPLE FUNCTION
const multiply = (request, response) => {
  const number1 = parseFloat(request.params.number1);
  const number2 = parseFloat(request.params.number2);
  console.log(number1, 'times', number2, 'equal', number1 * number2);

  response.send({ number: number1 * number2 });
};

  // VARIABLES EXPORTED
module.exports = multiply;

