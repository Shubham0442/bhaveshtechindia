const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enums: ["admin", "volunteer"], default: "volunteer" },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
