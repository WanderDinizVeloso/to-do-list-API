const { CONFLICT, NOT_FOUND, BAD_REQUEST } = require('http-status-codes').StatusCodes;

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

const invalid = (param) => ({
  status: BAD_REQUEST,
  message: `The invalid '${param}' field.`,
});

module.exports = {
  createdSuccessfully,  
  registered,
  notFound,
  deletedSuccessfully,
  modifiedSuccessfully,
  invalid,
};
