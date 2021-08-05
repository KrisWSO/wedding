// adding circle markers


var mymap = L.map('mapid').setView([44.16235545311861, -72.85046914555758], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


var circle = L.circle([44.195548085446084, -72.89158490178752], {
    color: "#6D152B",
    fillColor: "#6D152B",
    fillOpacity: 1,
    radius: 100
}).addTo(mymap);

circle.bindPopup("Wedding Venue<br>(Mad River Barn)").openPopup();

locations = [{
    "type": "Feature",
    "properties": {
        "locationID": "whitehorse",
        "name": "The White Horse Inn",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.8875710864438, 44.17784564748142]
    } 
}, {
    "type": "Feature",
    "properties": {
        "locationID": "westhill",
        "name": "West Hill House",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.88253902877439, 44.124543909888786]
    } 
}, {
    "type": "Feature",
    "properties": {
        "locationID": "swanson",
        "name": "The Swanson Inn",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.8073763441148, 44.17769302617483]
    } 
}, {
    "type": "Feature",
    "properties": {
        "locationID": "hydeaway",
        "name": "The Hyde Away Inn",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.87059567995739, 44.18406207209359]
    } 
}, {
    "type": "Feature",
    "properties": {
        "locationID": "tuckerhill",
        "name": "The Tucker Hill Inn",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.86531541712756, 44.181802335089046]
    } 
}, {
    "type": "Feature",
    "properties": {
        "locationID": "featherbed",
        "name": "The Featherbed Inn",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.8347148594568, 44.17616510002419]
    } 
}, {
    "type": "Feature",
    "properties": {
        "locationID": "warren",
        "name": "The Warren Lodge",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.84534074411596, 44.1380084744059]
    } 
}, {
    "type": "Feature",
    "properties": {
        "locationID": "madlodge",
        "name": "The Mad River Lodge",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-72.88385857294992, 44.19136903406248]
    } 
}
];

var basicCircleStyle = {
    radius: 6,
    fillColor: "#0090c9",
    color: "#0090c9",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};


var clickedCircleStyle = {
	radius: 7,
    fillColor: "#e55934",
    color: "#e55934",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};

var allCircles = L.featureGroup() // initialize a variable to store all the circles after they are added to the map. Allows access to group to reset stytle.


L.geoJSON(locations, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, basicCircleStyle).on("click", circleClick);
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p>'+feature.properties.name+'</p>')
    }
}).addTo(mymap).addTo(allCircles)

var selectedLocationID
var selectedLocationName
function circleClick(e) {
	window.selectedLocationID = e.target.feature.properties.locationID;
	window.selectedLocationName = e.target.feature.properties.name;
	allCircles.setStyle(basicCircleStyle);
	e.target.setStyle(clickedCircleStyle);
	console.log(selectedLocationID);
	accomodationDetails()
}

// if map is clicked, clear location selection.
mymap.on('click', clearSelection)

function clearSelection() {
	window.selectedLocationID = null;
	window.selectedLocationID = null;
	allCircles.setStyle(basicCircleStyle);
	console.log(selectedLocationID);
	accomodationDetails()
}

//document.onload = accomodationDetails();

function accomodationDetails() {

    //first loop through and hide all locations
    for (thisLocation of locations) { 
        var x = document.getElementById(thisLocation.properties.locationID);
        x.style.display = "none";
    }
    //then display selected one if it exists
    if (selectedLocationID !== null) {
        var selectedLocationDiv = document.getElementById(selectedLocationID);
        selectedLocationDiv.style.display = "";
    }

}
