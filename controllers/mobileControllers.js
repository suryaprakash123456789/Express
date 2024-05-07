// import mobiles from "../data/mobiles.js";
// import { response } from "express";
import Samsung from "../model/Mobiles.js";
// import rum from "../model/Rum.js";
// // export const getdata = (req, res) => res.json(mobiles);

// export const postdata = (req, res) => {
// const model = new samsung (req.body)
// model.save();
// res.json(model);
// };

// export const putdata = (req, res) => res.json(mobiles);
// export const deletedata = (req, res) => res.json(mobiles);

// export const getdata = (req, res) => res.json(mobiles);

// export const getdataByid = async (req, res) => {
//   const model = await Samsung.findById(req.params.id);
//   res.json(model);
// };

// export const getone = async (req, res) => {
//   const model = await Samsung.find({ brand: req.params.brand });
//   res.json(model);
// };

// export const deleteDatabyid = async (req, res) => {
//     const model = await Samsung.findByIdAndDelete( req.params.id );
//     res.json(model);
//   };
  
//   export const deleteData = async (req, res) => {
//     const model = await Samsung.findByIdAndDelete( req.params.id );
//     res.json(model);
//   };

//   export const putdata = async (req, res) => {
//    const content = req.body
//     const model = await Samsung.findByIdAndUpdate( req.params.id,req.body,{new:true} );
//     res.json(model);
//   };



  export const getdata = async(req, res) => {
    try{
        const da = await Samsung.find()
        res.status(200).json(da)
    }catch(err){
        res.status(500).send((err)=>console.log(err))
  }
}


export const getdataByid = async(req, res) => {
    try{
        const da = await Samsung.findById(req.params.id);
        res.status(200).json(da)
    }catch(err){
        res.status(404).send((err)=>console.log(err))
  }
}

export const postdata = async(req, res) => {
    try{
        const model = new Samsung(req.body)
        const da = await model.save()
        res.status(201).json(da)
    }catch(err){
        res.status(500).send((err)=>console.log(err))
  }
}

  export const putdata = async (req, res) => {
    try {
        const content = req.body;
        const updatedData = await Samsung.findByIdAndUpdate(
          req.params.id,
          content,
          {
            new: true,
          }
        );
        if (updatedData) {
          res.status(200).json(updatedData);
        } else {
          res.status(404).send("id not found");
        }
      } catch (error) {
        res.status(500).send((err) => console.log(err));
      }
    };


export const deleteData = async (req, res) => {
    try {
      await Samsung.findByIdAndDelete(req.params.id);
      res.send("ID Deleted");
    } catch (error) {
      res.status(500).send((err) => console.log(err));
    }
  };


// import rum from "../model/Mobiles.js";

// // export const getdata = (req, res) => res.json(mobiles);

// export const postdata = (req, res) => {
// const model = new rum (req.body)
// model.save();
// res.json(model);
// };


// export const getone =async(req,res)=>{
//     try{
//         const rummodel = await 
//     }
// }