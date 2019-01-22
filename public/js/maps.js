// init modalMap
var giftMarker = null;
var giftInfo = {};

function modalMap() {
	// map options
	var options = {
		zoom: 10,
		center: {lat: 37.871834, lng: -122.271850}
	}

	// new map
	var mMap = new google.maps.Map(document.getElementById('modalMap'), options);
	var geocoder = new google.maps.Geocoder;

	// listen for click on here button
	$('#here').on('click', function() {
		var checkAddy = $('#addy').val();
		if (giftMarker == null && checkAddy !== '') {
			geocodeAddy();
		}

		$('.active').siblings('a').click();
	});

	// listen for 'enter' in address search bar
	$('#addy').keypress(function (e) {
		if (e.which == 13) {
			geocodeAddy();
		return false;
		}
	});

	// listen for click on map
	google.maps.event.addListener(mMap, 'click', function(event) {
		giftInfo.lat = event.latLng.lat();
		giftInfo.lng = event.latLng.lng();
		geocodeReverse(geocoder, mMap);
	});

	// add marker function
	function addMarker(props) {
		if (giftMarker != null) {
			giftMarker.setMap(null);
		 }

		giftMarker = new google.maps.Marker({
			position: props.coords,
			map: mMap
		});

	// check for content
		if (props.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: props.content
			});

			giftMarker.addListener('click', function() {
				infoWindow.open(mMap, giftMarker);
			});
		}
	}

	// geocode address
	function geocodeAddy() {
		var location = $('#addy').val();
		var urlget = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyB-ub707DTszbitlkznTcNRuqPGw0h0RNU';
		$.get(urlget, function(response) {
			giftInfo.lat = response.results[0].geometry.location.lat;
			giftInfo.lng = response.results[0].geometry.location.lng;
			addMarker({
					coords: {lat: giftInfo.lat, lng: giftInfo.lng},
					content: response.results[0].formatted_address
			});
		});
	}

	// reverse geocode
	function geocodeReverse(geocoder, mMap) {
        var latlng = {lat: giftInfo.lat, lng: giftInfo.lng};
        geocoder.geocode({'location': latlng}, function(results, status) {
			if (status === 'OK') {
					if (results[0]) {
						mMap.setZoom(11);
						addMarker({
							coords: {lat: giftInfo.lat, lng: giftInfo.lng},
							content: results[0].formatted_address
						});
					} else {
					window.alert('No results found');
					}
			} else {
					window.alert('Geocoder failed due to: ' + status);
			}
        });
      }
}


// main page map
function initMap() {
	// map options
	var options = {
		zoom: 9,
		center: {lat: 37.871834, lng: -122.271850}
	}

	// new map
	var map = new google.maps.Map(document.getElementById('map'), options);

	// array of markers
	var markers = [
		{
			coords: {lat: 37.793842, lng: -122.200720},
			content: '<h3>35th and Mac</h3>'
		},
		{
			coords: {lat: 37.871834, lng: -122.271850},
			content: '<h3>UCBE building</h3>'
		},
		{
			coords: {lat: 37.905569, lng: -122.066938}
		}
	];

	// loop through markers
	for (var i=0; i<markers.length; i++) {
		addMarker(markers[i]);
	}

	// add marker function
	function addMarker(props) {
		var marker = new google.maps.Marker({
			position: props.coords,
			map: map
		});
	// check for content
		if (props.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: props.content
			});

			marker.addListener('click', function() {
				infoWindow.open(map, marker);
			});
		}
	}
}