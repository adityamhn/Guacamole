const UserModel = require("../models/User.model");
const OrderModel = require("../models/Order.model");
const RestaurantModel = require("../models/Restaurant.model");
const TableModel = require("../models/Table.model")
const jwt = require("jsonwebtoken");

exports.GetAllTables = (req, res, next) => {
return TableModel.find({})
    .then((tables) => {
    return res.status(200).json({
        success: true,
        tables,
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


exports.GetTableDetails = (req, res, next) => {
const { email } = res.locals;
if (!email)
    return res.status(500).json({
    success: false,
    message: "Required values not provided!",
    });
return TableModel.findOne({
    email,
})
    .then((table) => {
    return res.status(200).json({
        success: true,
        table: table,
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