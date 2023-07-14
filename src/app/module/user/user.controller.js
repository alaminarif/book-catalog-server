const UserService = require("./user.service");

exports.getUser = async (req, res) => {
  const result = await UserService.getUser();
  res.send({
    status: true,
    message: "user get successfull",
    data: result,
  });
};
exports.createUser = async (req, res) => {
  const data = req.body;
  const result = await UserService.createUser(data);
  res.send({
    status: true,
    message: "user get successfull",
    data: result,
  });
};
