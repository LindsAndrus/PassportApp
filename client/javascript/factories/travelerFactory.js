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
        // console.log(travelers);
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
  }
  return factory;
});
