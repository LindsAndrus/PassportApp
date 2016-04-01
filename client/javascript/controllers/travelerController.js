console.log('made it to front-end traveler controller');

myApp.controller('travelers', ['$scope', '$location', '$cookies', 'travelersFactory', 'placesFactory', function ($scope, $location, $cookies, travelersFactory, placesFactory){
  $scope.travelers = [];
  $scope.cityData = {};

  if($location.path() == '/dashboard'){
    console.log($cookies.get('user'));
    getPlaces($cookies.get('user'));
  };

  $scope.addTraveler = function(){
    travelersFactory.create($scope.newTraveler, indexCallback, errorCallback);
    $scope.newTraveler = {};
  };

  function indexCallback(data){
    $cookies.put('user', data.username);
    $location.path("/dashboard");
  }

  $scope.userStuff = $cookies.get('user');

  function errorCallback(errors){
    console.log(errors)
    $scope.errors = errors;
  }

  function getPlaces(user){
    console.log('this is getPlaces');
    travelersFactory.getTravelersPlaces(user, function(info){
      console.log('this is info: ', info);
      $scope.info = info;
    })
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
