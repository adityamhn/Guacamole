const UserModel = require("../models/User.model");
const OrderModel = require("../models/Order.model");
const RestaurantModel = require("../models/Restaurant.model");
const jwt = require("jsonwebtoken");
const ItemModel = require("../models/Item.model");
const TableModel = require("../models/Table.model");

exports.AddOrder = async (req, res, next) => {
  const { t_id, items, cost } = req.body;
  const uid = res.locals.uid;
  console.log("uid", uid);
  console.log("t_id", t_id);
  if (!uid || !t_id)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });

  const newOrder = new OrderModel({
    u_id: uid,
    t_id,
    items,
    cost,
  });

  newOrder
    .save()
    .then(async (n) => {
      TableModel.findByIdAndUpdate(
        t_id,
        { $set: { status: "occupied" }, $push: { orders: n._id } },
        { new: true }
      ).then((table) => {
        console.log("table", table);
        return res.status(200).json({
          success: true,
        });
      });
    })
    .catch((err) => {
      console.log("Error!");
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Unknown server error.",
      });
    });
};

exports.GetOrderDetails = async (req, res, next) => {
  const { tableId } = req.params;
  if (!tableId)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });

  try {
    const table = await TableModel.findOne({
      _id: tableId,
    }).populate("orders");

    console.log("table", table);
    const orderIds = table.orders;

    console.log("orderIds", orderIds);

    const orders = await OrderModel.find({
      _id: { $in: orderIds },
    });

    orders.forEach((order) => {
      ItemModel.populate(order, { path: "items" }, (err, order) => {
        console.log("order", order);
        res.status(200).json({
          success: true,
          order,
        });
      });
    });
  } catch (err) {
    console.log("Error!");
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unknown server error.",
    });
  }
};
