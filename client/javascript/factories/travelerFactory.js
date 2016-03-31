console.log('made it to traveler factory');

var myApp = angular.module('myApp');

myApp.factory('travelersFactory', function($http, $cookies ){
  var factory = {};
  var travelers = [];

  // factory.getTraveler = function(callback){
  //     callback(travelers);
  // };

  factory.create = function(info, successCallback, errorCallback){
    // console.log(info);
    $http.post('/travelers', info)
      .success(function(output){
        if(output.error_message){
          return errorCallback([output.error_message]);
        }
        travelers.push(output);
        console.log(travelers);
        successCallback(travelers[0]);
      })
      .catch(function(error){
        errorCallback(["Please choose another username!"]);
      })
  };

  factory.delete = function(callback){
    $http.post('/traveler/remove', traveler).then(function(output){
      travelers.splice(travelers.indexOf(traveler),1);
    })
  };

  factory.aboutLocation = function(input,callback){
    // console.log(input.value);
    if(input.value){
      var location = input.value.replace("," , "").replace(/\s+/g, "%20");
      var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+input.value+"&key=AIzaSyB5DCeCky-akqzPNWNF8lCVTnO1BTMO7r8";
      //Ajax request to google server
      $http.get(url, true).then(function(data){
        var placeID = data.data.results[0].place_id;
        console.log(data);
        if(placeID){
          url = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+ placeID +"&key=AIzaSyB5DCeCky-akqzPNWNF8lCVTnO1BTMO7r8";
          //Ajax request to google server
          $http.get(url, true).then(function(detailData){
            // console.log(detailData);
            callback(data,detailData);
          });
        }
      })
    }

    function processRequest(e) {
      console.log('processRequest');
      if ($http.readyState == 4 && $http.status == 200){
      // var response = JSON.parse(xhr.responseText);
      console.log('$http.responseText');
      }
    }
    $http.onreadystatechange = processRequest;
    };

  return factory;
});
