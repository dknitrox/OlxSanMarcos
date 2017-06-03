module.exports=function productoController(Producto){
	function find(req,res){
		const query=req.query;
		Producto.find(query)
		.then((data)=>{
			res.status(200).send(data);
		});
	}
	function create(req,res){
		const producto=req.body;
		Producto.create(producto)
		.then((data)=>{
		 	console.log("producto guardado correctamente");
		 	res.status(200).send(data);
		 
		 });
	}

	return {
		find:find,
		create:create
	}
}