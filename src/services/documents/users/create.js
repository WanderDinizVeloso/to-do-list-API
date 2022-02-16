const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { USERS } = require('../../strings');
const { create, searchByField, searchById } = require('../../../models')(USERS);
const { stringInNumber } = require('../../functions');

module.exports = async ({ firstName, lastName, email, password }) => {
  const verifiedUser = await searchByField({ email });

  if (verifiedUser) {
    return null;
  }

  const hashedPassword = await hash(password, stringInNumber(BCRYPT_SALT_ROUNDS));

  const userWithHashedPassword = {
    firstName, lastName, email, password: hashedPassword,
  };

  const { insertedId } = await create(userWithHashedPassword);

  const { password: pass, ...userCreatedWithoutPassword } = await searchById(insertedId);

  return userCreatedWithoutPassword;
};
