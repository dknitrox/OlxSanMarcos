module.exports=function productoController(Producto){
	function find(req,res){
		const query=req.query;
		Producto.find(query)
		.then((data)=>{
			res.status(200).send(data);
		});
	}
	function create(req,res){
		console.log("req.bvoyd",req.body);
		const producto=req.body;
		Producto.create(producto)
		.then((data)=>{
		 	console.log("producto guardado correctamente");
		 	res.status(200).send(data);
		 
		 })
		.catch((err)=>{
			res.status(400).send(err);
		})
	}

	return {
		find:find,
		create:create
	}
}