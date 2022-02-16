const { TO_DOS } = require('../../strings');
const { searchById } = require('../../../models')(TO_DOS);

module.exports = async (id) => {
  const toDo = await searchById(id);

  if (!toDo) {
    return null;
  }

  return toDo;
};
