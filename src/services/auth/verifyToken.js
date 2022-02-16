const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;

const { TOKENS } = require('../strings');
const { searchByField } = require('../../models')(TOKENS);

module.exports = async (token) => {
  try {
    const decoded = verify(token, SECRET);

    const blackListExist = await searchByField({ token });

    if (blackListExist) {
      return null;
    }

    return decoded.data;
  } catch (err) {
    return null;
  }
};
