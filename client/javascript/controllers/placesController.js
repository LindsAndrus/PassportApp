console.log('made it to front-end controller');

myApp.controller('places', ['$scope', '$location', 'placesFactory', function ($scope, $location, placesFactory){
  $scope.places = [];
  placesFactory.getPlaces(function(data){
    $scope.places = data;
    console.log($scope.places);
  });

  $scope.addPlace = function(){
    placesFactory.create($scope.newPlace, function(data) {
       $scope.places = data;
       $scope.newPlace = {};
     });
  };

  $scope.deletePlace = function(places){
    placesFactory.delete($scope);
  }
}]);
