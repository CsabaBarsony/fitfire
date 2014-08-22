"use strict";

app.controller("HitController", function($scope, FIRE_URL, $firebase){
	var ref = new Firebase(FIRE_URL + "/hits");
	$scope.hits = $firebase(ref).$asArray();
	$scope.loadingHits = false;

	$scope.hitClick = function(id){
		var hit = $scope.hits.$getRecord(id);
		hit.name = prompt("Enter name!");
		$scope.loadingHits = true;
		$scope.hits.$save(hit).then(function(ref){
			if(ref.name()) $scope.loadingHits = false;
		});
	};
});


