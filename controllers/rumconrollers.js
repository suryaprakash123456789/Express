import Rum from "../model/Rum.js";

export const getdata = (req,res)=>{
   try{
    const rum = rum.find()
    res.status(200).json(Rum)
   }catch(err){
   res.status(500).send(err)
   }
}

export const getdataByID = async(req,res)=>{
    try{
        const rum = await Rum.findById(req.params.id)
        res.status(200).json(rum)
    }
    catch(err){
    res.status(404).send(err)
    }
}

export const postdata = async (req,res)=>{
    try{
        const model = new Rum(req.body)
        const da = await model.save()
        res.status(200).json(da)
    }
    catch{
        res.status(500).send(err)
    }
}


export const putdata = async (req,res)=>{
    try{
        const content= req.body
        const updatedData = await Rum.findByIdAndUpdate(req.params.id,content,{new:true})
if()
    }
}