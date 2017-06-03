
const User=require('../class').User;
const UserController=require('../controllers').userController;

module.exports=function userRoute(express){
const router=express.Router();

router.route('/')
.get(UserController(User).find)
.post(UserController(User).create)


router.route('/:id')
.delete(UserController(User).deleteById)
.get(UserController(User).findById)
.put(UserController(User).update)

return router
}