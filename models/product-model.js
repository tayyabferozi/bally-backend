const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  sheetsNum: Number,
  sheetLength: Number,
  logWeight: Number,
  rollsNum: Number,
  rollWeight: Number,
});

module.exports = Product = mongoose.model("Product", productSchema);
