const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../services/documents/toDos');
const { modifiedSuccessfully, notFound } = require('../../statusAndMessage');
const { TO_DO } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { message, status } = req.body;

  const updated = await update({ id, message, status });

  if (!updated) {
    return next(notFound(TO_DO));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(TO_DO),
      updatedToDo: updated,
    });
};
