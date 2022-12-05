const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  ballWeight: Number,
  ballNum: Number,
  batchNum: Number,
  gProduction: Number,
  gLoss: Number,
  date: String,
  gLossPercent: Number,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

module.exports = Record = mongoose.model("Record", recordSchema);
