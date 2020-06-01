const jwt = require('jsonwebtoken');

const User = require('../../database/models/user');

module.exports.verifyUser = async (req) => {
  try {

    req.email = null;
    req.loggedInUserId = null;
    const bearerHeader = req.headers.authorization;
    if (bearerHeader) {
      const token = bearerHeader.split(' ')[1];
      const secret = 'mysecretkey';

      const payload = jwt.decode(token, secret);
      req.email = payload.email;
      const user = await User.findOne({ email: payload.email });
      req.loggedInUserId = user.id;
      return {
        email: payload.email,
        loggedInUserId: user.id
      }
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return attemptRenewal()
    }
    throw error;
  }
}