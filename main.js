// import express from "express";
// // import applerouter from "./routes/apple.js";
// import samsung from "./routes/sam.js";
// // import rum from "./routes/rum.js";
// import mongoose from "mongoose";
// // const apple = express();
// // apple.use("/moblies/apple", applerouter);
// import cors from "cors";

// const sam = express();
// sam.use(cors());

// sam.use(express.json());
// sam.use("/mobiles/samsung", samsung);

// // const rum = express();
// // rum.use(express.json());
// // rum.use("/HotDrinks/rum", rum)

// // console.log(mongoose)
// mongoose
//   .connect(
//     "mongodb+srv://surya190602:Prakash2000@cluster0.dya28kj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("db connected");
//     console.log("server");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// sam.listen(1000, () => {
//   console.log("server connected");
// });







import express from "express";
// import applerouter from "./routes/apple.js";
// import samsung from "./routes/sam.js";
import rum from "./routes/rum.js";
import mongoose from "mongoose";
// const apple = express();
// apple.use("/moblies/apple", applerouter);
import cors from "cors";

const rumhot = express();
rumhot.use(cors());

rumhot.use(express.json());
rumhot.use("/drinks/hotDrinks", rum);

// const rum = express();
// rum.use(express.json());
// rum.use("/HotDrinks/rum", rum)

// console.log(mongoose)
mongoose
  .connect(
    "mongodb+srv://surya190602:Prakash2000@cluster0.dya28kj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
    console.log("server");
  })
  .catch((err) => {
    console.log(err);
  });

rumhot.listen(1100, () => {
  console.log("server connected");
});

