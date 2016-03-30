console.log('made it to factory');

var myApp = angular.module('myApp');

myApp.factory('travelersFactory', function($http){
  var factory = {};
  var travelers = [];
  // factory.getTraveler = function(callback){
  //   $http.get('/travelers').then(function(output) {
  //     travelers.push(output);
  //     callback(travelers);
  //   });
  // }
  factory.create = function(info, successCallback, errorCallback){
    // console.log(info);
    $http.post('/travelers', info)
      .success(function(output){
        if(output.error_message){
          return errorCallback([output.error_message]);
        }
        travelers.push(output);
        successCallback(travelers);
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
