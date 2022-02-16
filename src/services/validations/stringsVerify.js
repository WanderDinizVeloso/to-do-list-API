module.exports = (param, length) => {
  if (!param || typeof param !== 'string' || param.length < length) {
    return null;
  }

  return param;
};
