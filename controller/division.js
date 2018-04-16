/* eslint prefer-destructuring: 0 */

// DIVISION FUNCTION
const divide = (request, response) => {
  const number1 = parseFloat(request.params.number1);
  const number2 = parseFloat(request.params.number2);
  console.log(number1, 'divide', number2, 'equal', number1 / number2);

  response.send({ number: number1 / number2 });
};

  // VARIABLES EXPORTED
module.exports = divide;

