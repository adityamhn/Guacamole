const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
  u_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  lastOccupancy: {
    type: Date,
    required: false,
    default: Date.now
  }
});

TableSchema.methods.GetTableData = async function () {
  const table = this;
  return {
    u_id: table.u_id,
    status: table.status,
    lastOccupancy: table.lastOccupancy
  };
};

module.exports = mongoose.model("Table", TableSchema);