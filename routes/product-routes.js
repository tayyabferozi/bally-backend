const router = require("express").Router();
const { body } = require("express-validator");
const checkValidity = require("../utils/checkValidity");

const productControllers = require("../controllers/product-controllers");

router.get("/", productControllers.getAllProducts);

router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Please enter a product name"),
    body("sheetsNum")
      .isNumeric({ min: 1 })
      .withMessage("Please enter a valid number of sheets"),
    body("sheetLength")
      .isNumeric({ min: 1 })
      .withMessage("Please enter a valid sheet length"),
    body("logWeight")
      .isNumeric({ min: 1 })
      .withMessage("Please enter a valid weight of log"),
    body("rollsNum")
      .isNumeric({ min: 1 })
      .withMessage("Please enter a valid number of rolls in a log"),
    body("rollWeight")
      .isNumeric({ min: 1 })
      .withMessage("Please enter a valid weight of roll"),
  ],
  checkValidity,
  productControllers.addProduct
);

router.delete("/:id", productControllers.deleteProduct);

module.exports = router;
