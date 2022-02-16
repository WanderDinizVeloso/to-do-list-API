const { stringsVerify } = require('../../../services/validations');
const { invalidString } = require('../../statusAndMessage');
const { NAME_LENGTH } = require('../../../services/magicNumbers');

module.exports = async (req, _res, next) => {
  const { firstName } = req.body;

  const verifiedFirstName = stringsVerify(firstName, NAME_LENGTH);

  if (!verifiedFirstName) {
    return next(invalidString());
  }

  return next();
};
