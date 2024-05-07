// import mongoose, { Schema } from "mongoose";

// const rumSchema = new Schema({
//   brand: String,
//   price: Number,
//   taste: String,
// });

// const rum = mongoose.model("rum", rumSchema);
// export default rum;

import mongoose, { Schema } from "mongoose";

const rumSchema = new Schema({
  brand: String,
  price: Number,
  taste: String,
});

const rum = mongoose.model("rum", rumSchema);
export default rum;
