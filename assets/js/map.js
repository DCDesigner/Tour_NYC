function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 40.767266,
            lng: -73.976431
        }
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let locations = [{
            lat: 40.703621,
            lng: -74.012149
        },
        {
            lat: 41.084045,
            lng: -73.874245
        },
        {
            lat: 40.754932,
            lng: -73.984016
        }
    ];

    let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    //adds the marker image for our map, balso going to create them in a cluster if they're close together using that clusterer library that was already loaded
    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}


//footermap

function initFooterMap() {
    let map = new google.maps.Map(document.getElementById("FooterMap"), {
        zoom: 14,
        center: {
            lat: 40.736662,
            lng: -73.996238
        }
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let locations = [{
        lat: 40.736662,
        lng: -73.996238
    }];

    let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    //adds the marker image for our map, balso going to create them in a cluster if they're close together using that clusterer library that was already loaded
    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}