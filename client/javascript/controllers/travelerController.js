console.log('made it to front-end controller');

myApp.controller('travelers', ['$scope', '$location','travelersFactory', function ($scope, $location, travelersFactory){
  $scope.travelers = [];
  // travelersFactory.getTraveler(function(data){
  //   $scope.travelers = data;
  // });

  function indexCallback(data){
    $scope.travelers = data;
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
    console.log('made it')
  }

  $scope.deleteTraveler = function(travelers){
    travelersFactory.delete($scope);
  };

}]);
