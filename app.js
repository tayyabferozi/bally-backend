require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/products", require("./routes/product-routes"));
app.use("/api/records", require("./routes/record-routes"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server started on port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
