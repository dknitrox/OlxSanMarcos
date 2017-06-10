var app=angular.module('app',[]);

app.controller('adminController',function($scope,$http){
	$scope.name="kevin";
	$scope.apellido="mendoza";
	$scope.users={};
	$http({
  method: 'GET',
  url: '/api/user'
}).then(function successCallback(response) {
	$scope.users=response.data;
	console.log(response.data);
  }, function errorCallback(response) {
	console.log(response);
  });
});
app.controller('perfilController',function($scope){
	$scope.perfil="perfil controller";
});