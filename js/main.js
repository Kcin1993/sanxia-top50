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
        ['憨吉朗',24.9490483,121.37797479999995,'mapimg/a.png'],
        ['早餐優選',24.947278,121.3734283,'mapimg/a.png'],
        ['禾剛燒烤',24.9310162,121.37608699999998,'mapimg/a.png'] 
    ];
                        
    var infoWindowContent = [
        [
        '<div class="info_content">' +
        '<div class="title_area"><div class="img_wrapper"><img src="people/1.png"></div><h1 class="name">三峽客報導</h1></div>'+
        '<ul class="list_wrapper"><li class="list" data-content="推薦店家：福美軒金牛角"></li><li class="list" data-content="評論：三峽金牛角，元老級創始店"></li><li class="list" data-content="Google店家的結果："><a href="http://goo.gl/U9CMLY">以堅持書寫三角湧代名詞</a><a href=""></a><a href=""></a></li><li class="list" data-content="探索：新北市三峽區信義街25號"></li></ul>'+
        '</div>'
        ],
        [
        '<div class="info_content">' +
        '<div class="title_area"><div class="img_wrapper"><img src="people/1.png"></div><h1 class="name">三峽客報導</h1></div>'+
        '<ul class="list_wrapper"><li class="list" data-content="推薦店家：榕樹下鮮肉包"></li><li class="list" data-content="評論：皮薄汁多料多的包子，每天有限量出爐"></li><li class="list" data-content="Google店家的結果："><a href="http://goo.gl/ap2ZcH">【店鋪專欄】榕樹下鮮肉包</a><a href=""></a><a href=""></a></li><li class="list" data-content="探索：台北縣三峽鎮中華路3巷11之3號"></li></ul>'+
        '</div>'
        ],
        [
        '<div class="info_content">' +
        '<div class="title_area"><div class="img_wrapper"><img src="people/2.jpg"></div><h1 class="name">林佑安</h1></div>'+
        '<ul class="list_wrapper"><li class="list" data-content="推薦店家：憨吉朗"></li><li class="list" data-content="評論："></li><li class="list" data-content="Google店家的結果："><a href="http://goo.gl/ZRfwIw">(三峽北大)憨吉朗早午餐，義大利麵@Staciegotozoo的部落</a><a href=""></a><a href=""></a></li><li class="list" data-content="探索：新北市三峽區大觀路120號"></li></ul>'+
        '</div>'
        ],
        [
        '<div class="info_content">' +
        '<div class="title_area"><div class="img_wrapper"><img src="people/3.jpg"></div><h1 class="name">陳貝綸</h1></div>'+
        '<ul class="list_wrapper"><li class="list" data-content="推薦店家：早餐優選"></li><li class="list" data-content="評論：">最推薦蔬菜起司焗烤土司，清爽好吃！但分量不多，要吃飽不建議來。</li><li class="list" data-content="Google店家的結果："><a href="http://goo.gl/48Ev9y">新北市-三峽北大～早餐優選-ryan0725-痞客邦PIXNET</a><a href=""></a><a href=""></a></li><li class="list" data-content="探索：新北市樹林區學林路47號"></li></ul>'+
        '</div>'
        ],
        [
        '<div class="info_content">' +
        '<div class="title_area"><div class="img_wrapper"><img src="people/4.jpg"></div><h1 class="name">李浩廷</h1></div>'+
        '<ul class="list_wrapper"><li class="list" data-content="推薦店家：禾剛燒烤"></li><li class="list" data-content="評論："></li><li class="list" data-content="Google店家的結果："><a href="https://goo.gl/pyJY9F">三峽美食．禾岡炭火燒肉</a><a href=""></a><a href=""></a></li><li class="list" data-content="探索：新北市三峽區中正路一段22號"></li></ul>'+
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

