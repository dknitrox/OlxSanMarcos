const productoRouter=require('./producto');
const userRouter=require('./user');
module.exports=function apiRoute(express,args){
	    const router=express.Router();

	    router.get('',(req,res)=>{
	    	res.send("Api up");
	    })
	    router.use('/user',userRouter(express));
	    router.use('/products',productoRouter(express));

	return router;
}