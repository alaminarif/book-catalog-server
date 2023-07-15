const UserService = require("./user.service");

exports.getUser = async (req, res) => {
  try {
    const query = req.params.email;
    console.log(query);
    const result = await UserService.getUser(query);

    res.status(200).json({
      status: "success",
      message: "Successfully created the supplier",
    });
  } catch (error) {
    res.status(400).send({
      status: fail,
      message: 'user cat"n get',
      error: error.message,
    });
  }
};
exports.createUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await UserService.createUser(data);
    res.send({
      status: true,
      message: "user get successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: fail,
      message: 'user cat"n create',
      error: error.message,
    });
  }
};
