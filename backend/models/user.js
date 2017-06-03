module.exports=function UserFactory(mongoose){
const Schema=mongoose.Schema;
const userSchema=new Schema({
	userName:{type:String},
	password:{type:String},
	producto:[{type:Schema.Types.ObjectId,ref:"producto"}]
});


const User=mongoose.model('user',userSchema);
return User;
}
