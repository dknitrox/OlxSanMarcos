const apiFactory=require('./api');
const productoFactory=require('./producto');
const userFactory=require('./user');

module.exports={
	api:apiFactory,
	producto:productoFactory,
	user:userFactory
}