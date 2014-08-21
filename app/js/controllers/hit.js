"use strict";

app.controller("HitController", function($scope){
	var hits = new Firebase("https://shining-torch-1499.firebaseio.com/");
	$scope.data = "Hit";
});
