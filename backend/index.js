
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const route=express.Router();
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const apiRoute=require('./routers').api;


mongoose.connect('localhost:27017/test2');


app.use(methodOverride());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',apiRoute(express));

module.exports=app;
