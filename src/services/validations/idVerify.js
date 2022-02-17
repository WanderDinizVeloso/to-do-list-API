module.exports = (id, length) => {
  if (!id || typeof id !== 'string' || id.length !== length) {
    return null;
  }

  return id;
};
