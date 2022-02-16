const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS } = require('../../strings');
const { update, searchById } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');

module.exports = async ({ _id, firstName, lastName, email, password }) => {
  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  const modifiedUser = {
    _id, firstName, lastName, email, password: hashedPassword,
  };

  const { modifiedCount } = await update(modifiedUser);

  const newUserData = await searchById(_id);

  const { password: pass, ...userWithoutPassword } = newUserData;

  return { modifiedCount, newUserData: userWithoutPassword };
};
