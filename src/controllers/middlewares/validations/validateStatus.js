const { paramWithListVerify } = require('../../../services/validations');
const { invalidParamWithList } = require('../../statusAndMessage');
const { STATUS } = require('../../../services/strings');
const { toDoStatus } = require('../../../services/arrays');

module.exports = async (req, _res, next) => {
  const { status } = req.body;

  const verifiedStatus = paramWithListVerify(status, toDoStatus);

  if (!verifiedStatus) {
    return next(invalidParamWithList(STATUS, toDoStatus));
  }

  return next();
};
