const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
  },
  desc: { type: String, required: true },
  created: { type: String, required: true },
  nameLowerCase: { type: String, required: true }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
