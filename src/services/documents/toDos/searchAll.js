const { TO_DOS } = require('../../strings');
const { searchAll } = require('../../../models')(TO_DOS);
const { sortSearch } = require('../../functions');

module.exports = async (userId, sort = 'createdAt', order = 'ASC') => {
  const toDos = await searchAll(
    { userId },
    sortSearch(sort, order),
  );

  return toDos;
};
