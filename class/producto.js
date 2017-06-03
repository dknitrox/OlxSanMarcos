const ProductoFactory=require('../models').ProductoFactory;
const mongoose=require('mongoose');

class ProductoClass{

	constructor(producto){
		this.producto=ProductoFactory(mongoose);	
	}

	find(query){
		return this.producto.find(query)
		.exec()


	}


	create(productotemp){
		const productoSave=new this.producto(productotemp);
		return productoSave.save()

	}


}

module.exports=ProductoClass;