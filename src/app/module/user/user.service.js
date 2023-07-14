const User = require("./user.model");

exports.getUser = async () => {
  const result = await User.find({});
  return result;
};
exports.createUser = async (data) => {
  const result = await User.create(data);
  return result;
};
