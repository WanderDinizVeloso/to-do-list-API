const { TO_DOS } = require('../../strings');
const { update, searchById } = require('../../../models')(TO_DOS);

module.exports = async ({ id, message, status }) => {
  const toDo = await searchById(id);
  
  if (!toDo) {
    return null;
  }

  const date = new Date();
    
  const { modifiedCount } = await update({
    ...toDo, message, status, updateAt: date,
  });
  
  const newData = await searchById(id);
  
  return { modifiedCount, newData };
};
