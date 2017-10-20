var infowindow;
var map;

function initMap() {
	var austin = {lat: 30.2672, lng: -97.7431};
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12,
	  center: austin
	});
	google.maps.event.addListener(map, 'zoom_changed', function() {
	   if (this.getZoom() < 12 ) {
            // Change max/min zoom here
            this.setZoom(12);
        }
	});

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);

	service.nearbySearch({
	    location: austin,
	    radius: '5000',
	    types: ['bar', 'restaurant', 'night_club']
	}, callback);
}

function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
	  for (var i = 0; i < results.length; i++) {
	  	console.log( i + " " + JSON.stringify(results[i]));
	    createMarker(results[i]);
	  }
	}
}

function createMarker(place) {
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
	  map: map,
	  position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.setContent(place.name);
	  infowindow.open(map, this);
	});
}



// Run the initialize function when the window has finished loading.
