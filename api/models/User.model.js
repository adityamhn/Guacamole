const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  cart: {
    type: [mongoose.Types.ObjectId],
    required: false,
    default: [],
  },
  orders: {
    type: [mongoose.Types.ObjectId],
    required: false,
    default: [],
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "",
    required: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.MatchPassword = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

UserSchema.methods.GetUserData = async function () {
  const user = this;
  return {
    name: user.name,
    password: user.password,
    phoneNumber: user.phoneNumber,
    location: user.location,
  };
};

module.exports = mongoose.model("User", UserSchema);
