const { CONFLICT, NOT_FOUND, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const messageItems = {
  required: () => '- Is required',
  type: (type) => `- Must be a ${type}`,
  length: (length) => `- Must contain at least ${length} characters`,
  format: (format) => `- Must contain the format ${format}.`,
  containList: (list) => `the status must be at least one items: ${list.toString()}`,
  passwordAttribute: () => `- must contain at least:
    - a capital letter;
    - a number
    - a special character (!, $, #, %, _).`,
};

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

const internalError = () =>
  'sorry, internal error.';

const invalidEmail = () => ({
  status: BAD_REQUEST,
  message: `The 'email' field must contain at least:
    ${messageItems.required()}
    ${messageItems.type('string')}
    ${messageItems.format('email@email.com')}`,
});

const invalidPassword = (length) => ({
  status: BAD_REQUEST,
  message: `The 'email' field must contain at least:
    ${messageItems.required()}
    ${messageItems.type('string')}
    ${messageItems.length(length)}
    ${messageItems.passwordAttribute()}`,
});

const invalidParamWithList = (param, list) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must contain at least:
    ${messageItems.required()}
    ${messageItems.type('string')}
    ${messageItems.containList(list)}`,
});

const invalidString = (param, length) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must contain at least:
    ${messageItems.required()}
    ${messageItems.type('string')}
    ${messageItems.length(length)}`,
});

module.exports = {
  createdSuccessfully,  
  registered,
  notFound,
  deletedSuccessfully,
  modifiedSuccessfully,
  invalid,
  internalError,
  invalidEmail,
  invalidParamWithList,
  invalidPassword,
  invalidString,
};
