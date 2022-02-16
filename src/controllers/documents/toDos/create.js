const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/toDos');
const { createdSuccessfully } = require('../../statusAndMessage');
const { TO_DO } = require('../../../services/strings');

module.exports = async (req, res, _next) => {
  const { _id: userId } = req.user;
  const { message, status } = req.body;

  const created = await create({ message, status, userId });

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(TO_DO),
      createdToDo: created,
    });
};
