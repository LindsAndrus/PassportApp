console.log('made it to traveler factory');

var myApp = angular.module('myApp');

myApp.factory('travelersFactory', function($http, $cookies){
  var factory = {};
  var travelers = [];
  var cityInfo = {};

  factory.getTravelersPlaces = function(user, callback){
    console.log('this is factory data:', user);
    $http.get('/places/'+user)
      .success(function(data){
        places = data;
        console.log(places);
        callback(places);
      });
  };

  factory.create = function(info, successCallback, errorCallback){
    // console.log(info);
    $http.post('/travelers', info)
      .success(function(output){
        if(output.error_message){
          return errorCallback([output.error_message]);
        }
        travelers.push(output);
        console.log(travelers[0]);
        successCallback(travelers[0]);
      })
      .catch(function(error){
        errorCallback(["Please choose another username!"]);
      })
  };

  // factory.delete = function(callback){
  //   $http.post('/traveler/remove', traveler).then(function(output){
  //     travelers.splice(travelers.indexOf(traveler),1);
  //   })
  // };

  factory.aboutLocation = function(input, callback){
    if(input.value){
      var location = input.value;
      var locationSplit = location.split(",");
      locationCity = locationSplit[0];

      var url ="https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles="+locationCity+"&format=json";

      $http.get(url, true).success(function(data){
        cityInfo = data;
        callback(cityInfo);
      });
    }
  }

  factory.getInfo = function(){
      return cityInfo;
  }
  //   function processRequest(e) {
  //     console.log('processRequest');
  //     if ($http.readyState == 4 && $http.status == 200){
  //     // var response = JSON.parse(xhr.responseText);
  //     console.log('$http.responseText');
  //     }
  //   }
  //   $http.onreadystatechange = processRequest;
  // };

  return factory;
});
