const { paramWithListVerify } = require('../../../services/validations');
const { invalidParamWithList } = require('../../statusAndMessage');
const { ORDER } = require('../../../services/strings');
const { sortOrder } = require('../../../services/arrays');

module.exports = async (req, _res, next) => {
  const { order = 'ASC' } = req.query;

  const verifiedOrder = paramWithListVerify(order, sortOrder);

  if (!verifiedOrder) {
    return next(invalidParamWithList(ORDER, sortOrder));
  }

  return next();
};
