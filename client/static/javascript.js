// Logic for Geolocation for CheckIn function
function success(position) {
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcontainer';
  mapcanvas.style.height = '300px';
  mapcanvas.style.width = '560px';

  document.querySelector('article').appendChild(mapcanvas);

  var geocoder = new google.maps.Geocoder;
  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var currentLat = parseFloat(position.coords.latitude.toFixed(1));
  var currentLng =  parseFloat(position.coords.longitude.toFixed(1));
  console.log(currentLat, currentLng);

  // console.log(parseFloat(currentLng.toFixed(1)));

  var city;
  var country;

  geocoder.geocode({'location': coords}, function(results, status) {
    console.log(results);
    var alldata = results[2].address_components;
    city = alldata[0].long_name
    country = alldata[3].long_name;
    placeId = results[2].place_id
    console.log(city, country, placeId);
    document.getElementById("myCity").value = city;
    document.getElementById("myCountry").value = country;
    document.getElementById("myPlaceID").value = placeId;
  });

  document.getElementById("myLat").value = currentLat;
  document.getElementById("myLng").value = currentLng;

  var options = {
    zoom: 15,
    center: coords,
    mapTypeControl: false,
    navigationControlOptions: {
    	style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

  var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });
}

$("button").on("click", function(){
  console.log('kello');
//   navigator.geolocation.getCurrentPosition(success);
// } else {
//   error('Geo Location is not supported');
}
