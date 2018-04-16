/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
const httpMocks = require('node-mocks-http');
const divide = require('../controller/division');

describe('returns addition object', () => {
  it('testing 7 divide 7 equal 1', () => {
    expect.assertions(1);

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/divide/',
      params: { number1: 7, number2: 7 },
    });
    const response = httpMocks.createResponse();

    divide(request, response);

    expect(response._getData()).toEqual({ number: 1 });
  });
});
