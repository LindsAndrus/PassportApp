<<<<<<< HEAD
// function success(position) {
//   var mapcanvas = document.createElement('div');
//   mapcanvas.id = 'mapcontainer';
//   mapcanvas.style.height = '300px';
//   mapcanvas.style.width = '560px';
//
//   document.querySelector('article').appendChild(mapcanvas);
//
//   var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//   var currentLat = position.coords.latitude;
//   var currentLng =  position.coords.longitude;
//   console.log(currentLat, currentLng);
//
//   var options = {
//     zoom: 15,
//     center: coords,
//     mapTypeControl: false,
//     navigationControlOptions: {
//     	style: google.maps.NavigationControlStyle.SMALL
//     },
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map = new google.maps.Map(document.getElementById("mapcontainer"), options);
//
//   var marker = new google.maps.Marker({
//       position: coords,
//       map: map,
//       title:"You are here!"
//   });
// }
//
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(success);
// } else {
//   error('Geo Location is not supported');
// }

var mapper;
function initMap() {
  mapper = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

// $(document).ready(function(){
//   initMap();
// })
