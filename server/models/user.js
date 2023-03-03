const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  member: { type: Boolean },
  payment: { type: Number },
});

const User = model("user", userSchema);

module.exports = User;
