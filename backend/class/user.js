const UserFactory=require('../models').UserFactory;
const mongoose=require('mongoose');

class UserClass{
	constructor(){
		this.user=UserFactory(mongoose);
	}

	find(query){
		return this.user.find(query)
		.populate('producto')
		.exec();


	}
	findNoPopulate(query){
		return this.user.find(query)
		.exec()

	}

	create(usertemp){
		const userSave=new this.user(usertemp);
		return userSave.save()

	}

	deleteById(id){
	console.log("delete param",id);
		return this.user.findByIdAndRemove(id)
		.exec();
	}

	findById(id){
	const _id=mongoose.Types.ObjectId(id)
		return this.user.findById(_id)
		.populate('producto')
		.exec();
	}

	update(id,query){
		return this.user.findByIdAndUpdate(id,{'$set':query})

	}
	updateProducts(id,product){
		return this.user.findOneAndUpdate(id,{'$push':{producto:product}})
	}

}

module.exports=UserClass;