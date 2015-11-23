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
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        draggable: true,
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        }
        // disableDefaultUI: true 
    };
                    
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    map.setTilt(45);
        
    var markers = [
        ['福美軒金牛角', 24.935443, 121.371027,'mapimg/c.png'],
        ['榕樹下鮮肉包',24.932174, 121.374947,'mapimg/b.png'],
    ];
                        
    var infoWindowContent = [
        [
        '<div class="info_content">' +
        '<div class="title_wrapper"><img src="mapimg/1.png" class="title_img"><h3 class="info_title">福美軒金牛角</h3></div>' +
        '<p class="info_description" data-content="◆ ">特色：三峽金牛角創始店</p>' + 
        '<p class="info_description" data-content="◆ ">探索：新北市三峽區信義街25號</p>' + 
        '<p class="info_description" data-content="◆ ">相關資訊：<a href="http://goo.gl/U9CMLY">以堅持書寫三角湧代名詞</a></p>' + 
        '<a href="http://www.shockpaper.com/" class="info_link"><img src="people/shock.png" class="info_img">Shock！ 三峽客</a>' +
        '</div>'
        ],
        [
        '<div class="info_content">' +
        '<div class="title_wrapper"><img src="mapimg/2.png" class="title_img"><h3 class="info_title">榕樹下鮮肉包</h3></div>' +
        '<p class="info_description" data-content="◆ ">探索：台北縣三峽鎮中華路3巷11之3號</p>' + 
        '<p class="info_description" data-content="◆ ">相關資訊：<a href="http://goo.gl/ap2ZcH">【店鋪專欄】榕樹下鮮肉包</a></p>' +  
        '<a href="http://www.shockpaper.com/" class="info_link"><img src="people/shock.png" class="info_img">Shock！ 三峽客</a>' +
        '</div>'
        ],
    ];
        
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: markers[i][3]
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

