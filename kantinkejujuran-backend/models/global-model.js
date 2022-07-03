const mongoose = require("mongoose");

const globalSchema = new mongoose.Schema({
  balance: Number,
});

const Global = mongoose.model('global', globalSchema);

module.exports = Global;
