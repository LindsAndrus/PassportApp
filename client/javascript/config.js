console.log("made it to front-end config");
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider){
  $routeProvider
  .when('/dashboard',{
    templateUrl: 'static/dashboard.html',
    controller: 'travelers'
  })
  .when('/search',{
    templateUrl: 'static/place.html',
    controller: 'travelers'
  })
  .when('/',{
    templateUrl: 'static/login.html',
    controller: 'travelers'
  })
  // .when('/***UPDATE ROUTES***',{
  //   templateUrl: 'static/***UPDATE WITH PARTIAL VIEW NAME***.html',
  //   controller: '***UPDATED WITH FRONT-END CONTROLLER NAME***'
  // })
  .otherwise({
    redirectTo: '/'
  });
});
