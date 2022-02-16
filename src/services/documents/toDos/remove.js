const { TO_DOS } = require('../../strings');
const { remove, searchById } = require('../../../models')(TO_DOS);

module.exports = async (id) => {
  const toDo = await searchById(id);

  if (!toDo) {
    return null;
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, toDoDeleted: toDo };

  return deleted;
};
