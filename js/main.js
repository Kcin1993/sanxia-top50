//google map api
//Basic informatio of sanxia mp
//1. (24.942946, 121.368398),
//2. zoom:14;



var locations = [
  ["闇黑工廠",     24.944030, 121.374654],
  ["艾波索",    24.943920, 121.373774]
];

function initialize() {
	var infowindow = new google.maps.InfoWindow();
	var mapCanvas = document.getElementById('googleMap');
	var mapOptions = {
		center: new google.maps.LatLng(24.942946, 121.368398),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	  
	function placeMarker( loc ) {
	  var latLng = new google.maps.LatLng( loc[1], loc[2]);
	  var marker = new google.maps.Marker({
	    position : latLng,
	    map      : map
	  });
	  google.maps.event.addListener(marker, 'click', function(){
	      infowindow.close(); // Close previously opened infowindow
	      infowindow.setContent( "<div id='infowindow'>"+ loc[0] +"</div>");
	      infowindow.open(map, marker);
	  });
	}

	for(var i=0; i<locations.length; i++) {
	  placeMarker( locations[i] );
	} 
}//initialize end

google.maps.event.addDomListener(window, 'load', initialize);




