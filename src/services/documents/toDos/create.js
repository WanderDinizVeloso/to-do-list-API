const { TO_DOS } = require('../../strings');
const { create, searchById } = require('../../../models')(TO_DOS);

module.exports = async ({ message, status, userId }) => {
  const date = new Date();

  const { insertedId } = await create({ message, status, userId, createdAt: date });

  const createdToDo = await searchById(insertedId);

  return createdToDo;
};
