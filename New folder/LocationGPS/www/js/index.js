// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
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
	window.location = "dashboard.html";
	return false;	
});

$("#registerForm").submit(function(){
	var name = $('#name').val();
    var password = $('#password').val();
	
	if (name == "" || password == "") {
		alert("Vul alles in aub");
	return false;
	}
/*	$.ajax({
       type: "POST",
        url: "http://maritapeeters.nl/PeriodSaver/save.php",
        contentType: "application/json",
        dataType: 'jsonp',
       	data:JSON.stringify({
           name:name,
           password:password
       }),
       success: function() {
         alert('success');
       },
	   error: function() {
   		alert("ERROR");
 		 }
    });
    console.log(name, password);
	return false;*/
	
	console.log(name, password);
	
	$.ajax({
		type: "GET",
		url: "http://maritapeeters.nl/PeriodSaver/save.php?name=" + name + "&password=" + password,
		dataType: "json",
		success: function(data) {
			console.log(data);
			window.location = "dashboard.html";
		},
		error: function(data) {
			console.log("ERROR" + data );
			window.location = "dashboard.html";
		}
	});
	return false;
	
});

$('#register').click(function(){
	window.location = "register.html";
	return false;
});
