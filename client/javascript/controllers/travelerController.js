console.log('made it to front-end controller');

myApp.controller('travelers', ['$scope', '$location''travelersFactory', function ($scope, $location travelersFactory){
  $scope.travelers = [];
  travelersFactory.getTraveler(function(data){
    $scope.travelers = data;
    console.log($scope.travelers);
  });

  $scope.addTraveler = function(){
    travelersFactory.create($scope.newTraveler, function(data) {
       $scope.travelers = data;
       $scope.newTraveler = {};
     });
  };

  $scope.deleteTraveler = function(travelers){
    travelersFactory.delete($scope);
  }
}]);
