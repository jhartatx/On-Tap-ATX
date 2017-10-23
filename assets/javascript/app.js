var infowindow;
var map;

function initMap() {
	var austin = {lat: 30.2672, lng: -97.7431};
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12,
	  center: austin
	});
	var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	google.maps.event.addListener(map, 'zoom_changed', function() {
	   if (this.getZoom() < 12 ) {
            // Change max/min zoom here
            this.setZoom(12);
        }
	});

	var markers = [];

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);

	var request = {
	    location: austin,
	    radius: '10000',
	    types: ['bar', 'restaurant', 'night_club']
	};

	
	searchBox.addListener('places_changed', function() {
		var places = searchBox.getPlaces();

		request.keyword = places;

		service.nearbySearch(request, callback);

		if (places.length == 0) {
			return;
		}
	});

	service.nearbySearch(request, callback);
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
