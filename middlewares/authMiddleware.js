require('dotenv').config()
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH_JWKS_URI
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH_AUDIENCE,
  issuer:  process.env.AUTH_ISSUER,
  algorithms: ['RS256']
});

module.exports = checkJwt;
