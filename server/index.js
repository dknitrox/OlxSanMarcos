
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const app2=express();

const route=express.Router();
const bodyParser=require('body-parser');
const methodOverride=require('method-override');
const apiRoute=require('./routers').api;
const path=require('path');
const frontEndPath=__dirname+"/../web";
const bower=__dirname+"/../bower_components";
console.log(frontEndPath);
mongoose.connect('localhost:27017/test2');

var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var options = {
  swaggerUi: '/swagger.json',
  controllers: __dirname+'/controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(__dirname+'/api/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server

});

app.use(methodOverride());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/css', express.static(frontEndPath+"/css"));
app.use('/js', express.static(frontEndPath+"/js"));
app.use('/img', express.static(frontEndPath+"/img"));
app.use('/fonts', express.static(frontEndPath+"/fonts"));
app.use('/bower', express.static(bower));

app.use('/api',apiRoute(express));

app.get('/catalogo',(req,res)=>{
	res.sendFile('index.html',{root:frontEndPath});
})
app.get('/perfil',(req,res)=>{
	res.sendFile('perfil.html',{root:frontEndPath});
})
app.get('/admin',(req,res)=>{
	res.sendFile('admin.html',{root:frontEndPath});
})
module.exports=app;
