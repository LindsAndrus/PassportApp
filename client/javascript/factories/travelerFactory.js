console.log('made it to factory');

myApp.factory('travelersFactory', function(){
  var travelersFactory = {};
  var travelers = [];
  factory.getTraveler = function(callback){
    $http.get('/travelers').then(function(output) {
      travelers = output;
      callback(travelers);
    });
  };
  factory.create = function(info, callback){
    $http.post('/travelers', info).success(function(output){
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
