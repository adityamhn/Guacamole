const ItemModel = require("../models/Item.model");

exports.AddItem = async (req, res, next) => {
  const { name, description, itemPhoto, price, isVeg, type, r_id } = req.body;

  if (!name || !description || !itemPhoto || !price || !isVeg || !type || !r_id)
    return res.status(400).json({
      success: false,
      message: "Required values not provided!",
    });

  const newItem = new ItemModel({
    name,
    description,
    itemPhoto,
    price,
    isVeg,
    type,
    r_id,
  });

  newItem.save();

  return res.status(200).json({
    success: true,
    message: "Item added successfully",
  });
};

exports.getItemByRestaurantId = async (req, res, next) => {
  const { r_id } = req.body;

  if (!r_id)
    return res.status(400).json({
      success: false,
      message: "Required values not provided!",
    });

  return ItemModel.find({
    r_id,
  })
    .then((items) => {
      return res.status(200).json({
        success: true,
        items: items,
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

exports.updateItem = async (req, res, next) => {
  const { _id } = req.body;
  if (!_id)
    return res.status(400).json({
      success: false,
      message: "Item ID not provided!",
    });

  const { name, description, itemPhoto, price, isVeg, type, r_id } = req.body;

  return ItemModel.updateOne(
    {
      _id,
    },
    {
      name,
      description,
      itemPhoto,
      price,
      isVeg,
      type,
      r_id,
    }
  )
    .then((item) => {
      return res.status(200).json({
        success: true,
        item: item,
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
