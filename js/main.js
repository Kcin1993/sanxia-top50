// Google map
jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ["闇黑工廠", 24.944030, 121.374654],
        ["艾波索",24.943920, 121.373774],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        [
        '<div class="info_content">' +
        '<h3>闇黑工廠</h3>' +
        '<p>text</p>' + 
        '</div>'
        ],
        [
        '<div class="info_content">' +
        '<h3>艾波索</h3>' +
        '<p>text</p>' +
        '</div>'
        ]
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}



//scroll down
$("document").ready(function() {      
        
    $('.scrollmap, .scrolldown').click(function(){
      $('html, body').animate({
        scrollTop: $("#googleMap").offset().top
      }, 1500);    
     });
});


//google map api
//Basic information of sanxia map
//1. (24.942946, 121.368398),
//2. zoom:14;

// var locations = [
//   ["闇黑工廠",     24.944030, 121.374654],
//   ["艾波索",    24.943920, 121.373774],
//   ["test",    24.944120, 121.374074]
// ];

// function initialize() {
// 	var infowindow = new google.maps.InfoWindow();
// 	var mapCanvas = document.getElementById('googleMap');
// 	var mapOptions = {
// 		center: new google.maps.LatLng(24.942946, 121.368398),
// 		zoom: 15,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// 	}
// 	var map = new google.maps.Map(mapCanvas, mapOptions);
	  
// 	function placeMarker( loc ) {
// 	  var latLng = new google.maps.LatLng( loc[1], loc[2]);
// 	  var marker = new google.maps.Marker({
// 	    position : latLng,
// 	    map      : map
// 	  });
// 	  google.maps.event.addListener(marker, 'click', function(){
// 	      infowindow.close(); // Close previously opened infowindow
// 	      infowindow.setContent( "<div id='infowindow'>"+ loc[0] +"</div>");
// 	      infowindow.open(map, marker);
// 	  });
// 	}

// 	for(var i=0; i<locations.length; i++) {
// 	  placeMarker( locations[i] );
// 	} 
// }//initialize end

// google.maps.event.addDomListener(window, 'load', initialize);
