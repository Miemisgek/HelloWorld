$("#loginForm").submit(function(){
	var name = $('#name').val();
    var password = $('#password').val();
	
	if (name == "" || password == "") {
	alert("Vul alles in aub");
	return false;
	}	
	
	$.ajax({
		type: "GET",
		url: "http://maritapeeters.nl/periodsaver/login.php?name=" + name + "&password=" + password,
		dataType: "json",
		success: function(data) {
			alert("Je bent ingelogd!");
			//getUserData(data);
			//window.location = "dashboard.html?userid=" + userData;
			window.location = "dashboard.html";
		},
		error: function(data) {
			alert("Gegevens kloppen niet");
			//window.location = "index.html";
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
	$.ajax({
		type: "GET",
		url: "http://maritapeeters.nl/periodsaver/save.php?name=" + name + "&password=" + password,
		dataType: "json",
		success: function(data) {
			window.location = "index.html";
		},
		error: function(data) {
			alert("Gebruikersnaam is al in gebruik, probeer opnieuw!");
		}
	});
	
	return false;
});

$('#register').click(function(){
	window.location = "register.html";
	return false;
});

//FUNCTIONS
function getUserData(data){
	$.ajax({
		type: "POST",
		url: "http://maritapeeters.nl/periodsaver/save.php?name=" + name + "&password=" + password,
		dataType: "json",
		success: function(data) {
			window.location = "index.html";
		},
		error: function(data) {
			alert("Gebruikersnaam is al in gebruik, probeer opnieuw!");
		}
	});
	
	return userData;
}