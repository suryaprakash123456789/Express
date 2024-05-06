import mongoose, { Schema } from "mongoose";

const mobileSchema = new Schema({
  brand: String,
  price: Number,
  model: String, 
});

const Samsung = mongoose.model("samsung", mobileSchema);
export default Samsung;
