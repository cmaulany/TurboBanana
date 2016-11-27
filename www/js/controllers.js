angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('MapCtrl', function($scope, $cordovaGeolocation, $http) {
  var options = {timeout: 10000, enableHighAccuracy: true};
  var centerPos = new google.maps.LatLng(0, 0);

  //Initial position
  var mapOptions = {
    center: centerPos,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
   };

  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var latLng;

  var shelterLocations;
  var shelterCount = 300;

  //Get help offerers
  $http.get("data/airbnb.json")
    .then(function(response) {

    $scope.geoloc = response.data;

    shelterLocations = $scope.geoloc;

    //Add json markers
    for(var i = 0; i < shelterCount; i++) {
      var loc = $scope.geoloc[i];
      latLng = new google.maps.LatLng(loc.latitude, loc.longitude);
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        icon: 'img/pin_shelter.png'
      });
    }

    //Center to last node
    $scope.map.setCenter(latLng);

  }, function(error){
    console.log("Could not load shelter json");
  });

  var minSqr = function (marker, list) {
  	var closestElement;
  	var closestDistance = Number.MAX_VALUE;
  	for(var i = 0; i < shelterCount; i++) {
  		var element = list[i];
  		console.log(marker.LatLng);
  		var distance = Math.pow(marker.latitude - element.latitude, 2) + Math.pow(marker.longitude - element.longitude, 2);
  		if (distance < closestDistance) {
  			closestDistance = distance;
  			closestElement = element;
  		}
  	}
  	return closestElement;
  };

  $http.get("data/in_need.json")
    .then(function(response) {

    $scope.geoloc = response.data;

    //Add json markers
    for(var i = 0; i < $scope.geoloc.length; i++) {
      var marker = $scope.geoloc[i];
      latLng = new google.maps.LatLng(marker.latitude, marker.longitude);
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        icon: 'img/pin_in_need.png'
      });

      marker.addListener('click', function(self) {
      	alert(self.latLng);
      	var closest = minSqr(self.latLng, shelterLocations);
      });
    }

    //Center to last node
    $scope.map.setCenter(latLng);

  }, function(error){
    console.log("Could not load in need json");
  });

  // $cordovaGeolocation.getCurrentPosition(options).then(function(position){

  //   //Uncomment this to center to user location
  //   var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //   $scope.map.setCenter(latLng);

  // }, function(error){
  //   console.log("Could not get location");
  // });
});