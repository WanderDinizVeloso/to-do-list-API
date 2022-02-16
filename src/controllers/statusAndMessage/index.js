const { CONFLICT, NOT_FOUND } = require('http-status-codes').StatusCodes;

const createdSuccessfully = (param) =>
  `'${param}' created successfully.`;

const registered = (param) => ({
    status: CONFLICT,
    message: `'${param}' is already.`,
  });

const notFound = (param) => ({
  status: NOT_FOUND,
  message: `'${param}' not found.`,
});

const deletedSuccessfully = (param) =>
  `'${param}' deleted successfully,`;

const modifiedSuccessfully = (param) =>
`'${param}' modified successfully.`;

module.exports = {
  createdSuccessfully,  
  registered,
  notFound,
  deletedSuccessfully,
  modifiedSuccessfully,
};
