//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine",'ejs');

var itemArr = ["Todo List..."];

app.get("/",(req,res) =>{

    let day = date.getDate();
    
    res.render('index', { 
        dayOfweek:day,
        itemsToappend:itemArr
    });
});

app.post("/",(req,res) =>{
    var item = req.body.newItem;
    itemArr.push(item);
    res.redirect("/");
});

app.get("/about",(req,res)=>{
    let day = date.getDate();

    res.render('about', {
        dayOfweek: day,
        itemsToappend: itemArr
    });
});

app.listen(3000,function(){
  console.log("Server is Runnig at port 3000");
});