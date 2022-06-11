const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  u_id: {
    type: String,
    required: true,
  },
  r_id: {
    type: String,
    required: true,
  },
  items: {
    type: [mongoose.Types.ObjectId],
    required: false,
    default: [],
  },
  Cost: {
    type: String,
    required: true,
  }
});

OrderSchema.methods.GetOrderData = async function () {
  const order = this;
  return {
    u_id: order.u_id,
    r_id: order.r_id,
    items: order.items,
    Cost: order.Cost,
  };
};

module.exports = mongoose.model("Order", OrderSchema);