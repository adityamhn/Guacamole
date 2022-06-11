const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
  u_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    default: null,
  },
  r_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    required: false,
    default: "free",
  },
  lastOccupancy: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

TableSchema.methods.GetTableData = async function () {
  const table = this;
  return {
    u_id: table.u_id,
    status: table.status,
    lastOccupancy: table.lastOccupancy,
  };
};

module.exports = mongoose.model("Table", TableSchema);
