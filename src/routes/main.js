const express=require('express');
const {route} = require('express/lib/application')
const routes=express.Router();
const Details=require('../models/details');
const Slider=require('../models/slider');
const Service=require('../models/service');
const Contact=require('../models/contact');




routes.get('/',async(req,res) => {
  const detailsHead=await  Details.findOne({"_id":"63e75dfeb98bebc1e38a1c1b"})
  const slider=await Slider.find();
  const service=await Service.find();
    // console.log(detailsHead);
res.render('index',{
    details:detailsHead,
    slider:slider,
    service:service
})
})


routes.get('/gallery',async(req,res) => {
  const detailsHead=await  Details.findOne({"_id":"63e75dfeb98bebc1e38a1c1b"})
    res.render('gallery',{
        details:detailsHead 
    })
    })

 routes.post('/process-contact-form',async(req,res)=>{
    console.log("form is Summit");
    // console.log(req.body);
    // save the data to db
    try{
const data=await Contact.create(req.body);
console.log(data);
res.redirect('/');
    }catch(e){
        console.log(e);
        res.redirect('/');
    }


 })

module.exports=routes