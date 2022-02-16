const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../services/documents/users');
const { notFound, deletedSuccessfully } = require('../../statusAndMessage');
const { USER } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { _id } = req.users;

  const removed = await remove(_id);

  if (!removed) {
    return next(notFound(USER));
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(USER),
      deletedUser: removed,
    });
};
