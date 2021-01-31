const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksRsa: 'https://lashatatu.eu.auth0.com/.well-known/jwks.json'
  }),
  audience:'https://lashatatu.eu.auth0.com/api/v2/',
  issuer:'https://lashatatu.eu.auth0.com/',
  algorithms: ['RS256']
});