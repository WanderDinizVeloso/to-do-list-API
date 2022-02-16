const { ASCENDING_TYPE, DESCENDING_TYPE } = require('../magicNumbers');

module.exports = (sort, order) => {
  const orderType = {
    ASC: ASCENDING_TYPE,
    DESC: DESCENDING_TYPE,
  };

  const sortParam = {
    message: { message: orderType[order] },
    updateAt: { updateAt: orderType[order] },
    status: { status: orderType[order] },
    createdAt: { createdAt: orderType[order] },
  };

  return sortParam[sort];
};