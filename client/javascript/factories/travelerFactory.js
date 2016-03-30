console.log('made it to factory');

var myApp = angular.module('myApp');

myApp.factory('travelersFactory', function($http){
  var factory = {};
  var travelers = [];

  factory.getTraveler = function(callback){
    $http.get('/travelers').success(function(output) {
      travelers = output;
      callback(travelers);
    })
  }
  factory.create = function(info, callback){
    console.log(travelers);
    $http.post('/travelers', info).success(function(output){
      console.log(output);
      console.log(travelers);
      travelers.push(output);
      callback(travelers);
    })
  }
  factory.delete = function(callback){
    $http.post('/traveler/remove', traveler).then(function(output){
      travelers.splice(travelers.indexOf(traveler),1);
    })
  }
  return factory;
});
