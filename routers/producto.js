
const Producto=require('../class').Producto;
const ProductoController=require('../controllers').productoController;


module.exports=function productoRoute(express){
	const router=express.Router();

router.route('/')
.get(ProductoController(Producto).find)
.post(ProductoController(Producto).create)

return router

}