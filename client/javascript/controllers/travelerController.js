console.log('made it to front-end traveler controller');

myApp.controller('travelers', ['$scope', '$location', '$cookies', 'travelersFactory', 'placesFactory', function ($scope, $location, $cookies, travelersFactory, placesFactory){
  $scope.travelers = [];
  $scope.cityData = {};
  $scope.userStuff = $cookies.get('user');

  function indexCallback(data){
    $cookies.put('user', data.username);
    $scope.getPlaces();
    $location.path("/dashboard");
  }

  function errorCallback(errors){
    console.log(errors)
    $scope.errors = errors;
  }

  $scope.addTraveler = function(){
    travelersFactory.create($scope.newTraveler, indexCallback, errorCallback);
      $scope.newTraveler = {};
  };

  $scope.getPlaces = function(){
    travelersFactory.getTravelersPlaces($scope.userStuff)
    // console.log();
    // $scope.travelers = data;
  };

  $scope.addCurrLocation = function(){
    var b = document.getElementById("myCity").value;
    var a = document.getElementById("myCountry").value;
    var c = document.getElementById("myLat").value;
    var d = document.getElementById("myLng").value;
    var e = document.getElementById("myPlaceID").value;
      $scope.newPlace = {};
      $scope.newPlace.city = b
      $scope.newPlace.country = a
      $scope.newPlace.latitude = c
      $scope.newPlace.longitude = d
      $scope.newPlace.placeId = e
      // console.log($scope.newPlace);
    placesFactory.current($scope.newPlace, $scope.userStuff, indexCallback, errorCallback);
    $scope.newPlace = {};
  };

  // $scope.deleteTraveler = function(travelers){
  //   travelersFactory.delete($scope);
  // };

  $scope.logout = function(){
    $cookies.remove('user');
    $location.path("/");
  };

  $scope.placeInfo = function(){
    $scope.cityData = travelersFactory.getInfo();
  };

  //Data from autocomplete input
  $scope.searchResult = function(){
    var input = document.getElementById('searchTextField');
    travelersFactory.aboutLocation(input,function(data){
      $location.path("/search");
    });
  };

}]);
