const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, minlength: 1, required: true },
    password: { type: String, minlength: 1, required: true },
    email: { type: String, unique: true, minlength: 5, required: true },
    regDate: { type: Object, required: true, default: Date.now },
    lastLogin: { type: Object, required: true, default: 0},
    status: { type: Boolean, default: false },
  },
  { versionKey: false }
);
const User = mongoose.model("User", UserSchema);
module.exports = { User, UserSchema };