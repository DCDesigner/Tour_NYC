// The following example creates five accessible and
// focusable markers.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 40.736662,
            lng: -73.996238
        },
    });

    //Kochi 
    var markerKochi = new google.maps.Marker({
        position: {
            lat: 40.765099,
            lng: -73.993775
        },
        map: map,
        title: "Kochi Korean Restaurant",

    });

    var contentStringKochi =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Tour NYC</span>' +
        '<div id="bodyContentkochi">' +
        "Travel Agency<br/><br/>" +
        "13 th Street .47 W 13 th St, <br/>" +
        "New York, NY 10011, USA" +
        '<div id ="tag_kochi">Great Deals</div>' +
        '<div id="tag_details">50% off</div>' +
        '<div id="infowindow_image_kochi"> ' +
        "<img src='assets/images/tour_nyc_logo.png'>" +
        "</div>" +
        "</div>";

    var infowindow_kochi = new google.maps.InfoWindow({
        content: contentStringKochi,
        maxwidth: 500,
    });

    markerKochi.addListener('click', function() {
        infowindow_kochi.open(map, markerKochi);
    });

    //Le Bernardin

    var markerBernardin = new google.maps.Marker({
        position: {
            lat: 40.764708,
            lng: -73.981415
        },
        map: map,
        title: "Le Bernardin Elite French Refined Seafood Restaurant",
    });

    var contentStringBernardin =
        '<div id="content_bernardin">' +
        '<div id="siteNotice_bernardin">' +
        '<span id="infowindow_title_bernardin">Le Bernardin</span>' +
        '<div id="bodyContentbernardin">' +
        "Restaurant<br/><br/>" +
        "13 th Street .47 W 13 th St, <br/>" +
        "New York, NY 10011, USA" +
        '<div id ="tag_kochi">Great Deals</div>' +
        '<div id="tag_details">50% off</div>' +
        '<div id="infowindow_image_kochi"> ' +
        "<img src='assets/images/tour_nyc_logo.png'>" +
        "</div>" +
        "</div>";
    var infowindowBernardin = new google.maps.InfoWindow({
        content: contentStringBernardin,
        maxwidth: 500,
    });

    markerBernardin.addListener('click', function() {
        infowindowBernardin.open(map, markerBernardin);
    });

    //Le Cilantro

    var markerCilantro = new google.maps.Marker({
        position: {
            lat: 40.784952,
            lng: -73.973241
        },

        map: map,
        title: "Le Cilantro Mexican Restaurant",
    });

    var contentStringCilantro =
        '<div id="content_Cilantro">' +
        '<div id="siteNotice_Cilantro">' +
        '<span id="infowindow_title_Cilantro">Cilantro</span>' +
        '<div id="bodyContentcilantro">' +
        "Restaurant<br/><br/>" +
        "13 th Street .47 W 13 th St, <br/>" +
        "New York, NY 10011, USA" +
        '<div id ="tag_kochi">Great Deals</div>' +
        '<div id="tag_details">50% off</div>' +
        '<div id="infowindow_image_kochi"> ' +
        "<img src='assets/images/tour_nyc_logo.png'>" +
        "</div>" +
        "</div>";
    var infowindowCilantro = new google.maps.InfoWindow({
        content: contentStringCilantro,
        maxwidth: 500,
    });

    markerCilantro.addListener('click', function() {
        infowindowCilantro.open(map, markerCilantro);
    });

    //212 Steakhouse

    var markerSteakhouse = new google.maps.Marker({
        position: {
            lat: 40.760017,
            lng: -73.966652
        },

        map: map,
        title: "212 Steakhouse",
    });

    var contentStringSteakhouse =
        '<div id="content_Steakhouse">' +
        '<div id="siteNotice_Steakhouse">' +
        '<span id="infowindow_title_">Steakhouse</span>' +
        '<div id="bodyContentSteakhouse">' +
        "Restaurant<br/><br/>" +
        "13 th Street .47 W 13 th St, <br/>" +
        "New York, NY 10011, USA" +
        '<div id ="tag_kochi">Great Deals</div>' +
        '<div id="tag_details">50% off</div>' +
        '<div id="infowindow_image_kochi"> ' +
        "<img src='assets/images/tour_nyc_logo.png'>" +
        "</div>" +
        "</div>";
    var infowindowSteakhouse = new google.maps.InfoWindow({
        content: contentStringSteakhouse,
        maxwidth: 500,
    });

    markerSteakhouse.addListener('click', function() {
        infowindowSteakhouse.open(map, markerSteakhouse);
    });

    //Thai Villa 

    var markerThaivilla = new google.maps.Marker({
        position: {
            lat: 40.741150,
            lng: -73.991028
        },

        map: map,
        title: "Thai Villa",
    });

    var contentStringThaivilla =
        '<div id="content_Thaivilla">' +
        '<div id="siteNotice_Thaivilla">' +
        '<span id="infowindow_title_">Thai Villa</span>' +
        '<div id="bodyContentThaivilla">' +
        "Restaurant<br/><br/>" +
        "13 th Street .47 W 13 th St, <br/>" +
        "New York, NY 10011, USA" +
        '<div id ="tag_kochi">Great Deals</div>' +
        '<div id="tag_details">50% off</div>' +
        '<div id="infowindow_image_kochi"> ' +
        "<img src='assets/images/tour_nyc_logo.png'>" +
        "</div>" +
        "</div>";
    var infowindowThaivilla = new google.maps.InfoWindow({
        content: contentStringThaivilla,
        maxwidth: 500,
    });

    markerThaivilla.addListener('click', function() {
        infowindowThaivilla.open(map, markerThaivilla);
    });

}

//footermap


function initFooterMap() {


    const NY = {
        lat: 40.736662,
        lng: -73.996238
    };

    const map = new google.maps.Map(document.getElementById("FooterMap"), {
        zoom: 14,
        center: NY,
    });

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '<span id="infowindow_title">Tour NYC</span>' +
        '<div id="bodyContent">' +
        "Travel Agency<br/><br/>" +
        "13 th Street .47 W 13 th St, <br/>" +
        "New York, NY 10011, USA" +
        '<div id ="tag">Great Deals</div>' +
        '<div id="tag_details">50% off</div>' +
        '<div id="infowindow_image"> ' +
        "<img src='assets/images/tour_nyc_logo.png'>" +
        "</div>" +
        "</div>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    const marker = new google.maps.Marker({
        position: NY,
        map: map,
        title: "Tour NYC (Travel Agency)",
    });

    marker.addListener('mouseover', () => {
        infowindow.open(map, marker);
    });
}