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
      .then(function(output){
        console.log(output.data);
        travelers.push(output.data);
        successCallback(travelers);
      })
      .catch(function(error){
        console.log('in error factory')
        errorCallback(error.data);
      })
  };
  
  factory.delete = function(callback){
    $http.post('/traveler/remove', traveler).then(function(output){
      travelers.splice(travelers.indexOf(traveler),1);
    })
  }
  return factory;
});
