const { paramWithListVerify } = require('../../../services/validations');
const { invalidParamWithList } = require('../../statusAndMessage');
const { SORT } = require('../../../services/strings');
const { sortBy } = require('../../../services/arrays');

module.exports = async (req, _res, next) => {
  const { sort } = req.query;

  const verifiedSort = paramWithListVerify(sort, sortBy);

  if (!verifiedSort) {
    return next(invalidParamWithList(SORT, sortBy));
  }

  return next();
};
