const express = require("express");
const {
  GetAllTables,
  GetTableDetails,
  AddTable,
  DeleteTable,
} = require("../controllers/Table.controller");
const CheckJWT = require("../middleware/jwt.middleware");

const router = express.Router();

router.get("/get-all-tables", CheckJWT, GetAllTables);

router.get("/get-table-details", CheckJWT, GetTableDetails);

router.post("/add-table", CheckJWT, AddTable);

router.post("/delete-table", CheckJWT, DeleteTable);
module.exports = router;
