console.log('made it to factory');

myApp.factory('placesFactory', function(){
  var factory = {};
  var places = [];
  factory.current = function(callback){
    $http.post('/currPlace').then(function(output) {
      places = output;
      callback(places);
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
