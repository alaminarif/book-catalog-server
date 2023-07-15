const User = require("./user.model");

exports.getUser = async (query) => {
  console.log("service : ", query);
  const result = await User.findOne({ query });
  return result;
};
exports.createUser = async (data) => {
  const result = await User.create(data);
  return result;
};
