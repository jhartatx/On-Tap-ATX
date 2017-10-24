var brewPlaces = [
{"geometry":{"location":{"lat":30.2209082,"lng":-97.66106919999999},"viewport":{"south":30.2193703697085,"west":-97.66265768029155,"north":30.2220683302915,"east":-97.65995971970852}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"556c99866bb50706d8af09d7343b96202d84f808","name":"Live Oak Brewing Company","opening_hours":{"open_now":true,"weekday_text":[]},"photos":[{"height":3088,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/108073720471808871988/photos\">Michael Villere</a>"],"width":4160}],"place_id":"ChIJw3GMxCy0RIYRoX1rWtORKkQ","price_level":2,"rating":4.6,"reference":"CmRRAAAAvtb9H0BZtiyXEOuKWP7Co593Q8vDkVpIp8_JUZxpXVdHELW0w4VaffAs12ZQbT79hbocARfKXRefRUu2kKO7Y_U6ZvlhmfO3aB2bFXR2bgx6JAQ1dPvG9s3e0r2a6JVHEhD4F1MqBDk-7NMTZyslolPFGhRuRi_zA8tKS8dFNpieHEri6YQaew","scope":"GOOGLE","types":["food","point_of_interest","establishment"],"vicinity":"1615 Crozier Lane, Del Valle","html_attributions":[]},
{"geometry":{"location":{"lat":30.11326779999999,"lng":-98.41281830000003},"viewport":{"south":30.11181861970849,"west":-98.41415728029153,"north":30.11451658029149,"east":-98.41145931970851}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"564c3ce9f5e4b7036ff50e2a9c19b15b35bcd682","name":"Real Ale Brewing Company","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":3024,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/100975007382570589407/photos\">Mark Caraway</a>"],"width":4032}],"place_id":"ChIJNf9MCCR3W4YRrS_YlP4rzY4","rating":4.7,"reference":"CmRSAAAAPzSpZA3hfwow4ZZbMU2a8aCnquX99msAn2LGgl8dDAZ2Y1thlVS3eF8awRMO1yFlZZS1zhdcNDOUBmO8w9Cy_V3QGAB9GV3w9A3fhQwgHaO-R0cHLmvI7p1pY3P4RmHFEhCE8e8l9Gziudz7B2CzYkbhGhRVVHkEHmhQLTEeFXPwtOmX3lJTZQ","scope":"GOOGLE","types":["bar","food","point_of_interest","establishment"],"vicinity":"231 San Saba Court, Blanco","html_attributions":[]},
{"geometry":{"location":{"lat":30.3795751,"lng":-97.72984810000003},"viewport":{"south":30.3784259197085,"west":-97.73106528029155,"north":30.3811238802915,"east":-97.72836731970847}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"4bf2a96a5117154142e2b71357fa23bffa13591c","name":"Austin Beerworks","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":3024,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/110262247710266617433/photos\">jose arroligas</a>"],"width":4032}],"place_id":"ChIJnVSeApDLRIYR2xlVAQPxhlQ","rating":4.6,"reference":"CmRRAAAA6osrUmQCNuLmIzEgiDvNK8gmALuKbpjkrh3ksixeHQwhuG_ff5AU_M3-tpTq5LvdYixPwszyPvLhQ-JcuKVwwfrrsVe1hCvj8VwOt6HZ1kG2Zbga47mMLt6PifHdkmB7EhDiQZuqeyjNZDf-ncC5KZyBGhRGkh-LAcWMWbJNfyq2eqBXdX7zhQ","scope":"GOOGLE","types":["food","point_of_interest","establishment"],"vicinity":"3001 Industrial Terrace, Austin","html_attributions":[]},
{"geometry":{"location":{"lat":30.2306807,"lng":-97.9992469},"viewport":{"south":30.2293317197085,"west":-98.00059588029148,"north":30.2320296802915,"east":-97.99789791970846}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"91258f01e4b92e8d66da51f62d071553fdebd04b","name":"Jester King Brewery","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":3024,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/113293382678406034389/photos\">Elizabeth Guilbeau</a>"],"width":4032}],"place_id":"ChIJkexlLlRGW4YRCXbXqNo7G_8","rating":4.6,"reference":"CmRSAAAAYspmBK6PZSW11iSszftmO7WCxHzZv5vksn2pXfJQVCZTAt8CXBUUJsl2yeO66mCtFunyk0Tb9GsFCcpqFkcIZ8iLA-KMF9MyNIXPPyt4NiOKzjYsPtob5_0xfeZHndIQEhBq4HaVBx1QOsyKHsS_CAm4GhQDo_BaJrzCRwAzp0yjuf47r7YriQ","scope":"GOOGLE","types":["bar","food","point_of_interest","establishment"],"vicinity":"13187 Fitzhugh Road, Austin","html_attributions":[]},
{"geometry":{"location":{"lat":30.2545683,"lng":-97.71693779999998},"viewport":{"south":30.2531600697085,"west":-97.71831493029151,"north":30.2558580302915,"east":-97.71561696970849}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"a817f8d5faa7629751380c9d3b3c8a1884cec38a","name":"Blue Owl Brewing","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":2268,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/109181555079909994129/photos\">John Anderson</a>"],"width":4032}],"place_id":"ChIJ0T8L0cq1RIYR58uqqKCawQk","rating":4.5,"reference":"CmRRAAAAkJ36AMhOlQ42Udj22XAtWqC9z8HAxUiK2eQRn_uR7mPKcAmEUcx6R3NCn8cydNgmkyXIPx7AGHYndp_6egx3LQTuDTP-srp1-fD19byF689yA6_ZBupe85B4XVDFLSCoEhCVy23M2OtlIIFHIdh7gNeLGhTw1ORphTopBjMa0-PIpKnO9NxWOg","scope":"GOOGLE","types":["food","point_of_interest","establishment"],"vicinity":"2400 East Cesar Chavez Street #300, Austin","html_attributions":[]},
{"geometry":{"location":{"lat":30.2174538,"lng":-97.76106299999998},"viewport":{"south":30.21610481970851,"west":-97.76241198029152,"north":30.2188027802915,"east":-97.7597140197085}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"534324b32990f9504025c02d4df63dd3914b6e80","name":"St. Elmo Brewing Company","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":552,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/109765039658661144024/photos\">St. Elmo Brewing Company</a>"],"width":552}],"place_id":"ChIJjyP9KZi0RIYRSFzNczBDLXM","price_level":1,"rating":4.9,"reference":"CmRRAAAAnzOCXMvlOEonkcympd_HLkpuZoqXqQHT5dTcl5O2KL1pbMC41VKDb7NFQHZN8YoCXNcZbCtwhtAXH8okvINURPiCpDo4qp7V2RyvzYCIw9P4-MrCj8kSuGnAvHuRjN90EhCwYo01swqJC01tpoVTUE5BGhQ4ft9GeTHkOErMPaNY8OccAPv9DA","scope":"GOOGLE","types":["food","point_of_interest","establishment"],"vicinity":"440 East Saint Elmo Road G-2, Austin","html_attributions":[]},
{"geometry":{"location":{"lat":30.2111852,"lng":-97.73607379999999},"viewport":{"south":30.21012361970849,"west":-97.73803293029152,"north":30.21282158029149,"east":-97.7353349697085}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"e816eee3be76d47b3176e6e5c8dc7bb84d3ec0b2","name":"Independence Brewing Co.","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":3024,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/109656680904986875881/photos\">Matthew Crowley</a>"],"width":4032}],"place_id":"ChIJr_5rVnm0RIYRZ4remai1ztE","price_level":1,"rating":4.4,"reference":"CmRSAAAASzI5ZPQv-GqSCEDOtICkob2ck9BiHINqjIHQpTeEHLp6xIXj7CUYnN_bBPBH5c4JtY8rg51lITPDC9GF4KKA27_m8zBC79BpgGCDxOYhCA3wyQl7KSg6aY9qwMU8_gq0EhDWHjpHSm_tXpv8HW5Df6r5GhSVTLcmCQ03Xnz5fUT53tigMtABYQ","scope":"GOOGLE","types":["food","point_of_interest","establishment"],"vicinity":"3913 Todd Lane #607, Austin","html_attributions":[]},
{"geometry":{"location":{"lat":30.25844810000001,"lng":-97.71188510000002},"viewport":{"south":30.2570120197085,"west":-97.71363633029148,"north":30.2597099802915,"east":-97.71093836970851}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"329632e4ae6eb8971a5021f7fd9c50d06e675435","name":"Hops and Grain Brewing","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":3120,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/117469447597888907446/photos\">max gruber</a>"],"width":4160}],"place_id":"ChIJTzFOTcy1RIYRPd-9rbG7uH4","price_level":1,"rating":4.5,"reference":"CmRRAAAAo2lkuMnhEu5WvP-NcUOf0bwYn3_-2osOpil_59Dm18dQMt6-EPFxJgx0eOc0iE_bZ7i96MhnwlZPlqpVNWrHsJR7r27TfR7QvK9ASipQq20rXFawVk7fj83iCO44Ywm9EhBusICffCYWZMO108Xf5XrQGhSkDyNYvZ3E8n86ZGQjuDkx8HspAQ","scope":"GOOGLE","types":["cafe","bar","food","store","point_of_interest","establishment"],"vicinity":"507 Calles Street #101, Austin","html_attributions":[]},
{"geometry":{"location":{"lat":30.262509,"lng":-97.69600000000003},"viewport":{"south":30.2614383197085,"west":-97.69792798029152,"north":30.2641362802915,"east":-97.6952300197085}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"c276b43d9426fa059fd57dade9a087659fed409f","name":"Friends & Allies Brewing Company","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":3264,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/114123417472812075943/photos\">Kyle Bickford</a>"],"width":1836}],"place_id":"ChIJMduD23i2RIYRKvQE7KJ_Lqo","rating":4.7,"reference":"CmRSAAAA_d1EZMR2hAchiR2w21rKMKb9H7aNeLDTVVrg3hdEnEEExIf69ykw7zvPEN2FHdITe_4DRPABAKIlKsxi7iwjO-UBCBvFflcVwr0juVj4Wq9aS-5Q2vJCNOa3OYLSxqyDEhCtHO_XvJ8FEgnH5kvULT_WGhROeqKPGU8k9vw_KHt1pX1wvdzMjg","scope":"GOOGLE","types":["food","point_of_interest","establishment"],"vicinity":"979 Springdale Road #124, Austin","html_attributions":[]},
{"geometry":{"location":{"lat":30.2229723,"lng":-97.77015189999997},"viewport":{"south":30.2219821697085,"west":-97.77125628029148,"north":30.2246801302915,"east":-97.76855831970852}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png","id":"8d8eaf593b0f2aadeaec2f385c8175fcc2c6b4e2","name":"(512) Brewing Company","opening_hours":{"open_now":false,"weekday_text":[]},"photos":[{"height":2368,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/107629499345169497431/photos\">Joseph Schaffer</a>"],"width":3200}],"place_id":"ChIJ236XXrm0RIYRHL-NPzrdEmw","rating":4.6,"reference":"CmRRAAAABdv_WzpVlO0JoLnz2OMZRwWco8VcibBbeDpJ3qtDA7Zr-7zlFwZPK8nfe9MxEDoZ6BlTuKSXw841n736KlToe0cy2fVFyf_W8Vo0rT6HeK_wNG8ne2R3eGlMrUlSCZ-_EhAbyXI9QcfS1GNooPeM6mTkGhSIPNXaPoB2yAfnjcDDlTmueE947Q","scope":"GOOGLE","types":["food","point_of_interest","establishment"],"vicinity":"407 Radam Lane, Austin","html_attributions":[]}
];

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


var infowindow;
var map;
var markers = [];

var placeObj;

var service;
var austin;

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

	infowindow = new google.maps.InfoWindow();
	service = new google.maps.places.PlacesService(map);

	searchAll();
}

function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
	  for (var i = 0; i < results.length; i++) {
	    createMarker(results[i]);
	  }
	}
}

function searchAll(){
	var request = {
	    location: austin,
	    radius: '150000',
	    keyword: "brewery"
	};

	service.nearbySearch(request, callback);
}

function pinBrewers(name){
	for(i in brewPlaces){
		console.log(brewPlaces[i].name);
		if(brewPlaces[i].name.toLowerCase().includes(name)){
			var id = brewPlaces[i].place_id;
			var request = {placeId: id};
			var service = new google.maps.places.PlacesService(map);

			service.getDetails(request, callback);
			function callback(place, status) {
				placeObj = place;
				$("#brewHours").html("");
				$("#infoTitle").html(placeObj.name);
				$("#brewRate").html(placeObj.rating + "<hr>");
				$("#brewAddr").html(placeObj.formatted_address + "<hr>");
				for(i in placeObj.opening_hours.weekday_text){
					$("#brewHours").append(placeObj.opening_hours.weekday_text[i] + "<br>");
				}
				$("#brewHours").append("<hr>");
				$("#brewPhone").html(placeObj.formatted_phone_number + "<hr>");
				$("#brewSite").html(placeObj.website);
				if (status == google.maps.places.PlacesServiceStatus.OK) {
				    createMarker(place);
				}
				else{
					console.log(status);
				}
			}
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

	markers.push(marker);
}

function clearMarkers(){
	markers.forEach(function(marker) {
		marker.setMap(null);
	});
	markers = [];
}



$("#brewTab").click(function(){
	clearMarkers();
	for(i in brewPlaces){
		createMarker(brewPlaces[i]);
	}
});

$("#allTab").click(function(){
	searchAll();
})

$(".breweryLi").click(function(){
	var name = $(this).text().trim().toLowerCase();
	console.log(placeObj);
	pinBrewers(name);
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

