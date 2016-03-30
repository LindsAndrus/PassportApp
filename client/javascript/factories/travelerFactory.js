console.log('made it to factory');

myApp.factory('travelersFactory', function($http){
  var factory = {};
  var travelers = [];
  factory.getTraveler = function(callback){
    $http.get('/travelers').then(function(output) {
      travelers = output;
      callback(travelers);
    });
  }
  factory.create = function(info, callback){
    // console.log(info);
    $http.post('/travelers', info).then(function(output){
      travelers.push(output);
      callback(travelers);
    });
  };
  factory.delete = function(callback){
    $http.post('/traveler/remove', traveler).then(function(output){
      travelers.splice(travelers.indexOf(traveler),1);
    })
  }
  return factory;
});
