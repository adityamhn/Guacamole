const UserModel = require("../models/User.model");
const OrderModel = require("../models/Order.model");
const RestaurantModel = require("../models/Restaurant.model");
const TableModel = require("../models/Table.model");
const jwt = require("jsonwebtoken");

exports.GetAllTables = (req, res, next) => {
  const { r_id } = req.body;
  return TableModel.find({ r_id })
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
  const { _id } = res.locals;
  if (!_id)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });
  return TableModel.findOne({
    _id,
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

exports.AddTable = async (req, res, next) => {
  const { r_id } = req.body;

  if (!r_id)
    return res.status(400).json({
      success: false,
      message: "Required values not provided!",
    });

  const newTable = new TableModel({
    r_id,
  });

  newTable.save();

  return res.status(200).json({
    success: true,
    message: "Table added successfully",
  });
};

exports.DeleteTable = async (req, res, next) => {
  const { _id, r_id } = req.body;
  if (!_id || !r_id)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });
  const table = await TableModel.findById({
    _id,
    r_id,
  });
  if (!table)
    return res.status(500).json({
      success: false,
      message: "Table not found!",
    });
  table
    .delete()
    .then(async () => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Unknown server error!",
      });
    });
};

// make frees
exports.MakeFree = async (req, res, next) => {
  const { _id, r_id } = req.body;
  if (!_id || !r_id)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });
  const table = await TableModel.findById({
    _id,
    r_id,
  });
  if (!table)
    return res.status(500).json({
      success: false,
      message: "Table not found!",
    });
  table.status = "Free";
  await table
    .save()
    .then(async () => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Unknown server error!",
      });
    });
};

//add user
exports.AddUser = async (req, res, next) => {
  const { _id, r_id, u_id } = req.body;
  if (!_id || !r_id || !u_id)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });
  const table = await TableModel.findById({
    _id,
    r_id,
  });
  if (!table)
    return res.status(500).json({
      success: false,
      message: "Table not found!",
    });
  const user = await UserModel.findById({
    _id: u_id,
  });
  if (!user)
    return res.status(500).json({
      success: false,
      message: "User not found!",
    });
  table.status = "occupied";
  table.u_id = u_id;
  await table
    .save()
    .then(async () => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Unknown server error!",
      });
    });
};

//remove user
exports.RemoveUser = async (req, res, next) => {
  const { _id, r_id } = req.body;
  if (!_id || !r_id)
    return res.status(500).json({
      success: false,
      message: "Required values not provided!",
    });
  const table = await TableModel.findById({
    _id,
    r_id,
  });
  if (!table)
    return res.status(500).json({
      success: false,
      message: "Table not found!",
    });
  table.status = "being_cleaned";
  table.u_id = null;
  await table
    .save()
    .then(async () => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Unknown server error!",
      });
    });
};
