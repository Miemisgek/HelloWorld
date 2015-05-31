angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
	
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  // When someone is logging out, there comes an alert and returns to the index.html
  $scope.logout = function() {
	alert("Je bent uitgelogd!");
   	window.location = "index.html";
  };
  
})

.controller('DashboardCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', distance: '75' , id: 1 },
    { title: 'Chill', distance: '90', id: 2 },
    { title: 'Dubstep', distance: '100', id: 3 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
