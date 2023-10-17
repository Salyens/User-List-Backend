const validName = (name) => {
  const trimmedName = name.trim();
  const regex = new RegExp(/^[a-z]+(?:\s[a-z]+)*$/i);
  return regex.test(trimmedName);
};

const validEmail = (email) => {
  const trimmedEmail = email.trim();
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(trimmedEmail);
};

const validPassword = (password) => {
  const trimmedPassword = password.trim();
  const regex = new RegExp(/^.{1,}$/);
  return regex.test(trimmedPassword);
};

module.exports = { validName, validEmail, validPassword };

