/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
const httpMocks = require('node-mocks-http');
const multiply = require('../controller/multiplication');

describe('returns addition object', () => {
  it('testing 7 times 7 equal 49', () => {
    expect.assertions(1);

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/multiply/',
      params: { number1: 7, number2: 7 },
    });
    const response = httpMocks.createResponse();

    multiply(request, response);

    expect(response._getData()).toEqual({ number: 49 });
  });
});
