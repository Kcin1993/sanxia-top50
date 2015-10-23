//google map api
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(24.942946, 121.368398),
    zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);