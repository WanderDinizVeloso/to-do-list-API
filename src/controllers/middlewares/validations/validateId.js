const { stringsVerify } = require('../../../services/validations');
const { invalidString } = require('../../statusAndMessage');
const { ID_LENGTH } = require('../../../services/magicNumbers');
const { ID } = require('../../../services/strings');

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const verifiedId = stringsVerify(id, ID_LENGTH);

  if (!verifiedId) {
    return next(invalidString(ID, ID_LENGTH));
  }

  return next();
};
