module.exports=function userController(User){
	function find(req,res){
		const query=req.query;
			console.log("populate");
			 User.find(query)
			 .then((data)=>{
				res.status(200).send(data);
			})
			.catch((err)=>{
				console.log("error==",err);
				res.status(400).send(err);
			});

	}
	function findNoPopulate(req,res){

		 User.findNoPopulate(query)
		.then((data)=>{
			res.status(200).send(data);
		})
	}

	function create(req,res){
		const user=req.body;	
		 User.create(user)
			.then((data)=>{
		 	console.log("user guardado correctamente");
		 	res.status(200).send(data);
		 });
	}
	function deleteById(req,res) {
		const id=req.params.id;
		 User.deleteById(id)
			.then((data)=>{
				res.send("exito")
			})
			.catch((err)=>{
				console.log("err",err);
				res.status(400);
			});
	}

	function findById(req,res){
		const id=req.params.id;
		 User.findById(id)
			.then(data=>{
				res.status(200).send(data);
			})
			.catch(err=>{
				res.status(400).send(err);
			})
	}

	function update(req,res){
			if(req.body.producto){
					User.updateProducts(id,product)
						.then((data)=>{
					res.status(200).send(data	);
				})
				.catch(err=>{
					res.status(400).send(err);
				})
			}
			else{
			 User.update(id,query)
				.then((data)=>{
				res.status(200).send("Actualizado con exito");
				});
			}

	}



	return {
		find:find,
		findNoPopulate:findNoPopulate,
		create:create,
		deleteById:deleteById,
		findById:findById,
		update:update,

	}
}