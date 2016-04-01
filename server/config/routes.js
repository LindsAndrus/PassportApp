console.log('made it to server routes')
var Places = require('./../controllers/places.js');
var Travelers = require('./../controllers/travelers.js');

module.exports = function(app){
  app.get('/travelers', Travelers.index);
  // app.get('/places', Places.index);
  app.post('/place', Places.create);
  app.post('/travelers', Travelers.create);
  app.post('/currPlace', Places.current);
  // app.get('/***UPDATE NAME FOR PATH***/:id/edit', ***UPDATE VARIABLE***.edit);
  // app.post('/***UPDATE NAME FOR PATH***/:id', ***UPDATE VARIABLE***.update);
  // app.get('/***UPDATE NAME FOR PATH***/:id/destroy', ***UPDATE VARIABLE***.delete);
};
