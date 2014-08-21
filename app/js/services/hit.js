"use strict";

app.factory("Hit", function($firebase, FIRE_URL){
	var ref = new Firebase(FIRE_URL + "hits");
	var hits = $firebase(ref).$asArray();
	var Hit = {
		all: hits,
		create: function(hit){
			return hits.$add(hit);
		}
	};

	return Hit;
});
