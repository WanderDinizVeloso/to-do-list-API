module.exports = (email) => {
  const checkEmailByRegex = /(\w+[@]\w+\.[a-z]{3,3}(\.[a-z]{2,2})?)$/.test(email);

  if (!email || typeof email !== 'string' || !checkEmailByRegex) {
    return null;
  }

  return email;
};

// regex criado através do site regexr.com
// link do regex de minha autoria: https://regexr.com/6bktt