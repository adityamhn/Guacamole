const express = require("express");
const {
  GetAllUsers,
  SignUp,
  GetUserDetails,
  AddToCart,
  ConfirmCart,
} = require("../controllers/User.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.get("/get-all-users", CheckJWT, GetAllUsers);

router.post("/sign-up", SignUp);

router.get("/get-user-details", CheckJWT, GetUserDetails);

router.post("/add-to-cart", CheckJWT, AddToCart);

router.post("/confirm-cart", CheckJWT, ConfirmCart);
module.exports = router;

//fix for temp users in all controllers
