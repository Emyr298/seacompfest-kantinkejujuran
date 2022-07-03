const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Buffer, required: true },
  desc: String,
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
