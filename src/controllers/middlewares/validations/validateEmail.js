const { emailVerify } = require('../../../services/validations');
const { invalidEmail } = require('../../statusAndMessage');

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const verifiedEmail = emailVerify(email);

  if (!verifiedEmail) {
    return next(invalidEmail());
  }

  return next();
};
