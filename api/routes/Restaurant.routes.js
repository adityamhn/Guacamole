const express = require("express");
const {
  GetAllUsers,
  SignUp,
  SignIn,
  CheckedSignedIn,
  UpdateUserDetails,
  GetUserDetails,
} = require("../controllers/User.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.get("/get-all-users", CheckJWT, GetAllUsers);

router.post("/sign-up", SignUp);

router.post("/sign-in", SignIn);

router.get("/check-signed-in", CheckJWT, CheckedSignedIn);

router.put("/update-user-details", CheckJWT, UpdateUserDetails);

router.get("/get-user-details", CheckJWT, GetUserDetails);
module.exports = router;