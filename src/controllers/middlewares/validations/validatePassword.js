const { passwordVerify } = require('../../../services/validations');
const { invalidPassword } = require('../../statusAndMessage');
const { PASSWORD_LENGTH } = require('../../../services/magicNumbers');

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const verifiedPassword = passwordVerify(password);

  if (!verifiedPassword) {
    return next(invalidPassword(PASSWORD_LENGTH));
  }

  return next();
};
