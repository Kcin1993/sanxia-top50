// Fix mask scroll 
$(document).ready(function(){
  $(".header_toggle").click(function(){
    $(".header_toggle").toggleClass("move_top");
  });
});


//Scroll icon
$("document").ready(function() {      
    $('#down1').click(function(){
      $('html, body').animate({
        scrollTop: $("#report_wrapper").offset().top
      }, 1500);    
     });
    $('#down2').click(function(){
      $('html, body').animate({
        scrollTop: $("#dist_wrapper").offset().top
      }, 1500);    
     });
    $('#down3').click(function(){
      $('html, body').animate({
        scrollTop: $("#thanks_wrapper").offset().top
      }, 1500);    
     });
    $('#up1').click(function(){
      $('html, body').animate({
        scrollTop: $("#map_wrapper").offset().top
      }, 1500);    
     });
});


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
        mapTypeId: 'roadmap',
        disableDefaultUI: true //Remove controls
    };
                    
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    map.setTilt(45);
        
    var markers = [
        ['福美軒金牛角', 24.935443, 121.371027,'http://labs.google.com/ridefinder/images/mm_20_purple.png'],
        ['榕樹下鮮肉包',24.932174, 121.374947,'http://labs.google.com/ridefinder/images/mm_20_purple.png'],
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

