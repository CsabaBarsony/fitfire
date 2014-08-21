"use strict";

app.controller("HitController", function($scope, FIRE_URL, $firebase){
	var ref = new Firebase(FIRE_URL + "/hits");
	var hits = $firebase(ref).$asArray();
	$scope.hits = hits;

	$scope.hitClick = function(id){
		var hit = prompt("Enter hit!");
		console.log(hit);
	};
});


