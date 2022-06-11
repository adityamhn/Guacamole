const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  tables: {
    type: [mongoose.Types.ObjectId],
    required: false,
    default: [],
  },
  menu: {
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

RestaurantSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

RestaurantSchema.methods.MatchPassword = async function (password) {
  const restaurant = this;
  return await bcrypt.compare(password, restaurant.password);
};

RestaurantSchema.methods.GetRestaurantData = async function () {
  const restaurant = this;
  return {
    name: restaurant.name,
    password: restaurant.password,
    email: restaurant.email,
    phoneNumber: restaurant.phoneNumber,
    location: restaurant.location,
  };
};

module.exports = mongoose.model("Restaurant", RestaurantSchema);
