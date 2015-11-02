// Google map
jQuery(function($) {
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
                    
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    map.setTilt(45);
        
    var markers = [
        ["福美軒金牛角", 24.935443, 121.371027],
        ["榕樹下鮮肉包",24.932174, 121.374947],
    ];
                        
    var infoWindowContent = [
        [
        '<div class="info_content">' +
        '<h3>福美軒金牛角</h3>' +
        '<p>特色：三峽金牛角創始店</p>' + 
        '<p>推薦人：Shock! 三峽客</p>' +
        '<p>探索：新北市三峽區信義街25號</p>' + 
        '</div>'
        ],
        [
        '<div class="info_content">' +
        '<h3>榕樹下鮮肉包</h3>' +
        '<p>探索：台北縣三峽鎮中華路3巷11之3號</p>' +
        '<p>推薦人：Shock! 三峽客</p>' +
        '</div>'
        ]
    ];
        
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        map.fitBounds(bounds);
    }

    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}



//scroll 
$("document").ready(function() {      
    $('.scrolldown').click(function(){
      $('html, body').animate({
        scrollTop: $("#googleMap").offset().top
      }, 1500);    
     });
    $('.scrolltop').click(function(){
      $('html, body').animate({
        scrollTop: $("#header_wrapper").offset().top
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
