const { toDoStatus } = require('../arrays');

module.exports = (status) => {
  const statusExist = toDoStatus.some((statusFromList) => statusFromList === status);

  if (!status || typeof status !== 'string' || !statusExist) {
    return null;
  }

  return status;
};
