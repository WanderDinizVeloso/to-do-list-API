const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../services/documents/users');
const { deletedSuccessfully } = require('../../statusAndMessage');
const { USER } = require('../../../services/strings');

module.exports = async (req, res, _next) => {
  const { user } = req;
  const { authorization: token } = req.headers;

  const removed = await remove(user, token);

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(USER),
      deletedUser: removed,
    });
};
