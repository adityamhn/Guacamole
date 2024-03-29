const express = require("express");
const {
  AddOrder,
  GetOrderDetails,
} = require("../controllers/Order.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.post("/add-order", CheckJWT, AddOrder);

router.get("/get-order-details/:tableId", CheckJWT, GetOrderDetails);

module.exports = router;
