//google map api
//Basic informatio of sanxia mp
//1. (24.942946, 121.368398),
//2. zoom:14;

function initialize() {
	var mapCanvas = document.getElementById('googleMap');
	var mapOptions = {
		center: new google.maps.LatLng(24.942946, 121.368398),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);




