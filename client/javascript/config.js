console.log("made it to front-end config");
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
  $routeProvider
  .when('/dashboard',{
    templateUrl: 'static/dashboard.html',
    // controller: '***UPDATED WITH FRONT-END CONTROLLER NAME***'
  })
  .when('/',{
    templateUrl: 'static/login.html',
    controller: 'travelers',
  })
  // .when('/***UPDATE ROUTES***',{
  //   templateUrl: 'static/***UPDATE WITH PARTIAL VIEW NAME***.html',
  //   controller: '***UPDATED WITH FRONT-END CONTROLLER NAME***'
  // })
  .otherwise({
    redirectTo: '/'
  });
});
