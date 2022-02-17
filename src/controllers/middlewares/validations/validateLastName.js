const { stringsVerify } = require('../../../services/validations');
const { invalidString } = require('../../statusAndMessage');
const { NAME_LENGTH } = require('../../../services/magicNumbers');
const { LAST_NAME } = require('../../../services/strings');

module.exports = async (req, _res, next) => {
  const { lastName } = req.body;

  const verifiedLastName = stringsVerify(lastName, NAME_LENGTH);

  if (!verifiedLastName) {
    return next(invalidString(LAST_NAME, NAME_LENGTH));
  }

  return next();
};
