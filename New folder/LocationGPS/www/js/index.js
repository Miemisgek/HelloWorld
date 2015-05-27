/*var onSuccess = function(position) {
		alert('Latitude: '          + position.coords.latitude          + '\n' +
			  'Longitude: '         + position.coords.longitude         + '\n' +
			  'Altitude: '          + position.coords.altitude          + '\n' +
			  'Accuracy: '          + position.coords.accuracy          + '\n' +
			  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			  'Heading: '           + position.coords.heading           + '\n' +
			  'Speed: '             + position.coords.speed             + '\n' +
			  'Timestamp: '         + position.timestamp                + '\n');
	};

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		alert('code: '    + error.code    + '\n' +
			  'message: ' + error.message + '\n');
	}

navigator.geolocation.getCurrentPosition(onSuccess, onError);*/

$("#loginForm").submit(function(){
	var name = $('#name').val();
    var password = $('#password').val();
	
	if (name == "" || password == "") {
	alert("Vul alles in aub");
	}	
	
	$.ajax({
		type: "GET",
		url: "http://maritapeeters.nl/periodsaver/login.php?name=" + name + "&password=" + password,
		dataType: "json",
		success: function(data) {
			console.log(data);
			window.location = "listoftargets.html";
		},
		error: function(data) {
			console.log("ERROR" + data );
			window.location = "index.html";
		}
	});
	
	return false;	
});

$("#registerForm").submit(function(){
	var name = $('#name').val();
    var password = $('#password').val();
	
	if (name == "" || password == "") {
	alert("Vul een gebruikersnaam en wachtwoord in");
	}	
	console.log(name, password);
	
	$.ajax({
		type: "GET",
		url: "http://maritapeeters.nl/periodsaver/save.php?name=" + name + "&password=" + password,
		dataType: "json",
		success: function(data) {
			console.log(data);
			window.location = "listoftargets.html";
		},
		error: function(data) {
			console.log("ERROR" + data );
			//window.location = "index.html";
		}
	});
	
	return false;
});

$('#register').click(function(){
	window.location = "register.html";
	return false;
});
