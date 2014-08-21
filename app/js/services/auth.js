"use strict";

app.factory("Auth", function(FIRE_URL){
	var ref = new Firebase(FIRE_URL);
	var auth = new FirebaseSimpleLogin(ref, function(error, user){
		if(error){
			console.log(error);
		}
		else if(user){
			console.log("User ID: " + user.uid + ", Provider: " + user.provider);
		}
	});
});
