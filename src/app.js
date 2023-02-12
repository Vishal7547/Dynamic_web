const express=require('express');
const hbs=require('hbs');
const routes=require('./routes/main');
const bodyParser=require('body-parser');
const app=express();    
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const Details=require('./models/details');
const slider=require('./models/slider');
const service=require('./models/service');
// db connection
mongoose.connect('mongodb://localhost:27017/dynamic_web',()=>{
    console.log("db connect successfully");
    // service.create(
    //     [
    //         {
    //            icon:"fas fa-graduation-cap",
    //            title:"Provide best courses",
    //            description:"we provided best courses that help student in placement",
    //            linkText:"Check",
    //            link:"https://www.youtube.com",
    //         },
    //         {
    //             icon:"fas fa-graduation-cap",
    //             title:"Learn Project",
    //             description:"we provided best courses that help student in placement",
    //             linkText:"Check",
    //             link:"https://www.youtube.com",
    //          },
    //          {
    //             icon:"fas fa-graduation-cap",
    //             title:"Learn Project",
    //             description:"we provided best courses that help student in placement",
    //             linkText:"Check",
    //             link:"https://www.youtube.com",
    //          },
    //     ]
    // )
   
   
   
    // slider.create(
    //    [
    //     {
    //         title:'Learn javascript in very east way',
    //         subTitle:'javascript is one of the most popular langauge',
    //         imageUrl:"/static/images/s1.jpg"
    //        },
    //        {
    //         title:'Learn HTML in very east way',
    //         subTitle:'HTML is one of the most popular hyper text langauge',
    //         imageUrl:"/static/images/s2.jpg"
    //        },
    //        {
    //         title:'Learn css in very east way',
    //         subTitle:'learn designing with dynamic web with very easy way',
    //         imageUrl:"/static/images/s3.jpg"
    //        },
    //         {
    //      title:'Learn javascript in very east way',
    //      subTitle:'javascript is one of the ost popular langauge',
    //      imageUrl:"/static/images/s1.jpg"
    //     },
    //    ]
    // )


    // Details.create(
    //     {
    //         brandName:'Dynamic web',
    //         brandIcon:"/static/images/backendLogo.jpg",
    //         links:[
    //             {
    //                 label:"Home",
    //                 url:"/"
    //             },{
    //                 label:" gallery",
    //                 url:"/services"
    //             },{
    //                 label:"gallery",
    //                 url:"/gallery"
    //             },
    //             {
    //                 label:"contact us",
    //                 url:"/contact us"
    //             },

    //         ]
    //     }
    // )
})

//  /static/css/style.css
app.use(bodyParser.urlencoded({
    extended:true
    }))
app.use('/static',express.static('public'));
app.use('',routes);

// (template engine [hbs])

app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");


app.listen(process.env.PORT | 5600, ()=>{
    console.log('server start');
});


