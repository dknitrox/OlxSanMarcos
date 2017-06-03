
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const route=express.Router();
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const apiRoute=require('./routers').api;
const path=require('path');
const frontEndPath=__dirname+"/../frontend";
console.log(frontEndPath);
mongoose.connect('localhost:27017/test2');


app.use(methodOverride());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', express.static(frontEndPath));

app.use('/api',apiRoute(express));

app.use('/catalogo',(req,res)=>{
	res.sendFile('index.html',{root:frontEndPath});
})
app.use('/perfil',(req,res)=>{
	res.sendFile('perfil.html',{root:frontEndPath});
})
app.use('/admin',(req,res)=>{
	res.sendFile('admin.html',{root:frontEndPath});
})
module.exports=app;
