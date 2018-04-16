/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
const httpMocks = require('node-mocks-http');
const subtract = require('../controller/subtraction');

describe('returns addition object', () => {
  it('testing 7 minus 7 equal 0', () => {
    expect.assertions(1);

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/subtract/',
      params: { number1: 7, number2: 7 },
    });
    const response = httpMocks.createResponse();

    subtract(request, response);

    expect(response._getData()).toEqual({ number: 0 });
  });
});
