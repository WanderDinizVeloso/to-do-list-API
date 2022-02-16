const { TO_DOS } = require('../../strings');
const { create, searchById } = require('../../../models')(TO_DOS);

module.exports = async ({ message, status, date, userId }) => {
  const { insertedId } = await create({ message, status, date, userId });

  const createdToDo = await searchById(insertedId);

  return createdToDo;
};
