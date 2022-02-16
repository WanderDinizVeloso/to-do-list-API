const { TO_DOS } = require('../../strings');
const { searchAll } = require('../../../models')(TO_DOS);

module.exports = async (userId) => {
  const toDos = await searchAll({ userId });

  return toDos;
};
