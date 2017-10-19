function initMap() {
	var austin = {lat: 30.2672, lng: -97.7431};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: austin
	});
	var marker = new google.maps.Marker({
	  position: austin,
	  map: map
	});
}