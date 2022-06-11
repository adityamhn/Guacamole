const express = require("express");
const {
    AddItem,
    getItemByRestaurantId,
    updateItem
} = require("../controllers/Item.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.post("/add-item", CheckJWT, AddItem);

router.get("/get-item-by-restaurant-id", CheckJWT, getItemByRestaurantId);

router.post("/update-item", CheckJWT, updateItem);

module.exports = router;
