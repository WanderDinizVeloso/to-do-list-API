const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../services/documents/users');
const { modifiedSuccessfully, notFound } = require('../../statusAndMessage');
const { USER } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { _id } = req.user;
  const { firstName, lastName, email, password } = req.body;

  const updated = await update({ _id, firstName, lastName, email, password });

  if (!updated) {
    return next(notFound(USER));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(USER),
      updatedUser: updated,
    });
};
