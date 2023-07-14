const { Schema, default: mongoose } = require("mongoose");

const UserShcema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserShcema);

module.exports = User;
