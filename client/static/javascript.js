function success(position) {
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcontainer';
  mapcanvas.style.height = '300px';
  mapcanvas.style.width = '560px';

  document.querySelector('article').appendChild(mapcanvas);

  var geocoder = new google.maps.Geocoder;
  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var currentLat = position.coords.latitude;
  var currentLng =  position.coords.longitude;
  console.log(currentLat, currentLng);

  var city;
  var country;

  geocoder.geocode({'location': coords}, function(results, status) {
    var alldata = results[1].address_components;
    city = alldata[1].long_name
    country = alldata[4].long_name;
    console.log(city, country);
    document.getElementById("myCity").value = city;
    document.getElementById("myCountry").value = country;
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

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not supported');
}

