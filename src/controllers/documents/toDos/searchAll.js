const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/toDos');

module.exports = async (req, res, _next) => {
  const { _id: userId } = req.user;

  const toDos = await searchAll(userId);

  return res
    .status(OK)
    .json({ toDos });
};
