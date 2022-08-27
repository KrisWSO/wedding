// adding circle markers


var mymap_2 = L.map('mapid_2').setView([44.14982712603486, -72.92553349787192], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap_2);


var circleOne = L.circle([44.195548085446084, -72.89158490178752], {
    radius: 300,
    color: "#6D152B",
    fillColor: "#6D152B",
    fillOpacity: 1
}).addTo(mymap_2);

circleOne.bindPopup("<strong>Mad River Barn (Venue)</strong><br>2849 Mill Brook Rd<br>Waitsfield, VT 05673").openPopup();

var circleTwo = L.circle([44.094809469957625, -72.92798873063079], {
    radius: 300,
    color: "#6D152B",
    fillColor: "#6D152B",
    fillOpacity: 1
}).addTo(mymap_2);

circleTwo.bindPopup("<strong>Hike (Sunset Ledge)</strong><br>3573 Lincoln Gap Rd<br>Lincoln, VT 05443")

var circleThree = L.circle([44.183612660637216, -72.83836705946385], {
    radius: 300,
    color: "#6D152B",
    fillColor: "#6D152B",
    fillOpacity: 1
}).addTo(mymap_2);

circleThree.bindPopup("<strong>Waitsfield Farmers Market</strong><br>Mad River Green<br>Waitsfield, VT 05673")