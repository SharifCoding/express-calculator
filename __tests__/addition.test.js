/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
const httpMocks = require('node-mocks-http');
const addition = require('../controller/addition');

describe('returns addition object', () => {
  it('testing 7 add 7 equal 14', () => {
    expect.assertions(1);

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/addition/',
      params: { number1: 7, number2: 7 },
    });
    const response = httpMocks.createResponse();

    addition(request, response);

    expect(response._getData()).toEqual({ number: 14 });
  });
});
