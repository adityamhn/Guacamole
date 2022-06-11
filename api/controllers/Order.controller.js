const UserModel = require("../models/User.model");
const OrderModel = require("../models/Order.model");
const RestaurantModel = require("../models/Restaurant.model");
const jwt = require("jsonwebtoken");
const ItemModel = require("../models/Item.model");

exports.AddOrder = async (req, res, next) => {
    const { u_id, r_id, items } = req.body;

    if (!u_id || !r_id || items)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });

    var price = 0;
    

    const newOrder = new OrderModel(req.body);

    newOrder
      .save()
      .then(async (n) => {
        return res.status(200).json({
            success: true,
        });
      })
      .catch((err) => {
          console.log("Error!")
          console.log(err);
          return res.status(500).json({
              success:false,
              message: "Unknown server error."
          });
      });


};

exports.GetOrderDetails = (req, res, next) => {
    const { _id } = res.body;
    if (!_id)
        return res.status(500).json({
        success: false,
        message: "Required values not provided!",
        });
    return OrderModel.findById({
        _id,
    })
        .then((order) => {
        return res.status(200).json({
            success: true,
            order: order,
        });
        })
        .catch((err) => {
        console.log("error");
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Unknown server error!",
        });
        });
    };
