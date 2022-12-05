const router = require("express").Router();
const { body } = require("express-validator");

const checkValidity = require("../utils/checkValidity");
const recordControllers = require("../controllers/record-controllers");

router.get("/", recordControllers.getAllRecords);

router.post(
  "/",
  [
    body("date").trim().notEmpty().withMessage("Please include a date"),
    body("product").trim().notEmpty().withMessage("Please choose a product"),
    body("ballWeight")
      .isNumeric({ min: 1 })
      .withMessage("Please enter a valid ball weight"),
    body("ballNum")
      .isNumeric({ min: 1 })
      .withMessage("Please enter the ball number"),
    body("batchNum")
      .isNumeric({ min: 1 })
      .withMessage("Please enter the batch number"),
    body("gProduction")
      .isNumeric({ min: 1 })
      .withMessage("Please include the production"),
    body("gLoss").isNumeric({ min: 1 }).withMessage("Please include the loss"),
  ],
  checkValidity,
  recordControllers.addRecord
);

router.delete("/:id", recordControllers.deleteRecord);

module.exports = router;
