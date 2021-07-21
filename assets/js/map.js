// The following example creates five accessible and
// focusable markers.

var map;
var markers = [];


const hotelMarkers = []


const restaurantMarkers = []


const attractionMarkers = [{
        position: {
            lat: 40.760341,
            lng: -73.978997
        },
        contentString: '<div id="content_kochi">' +
            '<div id="siteNotice_kochi">' +
            '<span id="infowindow_title_kochi">Rockefeller Center</span>' +
            '<div id="bodyContentkochi">' +
            "Travel Agency<br/><br/>" +
            "13 th Street .47 W 13 th St, <br/>" +
            "New York, NY 10011, USA" +
            '<div id ="tag_kochi">Great Deals</div>' +
            '<div id="tag_details">50% off</div>' +
            '<div id="infowindow_image_kochi"> ' +
            "<img src='assets/images/tour_nyc_logo.png'>" +
            "</div>" +
            "</div>",
        icon: `<i class="fas fa-hotel"></i>`
    },

]

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 40.736662,
            lng: -73.996238
        },
    });

    // loop

    // createMarkers

    //Attractions
    //Rockefeller Center
    var markerRockefellercenter = new google.maps.Marker({
        position: {
            lat: 40.760341,
            lng: -73.978997
        },

        map: map,

        title: "Rockefeller Center",

    });

    var contentStringRockefellercenter =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Rockefeller Center</span>' +
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

    var infowindow_rockefellercenter = new google.maps.InfoWindow({
        content: contentStringRockefellercenter,
        maxwidth: 500,
    });

    markerRockefellercenter.addListener('mouseover', function() {
        infowindow_rockefellercenter.open(map, markerRockefellercenter);
    });

    markerRockefellercenter.addListener('mouseout', function() {
        infowindow_rockefellercenter.close(map, markerRockefellercenter);
    });



    //Central Park
    var markerCentralpark = new google.maps.Marker({
        position: {
            lat: 40.769349,
            lng: -73.971969
        },

        map: map,
        title: "Central Park",

    });

    var contentStringCentralpark =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Central Park</span>' +
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

    var infowindow_centralpark = new google.maps.InfoWindow({
        content: contentStringCentralpark,
        maxwidth: 500,
    });

    markerCentralpark.addListener('mouseover', function() {
        infowindow_centralpark.open(map, markerCentralpark);
    });

    markerCentralpark.addListener('mouseout', function() {
        infowindow_centralpark.close(map, markerCentralpark);
    });

    //Washington Square
    var markerWashingtonsquare = new google.maps.Marker({
        position: {
            lat: 40.732304,
            lng: -73.997326
        },

        map: map,
        title: "Washington Square Park",

    });

    var contentStringWashingtonsquare =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Equinox</span>' +
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

    var infowindow_washingtonsquare = new google.maps.InfoWindow({
        content: contentStringWashingtonsquare,
        maxwidth: 500,
    });

    markerWashingtonsquare.addListener('mouseover', function() {
        infowindow_washingtonsquare.open(map, markerWashingtonsquare);
    });

    markerWashingtonsquare.addListener('mouseout', function() {
        infowindow_washingtonsquare.close(map, markerWashingtonsquare);
    });

    //The High Line
    var markerHighline = new google.maps.Marker({
        position: {
            lat: 40.74974,
            lng: -74.00484
        },

        map: map,
        title: "The High Line Park",

    });

    var contentStringHighline =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Equinox</span>' +
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

    var infowindow_highline = new google.maps.InfoWindow({
        content: contentStringHighline,
        maxwidth: 500,
    });

    markerHighline.addListener('mouseover', function() {
        infowindow_highline.open(map, markerHighline);
    });

    markerHighline.addListener('mouseout', function() {
        infowindow_highline.close(map, markerHighline);
    });

    //Brooklyn Bridge
    var markerBrooklynbridge = new google.maps.Marker({
        position: {
            lat: 40.707369,
            lng: -73.99711
        },

        map: map,
        title: "Brooklyn Bridge Landmark",

    });

    var contentStringBrooklynbridge =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Equinox</span>' +
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

    var infowindow_brooklynbridge = new google.maps.InfoWindow({
        content: contentStringBrooklynbridge,
        maxwidth: 500,
    });

    markerBrooklynbridge.addListener('mouseover', function() {
        infowindow_brooklynbridge.open(map, markerBrooklynbridge);
    });

    markerBrooklynbridge.addListener('mouseout', function() {
        infowindow_brooklynbridge.close(map, markerBrooklynbridge);
    });

    //Hotels
    //Hyatt
    var markerHyatt = new google.maps.Marker({
        position: {
            lat: 40.766962,
            lng: -73.9787
        },

        map: map,
        title: "Hyatt Hotel",

    });

    var contentStringHyatt =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Equinox</span>' +
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

    var infowindow_hyatt = new google.maps.InfoWindow({
        content: contentStringHyatt,
        maxwidth: 500,
    });

    markerHyatt.addListener('mouseover', function() {
        infowindow_hyatt.open(map, markerHyatt);
    });

    markerHyatt.addListener('mouseout', function() {
        infowindow_hyatt.close(map, markerHyatt);
    });

    //Aloft
    var markerAloft = new google.maps.Marker({
        position: {
            lat: 40.810721,
            lng: -73.95192
        },

        map: map,
        title: "Aloft Hotel",

    });

    var contentStringAloft =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title">Aloft</span>' +
        '<div id="bodyContent">' +
        "4-star hotel<br/>" +
        "Free Wifi<br/><br/>" +
        "2296 Frederick Douglass Blvd, <br/>" +
        "New York, NY 10027, USA" +
        '<div id ="tag">Great Deals</div>' +
        '<div id="tag_details">50% off</div>' +
        "</div>";

    var infowindow_aloft = new google.maps.InfoWindow({
        content: contentStringAloft,
        maxwidth: 500,
    });

    markerAloft.addListener('mouseover', function() {
        infowindow_aloft.open(map, markerAloft);
    });

    markerAloft.addListener('mouseout', function() {
        infowindow_aloft.close(map, markerAloft);
    });

    //Four Seasons
    var markerFourseasons = new google.maps.Marker({
        position: {
            lat: 40.713838,
            lng: -74.00913
        },

        map: map,
        title: "Four Seasons Hotel",

    });

    var contentStringFourseasons =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Equinox</span>' +
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

    var infowindow_fourseasons = new google.maps.InfoWindow({
        content: contentStringFourseasons,
        maxwidth: 500,
    });

    markerFourseasons.addListener('mouseover', function() {
        infowindow_fourseasons.open(map, markerFourseasons);
    });

    markerFourseasons.addListener('mouseout', function() {
        infowindow_fourseasons.close(map, markerFourseasons);
    });

    //The Dominick
    var markerDominick = new google.maps.Marker({
        position: {
            lat: 40.728444,
            lng: -74.00522
        },

        map: map,
        title: "The Dominick Hotel",

    });

    var contentStringDominick =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Equinox</span>' +
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

    var infowindow_dominick = new google.maps.InfoWindow({
        content: contentStringDominick,
        maxwidth: 500,
    });

    markerDominick.addListener('mouseover', function() {
        infowindow_dominick.open(map, markerDominick);
    });

    markerDominick.addListener('mouseout', function() {
        infowindow_dominick.close(map, markerDominick);
    });


    //Equinox
    var markerEquinox = new google.maps.Marker({
        position: {
            lat: 40.758046,
            lng: -74.002015
        },

        map: map,
        title: "Equinox Hotel",

    });

    var contentStringEquinox =
        '<div id="content_kochi">' +
        '<div id="siteNotice_kochi">' +
        '<span id="infowindow_title_kochi">Equinox</span>' +
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

    var infowindow_equinox = new google.maps.InfoWindow({
        content: contentStringEquinox,
        maxwidth: 500,
    });

    markerEquinox.addListener('mouseover', function() {
        infowindow_equinox.open(map, markerEquinox);
    });

    markerEquinox.addListener('mouseout', function() {
        infowindow_equinox.close(map, markerEquinox);
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

    markerKochi.addListener('mouseover', function() {
        infowindow_kochi.open(map, markerKochi);
    });

    markerKochi.addListener('mouseout', function() {
        infowindow_kochi.close(map, markerKochi);
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

    markerBernardin.addListener('mouseover', function() {
        infowindowBernardin.open(map, markerBernardin);
    });

    markerBernardin.addListener('mouseout', function() {
        infowindowBernardin.close(map, markerBernardin);
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
        '<span id="infowindow_title">Cilantro</span>' +
        '<div id="bodyContentcilantro">' +
        "$$ Mexican Restaurant<br/><br/>" +
        "485 Columbus Ave, <br/>" +
        "New York, NY 10024, USA <br/><br/>" +
        '<ul id ="eatingtags">' +
        '<li><i class="fa-li fa fa-check-square"></i>Dine-in</li>' +
        '<li>Curbside Pickup</li>' +
        '<li>Delivery</li>' +
        '</ul>' +
        "</div>";
    var infowindowCilantro = new google.maps.InfoWindow({
        content: contentStringCilantro,
        maxwidth: 500,
    });

    markerCilantro.addListener('mouseover', function() {
        infowindowCilantro.open(map, markerCilantro);
    });

    markerCilantro.addListener('mouseout', function() {
        infowindowCilantro.close(map, markerCilantro);
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

    markerSteakhouse.addListener('mouseover', function() {
        infowindowSteakhouse.open(map, markerSteakhouse);
    });

    markerSteakhouse.addListener('mouseout', function() {
        infowindowSteakhouse.close(map, markerSteakhouse);
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

    markerThaivilla.addListener('mouseover', function() {
        infowindowThaivilla.open(map, markerThaivilla);
    });

    markerThaivilla.addListener('mouseout', function() {
        infowindowThaivilla.close(map, markerThaivilla);
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

    marker.addListener('mouseout', () => {
        infowindow.close(map, marker);
    });
}