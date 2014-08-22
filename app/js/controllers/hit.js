"use strict";

app.controller("HitController", function($scope, FIRE_URL, $firebase){
	var ref = new Firebase(FIRE_URL + "/hits");

	$scope.position = 1;

	$scope.back = function(){
		if($scope.position > 1) $scope.position--;
	};

	$scope.forth = function(){
		if($scope.position < 3) $scope.position++;
	};

	$scope.hitList = {
		hit1: {},
		hit2: {},
		hit3: {}
	};

	$scope.hits = $firebase(ref.startAt("date", "2014-08-10").endAt("date", "2014-08-20")).$asObject()
	$scope.sm = StateMachine.create({
		initial: "idle",
		events: [
			{ name: "hitSaved", from: "loading", to: "idle" },
			{ name: "hitSaving", from: "idle", to: "loading" }
		],
		callbacks: {
			onidle: function() { $scope.loadingHits = false; },
			onloading: function() { $scope.loadingHits = true }
		}
	});
	$scope.hits.$watch(function(e){
		console.log(e.event);
	});

	$scope.hitClick = function(id){
		var x = 0;
		return;
		var mod = $scope.hits.$getRecord(id);
		mod.name = prompt("Enter name!");
		$scope.sm.hitSaving();
		$scope.hits.$save(mod).then(function(ref){
			if(ref.name()) $scope.sm.hitSaved();
		});
	};
});


