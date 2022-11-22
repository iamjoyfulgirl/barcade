const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '30m';

module.exports = {

  authMiddleware: function ({ req }) {
    
    let token = req.body.token || req.query.token || req.headers.authorization;
    // console.log('req.headers', req.headers);
    // console.log("token from server Auth:", token);

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: async function ({ username, email, _id }) {
      const payload = { username, email, _id };
      console.log('payload:', payload);
      return new Promise((resolve, reject) => {
        resolve(jwt.sign({ data: payload }, secret, { expiresIn: expiration }));
      })
    }
};
