const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
  },
  itemPhoto: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isVeg: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  r_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

ItemSchema.methods.GetItemData = async function () {
  const Item = this;
  return {
    name: Item.name,
    description: Item.description,
    itemPhoto: Item.itemPhoto,
    price: Item.price,
    isVeg: Item.isVeg,
    type: Item.type,
    r_id: Item.r_id,
  };
};

module.exports = mongoose.model("Item", ItemSchema);
