const { Schema, default: mongoose } = require("mongoose");

const UserShcema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
});

const User = mongoose.model("User", UserShcema);

module.exports = User;
