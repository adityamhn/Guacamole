const express = require("express");
const {
  GetAllRestaurants,
  SignUp,
  SignIn,
  CheckedSignedIn,
  UpdateRestaurantDetails,
  GetRestaurantDetails,
} = require("../controllers/Restaurant.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.get("/get-all-restaurants", CheckJWT, GetAllRestaurants);

router.post("/sign-up", SignUp);

router.post("/sign-in", SignIn);

router.get("/check-signed-in", CheckJWT, CheckedSignedIn);

router.put("/update-restaurant-details", CheckJWT, UpdateRestaurantDetails);

router.get("/get-restaurant-details", CheckJWT, GetRestaurantDetails);
module.exports = router;