module.exports=function ProductoFactory(mongoose){
	const Schema=mongoose.Schema;
const productoSchema=new Schema({
	name:String,
	description:String
});


const Producto=mongoose.model('producto',productoSchema);
return Producto;
}
