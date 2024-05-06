import mongoose, { Schema } from "mongoose";

const rumSchema = new Schema({
  brand: String,
  price: Number,
  taste: String, 
});

const rum = mongoose.model("samsung", rumSchema);
export default rum;