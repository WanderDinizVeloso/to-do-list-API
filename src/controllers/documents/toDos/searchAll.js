const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/toDos');

module.exports = async (req, res, _next) => {
  const { sort, order } = req.query;
  const { _id: userId } = req.user;

  const toDos = await searchAll(userId, sort, order);

  return res
    .status(OK)
    .json({ toDos });
};
