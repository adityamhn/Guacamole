const express = require("express");
const {
  AddOrder,
  GetOrderDetails
} = require("../controllers/Order.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.get("/add-order", CheckJWT, AddOrder);

router.get("/get-order-details", CheckJWT, GetOrderDetails);