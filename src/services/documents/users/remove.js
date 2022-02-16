const { USERS, TOKENS } = require('../../strings');
const { remove } = require('../../../models')(USERS);
const { create } = require('../../../models')(TOKENS);

module.exports = async (users, token) => {
  const { _id: id } = users;

  const { deletedCount } = await remove(id);

  await create(token);

  return { deletedCount, users };
};
