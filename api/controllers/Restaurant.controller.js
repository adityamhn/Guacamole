const UserModel = require("../models/User.model");
const OrderModel = require("../models/Order.model");
const RestaurantModel = require("../models/Restaurant.model");
const jwt = require("jsonwebtoken");

exports.GetAllRestaurants = (req, res, next) => {
    return RestaurantModel.find({})
      .then((restaurants) => {
        return res.status(200).json({
          success: true,
          restaurants,
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
  
  exports.SignUp = async (req, res, next) => {
    const { email } = req.body;
  
    const emailCheck = await RestaurantModel.find({
      email,
    });
    if (emailCheck.length !== 0) {
      return res.status(500).json({
        success: false,
        message: "Email already exists!",
      });
    }
    const newRestaurant = new RestaurantModel(req.body);
  
    newRestaurant
      .save()
      .then(async (n) => {
        return res.status(200).json({
          success: true,
        });
      })
      .catch((err) => {
        console.log("Error!");
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Unknown server error!",
        });
      });
  };
  
  exports.SignIn = (req, res, next) => {
    console.log("called");
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(500).json({
        success: false,
        message: "Required values not provided!",
      });
    let HASH = process.env.JWT_HASH;
    RestaurantModel.findOne({
      email,
    })
      .then(async (restaurant) => {
        if (restaurant) {
          const check = await restaurant.MatchPassword(password);
  
          if (!check) {
            console.log("Error");
  
            return res.status(500).json({
              success: false,
              message: "Unknown server error!",
            });
          }
  
          if (!HASH) {
            throw new Error("Hash not provided!");
          }
          const restaurantData = restaurant;
          const token = jwt.sign(
            {
              restaurantData,
            },
            HASH,
            {
              expiresIn: "10h",
            }
          );
          return res.status(200).json({
            success: true,
            token,
            restaurantData: restaurantData,
          });
        } else {
          return res.status(500).json({
            success: false,
            message: "Restaurantname does not exist!",
          });
        }
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
  
  exports.CheckedSignedIn = (req, res, next) => {
    return res.status(200).json({
      success: true,
      message: "Restaurant is signed in!",
    });
  };
  
  
  exports.UpdateRestaurantDetails = (req, res, next) => {
    const newDetails = req.body;
    if (!res.locals.uid || !newDetails)
      return res.status(500).json({
        success: false,
        message: "Required values not provided!",
      });
    return RestaurantModel.findOneAndUpdate(
      {
        _id: res.locals.uid,
      },
      newDetails,
      {
        new: true,
      }
    )
      .then((u) => {
        return res.status(200).json({
          success: true,
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
  
  exports.GetRestaurantDetails = (req, res, next) => {
    const { email } = res.locals;
    if (!email)
      return res.status(500).json({
        success: false,
        message: "Required values not provided!",
      });
    return RestaurantModel.findOne({
      email,
    })
      .then((restaurant) => {
        return res.status(200).json({
          success: true,
          restaurant: restaurant,
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