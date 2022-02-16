const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../services/documents/users');
const { deletedSuccessfully } = require('../../statusAndMessage');
const { USER } = require('../../../services/strings');

module.exports = async (req, res, _next) => {
  const { users } = req;
  const { authorization: token } = req.headers;

  const removed = await remove(users, token);

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(USER),
      deletedUser: removed,
    });
};
