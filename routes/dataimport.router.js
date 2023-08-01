const express=require('express');


const Hotel=require("../model/hotel.model");
const hotels=require("../data/hotels");


const router=express.Router();


router.route("/")
.post(async (req,res)=>{
    try{
        await Hotel.removeAllListeners();
        const hotelsInDB = await Hotel.insertMany(hotels.data);
       res.json(hotelsInDB);
    }catch(err){
        console.log(err);
        res.json({ message:"could not add data to DB"});
    }
})
module.exports=router;
