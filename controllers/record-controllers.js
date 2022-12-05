const Record = require("../models/record-model");

exports.getAllRecords = async (req, res) => {
  try {
    const foundRecords = await Record.find();

    res.json({ success: true, records: foundRecords });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, errors: ["Something went wrong!"] });
  }
};

exports.addRecord = async (req, res) => {
  const {
    ballWeight,
    ballNum,
    batchNum,
    product,
    gProduction,
    gLoss,
    gLossPercent,
    date,
  } = req.body;

  try {
    const createdRecord = await Record.create({
      ballWeight,
      ballNum,
      batchNum,
      product,
      gProduction,
      gLoss,
      gLossPercent,
      date,
    });

    res.json({
      success: true,
      msg: "Record created successfully!",
      record: createdRecord,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, errors: ["Something went wrong!"] });
  }
};

exports.deleteRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRecord = await Record.findOneAndDelete({ _id: id });

    if (deletedRecord)
      res.json({
        success: true,
        msg: "Record deleted successfully!",
        record: deletedRecord,
      });
    else
      res
        .status(500)
        .json({ success: false, errors: ["Something went wrong!"] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, errors: ["Something went wrong!"] });
  }
};
