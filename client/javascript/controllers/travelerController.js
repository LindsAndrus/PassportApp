console.log('made it to front-end controller');

myApp.controller('travelers', ['$scope', '$location','travelersFactory', function ($scope, $location, travelersFactory){
  $scope.travelers = [];
  travelersFactory.getTraveler(function(data){
    $scope.travelers = data;
  });

  function indexCallback(data){
      $scope.travelers = data;
  }

  $scope.addTraveler = function(){
      travelersFactory.create($scope.newTraveler, indexCallback);
       // $scope.travelers = data;
       $scope.newTraveler = {};
  };

  $scope.deleteTraveler = function(travelers){
    travelersFactory.delete($scope);
  };

}]);
