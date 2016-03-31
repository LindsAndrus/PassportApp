console.log('made it to places factory');

myApp.factory('placesFactory', function($http){
  var factory = {};
  var places = [];
  factory.current = function(info, successCallback, errorCallback){
    console.log('made it to factory')
    $http.post('/currPlace', info)
    .then(function(output){
      places = output;
      successCallback(places);
    });
  };
  // factory.create = function(info, callback){
  //   $http.post('/places/new', info).success(function(output){
  //     places.push(output);
  //     callback(places);
  //   });
  // };
  // factory.delete = function(callback){
  //   $http.post('/place/remove', places).then(function(output){
  //     places.splice(places.indexOf(place),1);
  //   })
  // }
  return factory;
});
