var infowindow;
var map;

function initMap() {
    var austin = { lat: 30.2672, lng: -97.7431 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: austin
    });
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    google.maps.event.addListener(map, 'zoom_changed', function() {
        if (this.getZoom() < 12) {
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
            console.log(i + " " + JSON.stringify(results[i]));
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
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBQmLKzWu_zmVmo2bjEkQRab3RT35evkR4",
    authDomain: "project-1-4fb0a.firebaseapp.com",
    databaseURL: "https://project-1-4fb0a.firebaseio.com",
    projectId: "project-1-4fb0a",
    storageBucket: "project-1-4fb0a.appspot.com",
    messagingSenderId: "686764555414"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Create a variable to reference the database.
var database = firebase.database();

// -----------------------------

// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated
// every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#connected-viewers").text("Online Now: " + snap.numChildren());
  $("#total-viewers").text("Total Views: " + snap.numChildren());

});

