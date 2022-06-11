const mongoose = require("mongoose");

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
    type: [[mongoose.Types.ObjectId]],
    required: false,
    default: [],
  },
  location: {
    type: String,
    default: "",
    required: false,
  },
});

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
