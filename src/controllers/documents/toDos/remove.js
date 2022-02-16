const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../services/documents/toDos');
const { deletedSuccessfully, notFound } = require('../../statusAndMessage');
const { TO_DO } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  const removed = await remove(id);

  if (!removed) {
    return next(notFound(TO_DO));
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(TO_DO),
      deletedUser: removed,
    });
};
