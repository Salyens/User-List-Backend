const validName = (name) => {
  const regex = new RegExp(/^[a-z]+(?:\s[a-z]+)*$/i);
  return regex.test(name);
};

const validEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

const validPassword = (password) => {
  const regex = new RegExp(/^.{1,}$/);
  return regex.test(password);
};

module.exports = { validName, validEmail, validPassword };
