const { stringsVerify } = require('../../../services/validations');
const { invalidString } = require('../../statusAndMessage');
const { MESSAGE_LENGTH } = require('../../../services/magicNumbers');
const { MESSAGE } = require('../../../services/strings');

module.exports = async (req, _res, next) => {
  const { message } = req.body;

  const verifiedMessage = stringsVerify(message, MESSAGE_LENGTH);

  if (!verifiedMessage) {
    return next(invalidString(MESSAGE, MESSAGE_LENGTH));
  }

  return next();
};
