console.log('made it to front-end controller');

myApp.controller('travelers', ['$scope', '$location','travelersFactory', 'placesFactory', function ($scope, $location, travelersFactory, placesFactory){
  $scope.travelers = [];
  // travelersFactory.getTraveler(function(data){
  //   $scope.travelers = data;
  // });

  function indexCallback(data){
    $scope.travelers = data;
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
    console.log('made it');
    placesFactory.current($scope.newPlace, indexCallback, errorCallback);
      $scope.newPlace = {};
  };

  $scope.deleteTraveler = function(travelers){
    travelersFactory.delete($scope);
  };

}]);
