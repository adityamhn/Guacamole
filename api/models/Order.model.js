const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  u_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  r_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items: {
    type: [mongoose.Types.ObjectId],
    required: false,
    default: [],
  },
  cost: {
    type: Number,
    required: true,
  }
});

OrderSchema.methods.GetOrderData = async function () {
  const order = this;
  return {
    u_id: order.u_id,
    r_id: order.r_id,
    items: order.items,
    cost: order.cost,
  };
};

module.exports = mongoose.model("Order", OrderSchema);