module.exports = (param, list) => {
  const paramExist = list.some((paramFromList) => paramFromList === param);

  if (!param || typeof param !== 'string' || !paramExist) {
    return null;
  }

  return param;
};
