console.log('made it to front-end traveler controller');

myApp.controller('travelers', ['$scope', '$location', '$cookies', 'travelersFactory', 'placesFactory', function ($scope, $location, $cookies, travelersFactory, placesFactory){
  $scope.travelers = [];
  // travelersFactory.getTraveler(function(data){
  //   $scope.travelers = data;
  // });
    $scope.userStuff = $cookies.get('user');
    console.log($scope.userStuff);

  function indexCallback(data){
    $cookies.put('user', data.username);
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

  $scope.deleteTraveler = function(travelers){
    travelersFactory.delete($scope);
  };

  $scope.logout = function(){
    $cookies.remove('user');
    console.log($scope.userStuff);
    $location.path("/");
  };

  //Data from autocomplete input
  $scope.searchResult = function(){
    var input = document.getElementById('searchTextField');
    // console.log(input.value);
    travelersFactory.aboutLocation(input,function(data,detailData){
      console.log(detailData);
      console.log(data);
    });
  };

}]);
