const mongoose=require('mongoose');
const express=require('express');
const app=express();
const route=express.Router();
const route2=express.Router();
const bodyParser=require('body-parser');
const methodOverride=require('method-override');

mongoose.connect('localhost:27017/test2');
const Schema=mongoose.Schema;
const userSchema=new Schema({
	userName:{type:String},
	password:{type:String},
	producto:[{type:Schema.Types.ObjectId,ref:"producto"}]
});
const productoSchema=new Schema({
	name:String,
	description:String
});

const User=mongoose.model('user',userSchema);
const Producto=mongoose.model('producto',productoSchema);

app.use(methodOverride());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

route.route('/user')
.get((req,res)=>{
	console.log("User get",req.query);
	if(req.query){
		console.log(req.query);
		User.find(req.query)
		.populate('producto')
		.exec()
		.then((data)=>{
			res.status(200).send(data);
		});

	}
	else{
		User.find()
		.exec()
		.then((data)=>{
			res.status(200).send(data);
		});

	}


})
.post((req,res)=>{
		console.log(req.body);
	 const user=new User(req.body);
	 console.log(user);
	 user.save()
	 .then((data)=>{
	
	 	console.log("user guardado correctamente");
	 	res.status(200).send(data);
	 
	 });
})

route.route('/producto')
.get((req,res)=>{
	console.log("User get",req.query);
	if(req.query){
		console.log(req.query);
		Producto.find(req.query)
		.exec()
		.then((data)=>{
			res.status(200).send(data);
		});

	}
	else{
		Producto.find()
		.exec()
		.then((data)=>{
			res.status(200).send(data);
		});

	}


})
.post((req,res)=>{
		console.log(req.body);
	 const producto=new Producto(req.body);
	 console.log(producto);
	 producto.save()	
	 .then((data)=>{
	
	 	console.log("producto guardado correctamente");
	 	res.status(200).send(data);
	 
	 });
})



route.route('/user/:id')
.delete((req,res)=>{
	console.log("delete param",req.params.id);
	User.findByIdAndRemove(req.params.id)
	.exec()
	.then((data)=>{
		res.send("exito")

	})
	.catch((err)=>{
		console.log("err",err);
		res.status(400);
	});
})
.get((req,res)=>{
	User.findById(req.params.id)
	.populate('producto')
	.then(data=>{
		res.send(data);
	})
})
.put((req,res)=>{
	if(req.body.producto){
		console.log("Find one and update")
		const pro=req.body.producto;
		console.log(pro);
		User.findOneAndUpdate(req.params.id,{'$push':{producto:pro}})
		.then((data)=>{
			res.status(200).send(data	);
		})
		.catch(err=>{
			res.status(400).send(err);
		})
	}
	else{
		User.findByIdAndUpdate(req.params.id,{'$set':req.body})
		.then((data)=>{
			res.status(200).send("Actualizado con exito");
		});
	}

})



app.use('/api',route);

app.listen(8000);