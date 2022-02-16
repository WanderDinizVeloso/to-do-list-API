const { USERS, TOKENS } = require('../../strings');
const { remove } = require('../../../models')(USERS);
const { create } = require('../../../models')(TOKENS);

module.exports = async (user, token) => {
  const { _id: id } = user;

  const { deletedCount } = await remove(id);

  await create(token);

  return { deletedCount, user };
};
