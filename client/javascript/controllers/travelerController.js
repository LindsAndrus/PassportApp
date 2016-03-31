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
    console.log($scope.newPlace);
    // placesFactory.current($scope.newPlace, indexCallback, errorCallback);
    // $scope.newPlace = {};
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
    if(input.value){
      //Ajax request to google server
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', "https://maps.googleapis.com/maps/api/place/details/json?type=" + input.value + "$key=AIzaSyCd9oNLcDRcgRqzO_0moK-NwVv6k3nugX8", true);

      xhttp.send();

      xhttp.addEventListener("readystatechange", processRequest, false);

      xhttp.onreadystatechange = processRequest;

      function processRequest(e) {
        if (xhttp.readyState == 4 && xhttp.status == 200){
        // var response = JSON.parse(xhr.responseText);
        console.log(xhttp.responseText);
        }
      }

      // var xhttp = new XMLHttpRequest();
      //
      // xhttp.open("GET", "http://ipinfo.io/json/", true);
      // xhhtp.send();

    }
  };

}]);
