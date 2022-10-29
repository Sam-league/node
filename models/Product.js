import { Mongoose } from "mongoose";

const productSchema = Mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  product_price: {
    type: Number,
    required: true,
    min: 100,
    max: 10000,
  },
  color: string,
});

export default new Mongoose.model("products", productSchema);
