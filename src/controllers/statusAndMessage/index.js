const { CONFLICT } = require('http-status-codes').StatusCodes;

const createdSuccessfully = (param) =>
  `'${param}' created successfully.`;

const registered = (param) => ({
    status: CONFLICT,
    message: `'${param}' is already.`,
  });

module.exports = {
  createdSuccessfully,  
  registered,
};
