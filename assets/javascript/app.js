//google places api return for our top 10 breweries
var brews = [
 {"geometry": {
        "location": {
            "lat":30.2209082,
            "lng":-97.66106919999999
        }
    },
	"name": "HefeWeizen", 
	"place_id":"ChIJw3GMxCy0RIYRoX1rWtORKkQ",
  }, 

   {"geometry": {
        "location": {
            "lat":30.11326779999999,
            "lng":-98.41281830000003
        }
    },
	"name": "Firemans Four", 
	"place_id":"ChIJNf9MCCR3W4YRrS_YlP4rzY4",
  }, 
  {"geometry": {
        "location": {
            "lat":30.3795751,
            "lng":-97.72984810000003
        }
    },
	"name": "Fire Eagle IPA", 
	"place_id":"ChIJnVSeApDLRIYR2xlVAQPxhlQ",
  }, 
 
{"geometry": {
        "location": {
            "lat":30.2306807,
            "lng":-97.9992469
        }
    },
	"name": "Black Metal Imperial Stout", 
	"place_id":"ChIJkexlLlRGW4YRCXbXqNo7G_8",
  }, 
  {"geometry": {
        "location": {
           "lat":30.25844810000001,
           "lng":-97.71188510000002
        }
    },
	"name": "The One They Call Zoe Lager", 
	"place_id":"ChIJTzFOTcy1RIYRPd-9rbG7uH4",
  }, 

 {"geometry": {
        "location": {
           "lat":30.2111852,
           "lng":-97.73607379999999
        }
    },
	"name": "Convict Hill Oatmeal Stout", 
	"place_id":"ChIJr_5rVnm0RIYRZ4remai1ztE",
  }, 

   {"geometry": {
        "location": {
           "lat":30.2229723,
           "lng":-97.77015189999997
        }
    },
	"name": "Pecan Porter", 
	"place_id":"ChIJ236XXrm0RIYRHL-NPzrdEmw",
  }, 

{"geometry": {
        "location": {
           "lat":30.40546,
           "lng":-97.87413300000003
        }
    },
	"name": "Meta Modern Session IPA", 
	"place_id":"ChIJMbXMdmAxW4YRcBYizYsMcAw",
  }, 


{"geometry": {
        "location": {
           "lat":30.2247173,
           "lng":-97.9530823
        }
    },
	"name": "Thristy Goat Amber", 
	"place_id":"ChIJayB1n5tIW4YR7q_YExbO_QY",
  }, 

  {"geometry": {
        "location": {
          "lat":30.3825245,
          "lng":-97.7198803
        }
    },
	"name": "Triple B", 
	"place_id":"ChIJZeyxLY3LRIYRKseIgfEgTRc",
  }
];

var brewPlaces = [
{"geometry":{"location":{"lat":30.2209082,"lng":-97.66106919999999}},"name":"Live Oak Brewing Company","place_id":"ChIJw3GMxCy0RIYRoX1rWtORKkQ"},
{"geometry":{"location":{"lat":30.11326779999999,"lng":-98.41281830000003}},"name":"Real Ale Brewing Company","place_id":"ChIJNf9MCCR3W4YRrS_YlP4rzY4"},
{"geometry":{"location":{"lat":30.3795751,"lng":-97.72984810000003}},"name":"Austin Beerworks","place_id":"ChIJnVSeApDLRIYR2xlVAQPxhlQ"},
{"geometry":{"location":{"lat":30.2306807,"lng":-97.9992469}},"name":"Jester King Brewery","place_id":"ChIJkexlLlRGW4YRCXbXqNo7G_8"},
{"geometry":{"location":{"lat":30.2545683,"lng":-97.71693779999998}},"name":"Blue Owl Brewing","place_id":"ChIJ0T8L0cq1RIYR58uqqKCawQk"},
{"geometry":{"location":{"lat":30.2174538,"lng":-97.76106299999998}},"name":"St. Elmo Brewing Company","place_id":"ChIJjyP9KZi0RIYRSFzNczBDLXM"},
{"geometry":{"location":{"lat":30.2111852,"lng":-97.73607379999999}},"name":"Independence Brewing Co.","place_id":"ChIJr_5rVnm0RIYRZ4remai1ztE"},
{"geometry":{"location":{"lat":30.25844810000001,"lng":-97.71188510000002}},"name":"Hops and Grain Brewing","place_id":"ChIJTzFOTcy1RIYRPd-9rbG7uH4"},
{"geometry":{"location":{"lat":30.262509,"lng":-97.69600000000003}},"name":"Friends & Allies Brewing Company","place_id":"ChIJMduD23i2RIYRKvQE7KJ_Lqo"},
{"geometry":{"location":{"lat":30.2229723,"lng":-97.77015189999997}},"name":"(512) Brewing Company","place_id":"ChIJ236XXrm0RIYRHL-NPzrdEmw"}];

var beerFacts = ["At any given time, 0.7% of the world is drunk. So, 50 million people right now are drunk.",
 "The strongest beer in the world has a 67.5% alcohol content. (Its called: Snake Venom).",
 "Fried beer won Most Creative Fried Food at the 2010 Texas State Fair.",
 "A barrel contains 31 Gallons of beer. A keg is actually 15.5 Gallons or a half-barrel.",
 "Beer cans were first introduced in 1935.",
 "12-ounces of a typical American pale lager has fewer calories than 2 percent milk or apple juice.",
 "The United States is the second largest hop producer. (Germany is first).",
 "Abraham Lincoln taxed beer to help pay for the Civil War.",
 "Shiner Beer made by Spoetzl Brewery is the oldest active brewery in Texas, founded in 1909 in Shiner, TX.",
 "The first brewery in Texas was Alamo Brewing Association in San Antonio, founded in 1888.",
 "Beer is the oldest and most widely consumed alcoholic drink in the world.",
 "Space Barley is the most expensive beer in the world. The barley used to make the beer was kept in the international space station for 5 months! (six pack is $110)",
 "Bud Light is the third most consumed beer in the world and the most consumed beer in the USA.",
 "New Hampshire consumes the most alcohol in the United States 4.72 Gallons per capita!",
 "Homebrewing beer became legal in all 50 states in 2013 - Mississippi was the last state to legalize."];


function loopThroughBeerFacts(beerFacts) {
    for (var i = 0; i < beerFacts.length; i++) {

        (function (i) {
            setTimeout(function () {
                $("#factsDisplay").html(beerFacts[i]);
            }, 10000 * i);
        }       )(i);
    };
}
loopThroughBeerFacts(beerFacts);


//query openweathermap API

var APIKey = "2bbb96eb5c555bde040963058d6373c3";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=zip=78701,us&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        console.log(response);

        // Transfer content to HTML
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F): " + response.main.temp);

      });


//global init of map and markers for holding google api objects

var map;
var markers = [];
var places = [];

//holder for google places api return
var placeObj;

//more global variables for maps and google services
var service;
var austin;
var geocoder;

var redCon = "./assets/images/red-dot.png";
var greenCon = "./assets/images/green-dot.png";

//initialize map with no pins, center map on austin to start
function initMap() {
	austin = {lat: 30.2672, lng: -97.7431};
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 10,
	  center: austin
	});

	google.maps.event.addListener(map, 'zoom_changed', function() {
	   if (this.getZoom() < 4 ) {
            this.setZoom(4);
        }
    });

	service = new google.maps.places.PlacesService(map);
}


function searchAll(zip){
	clearMarkers();
	var lat = '';
    var lng = '';
    var address = zip;
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, callback);
    function callback(results, status) {
      	if (status == google.maps.GeocoderStatus.OK) {
        	lat = results[0].geometry.location.lat();
        	lng = results[0].geometry.location.lng();

			var request = {
			    location: {"lat": lat, "lng": lng},
			    radius: '150000',
			    keyword: "brewery"
			};

			places = [];

			service.nearbySearch(request, callback);
			function callback(results, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					for (var i = 0; i < results.length; i++) {
						places.push(results[i]);
				    	createMarker(results[i]);
					}
					initLists(places, "#searchList");
				}
			}

      	} else {
        	console.log("Geocode was not successful for the following reason: " + status);
      	}
    }
}

function pinBrewers(name){
	var id = name;
	//console.log(markers);

	var request = {placeId: id};
	var service = new google.maps.places.PlacesService(map);

	for(i in markers){
		if(markers[i].get("id") === id){
			highlightMark(markers[i]);
		}
	}


	service.getDetails(request, callback);
	function callback(place, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			placeObj = place;

			//console.log(placeObj);
			$("#brewHours").html("");

			$("#infoTitle").html(placeObj.name);

			if(placeObj.rating){
				$("#brewRate").html("Overall Rating: " + placeObj.rating + "<hr>");
			}

			if(placeObj.formatted_address){
				$("#brewAddr").html("Address: " + "<br>" + placeObj.formatted_address + "<hr>");
			}

			if(placeObj.opening_hours){
				for(i in placeObj.opening_hours.weekday_text){
					$("#brewHours").append(placeObj.opening_hours.weekday_text[i] + "<br>");
				}
				$("#brewHours").append("<hr>");
			}

			if(placeObj.formatted_phone_number){
				$("#brewPhone").html("Phone Number: " + placeObj.formatted_phone_number + "<hr>");
			}

			if(placeObj.website){
				$("#brewSite").html("Website: " + "<br><a href=" + placeObj.website + " target='_blank'>" + placeObj.website + "</a>");
			}
		}
		else{
			console.log(status);
		}
	}
}

function createMarker(place) {
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		icon: {
			url: redCon,
			scaledSize: new google.maps.Size(32,32)
		},
	    map: map,
	    position: place.geometry.location
	});

	marker.set("id", place.place_id);

	google.maps.event.addListener(marker, 'click', function() {
		var but = marker.get("id");
		pinBrewers(but);
		highlightMark(marker);
	});

	markers.push(marker);
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < markers.length; i++) {
		bounds.extend(markers[i].getPosition());
	}

	map.fitBounds(bounds);
}

function highlightMark(marker){
	resetMarkers();
	marker.setZIndex(1000);
	marker.setIcon({
		url: greenCon,
		scaledSize: new google.maps.Size(36,36)
	});
}

function resetMarkers(){
	for(i in markers){
		markers[i].setZIndex(10);
		markers[i].setIcon({
			url: redCon,
			scaledSize: new google.maps.Size(32,32)
		});
	}
}

function clearMarkers(){
	markers.forEach(function(marker) {
		marker.setMap(null);
	});
	markers = [];
}

function initLists(list, div){
	for(i in list){
		var li = $("<li />");
		var btn = $("<input/>", {
			type: "button",
			class: "btn breweryLi",
			id: list[i].place_id,
			value: list[i].name,
			on: {
				click: function(){
					pinBrewers($(this)[0].id);
				}
			}
		});
		$(div).append(li.html(btn));
	}
}


$( document ).ready(function(){
	initLists(brewPlaces, "#breweries");
	initLists(brews, "#beerL");

	$("#beerTab").click(function(){
		clearMarkers();
		for(i in brews){
			createMarker(brews[i]);
		}
	});

	$("#beerTab").click();

	$("#brewTab").click(function(){
		clearMarkers();
		for(i in brewPlaces){
			createMarker(brewPlaces[i]);
		}
	});

	$("#submit").click(function(event){
		event.preventDefault();
		$("#searchList").html("");
		var zipc = $("#zip").val().trim();
		searchAll(zipc);
	})
});




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

$('.parallax-window').parallax({imageSrc: 'assets/images/skyline2.jpg'});
