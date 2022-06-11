const express = require("express");
const {
  GetAllTables,
  GetTableDetails,
  AddTable,
  DeleteTable,
  MakeFree,
  AddUser,
  RemoveUser,
} = require("../controllers/Table.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.get("/get-all-tables", CheckJWT, GetAllTables);

router.post("/get-table-details", CheckJWT, GetTableDetails);

router.post("/add-table", CheckJWT, AddTable);

router.post("/delete-table", CheckJWT, DeleteTable);

router.post("/make-free", CheckJWT, MakeFree);

router.post("/add-user", CheckJWT, AddUser);

router.post("/remove-user", CheckJWT, RemoveUser);
module.exports = router;
