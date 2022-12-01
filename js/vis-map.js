var map = L.map('map').setView([48.860995, 2.335813], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var museum = L.icon({
    iconUrl: '\museum.png',
    iconSize: [38, 95], // size of the icon 

});


var marker_louvre = L.marker([48.860995, 2.335813], { icon: museum }).addTo(map);

var marker_museum_orsay = L.marker([48.85983, 2.326578]).addTo(map);
var marker_pere_lachaise = L.marker([48.86096, 2.393891]).addTo(map);
var marker_eiffel_tour = L.marker([48.8582, 2.294519]).addTo(map);
var marker_notre_dame = L.marker([48.852902, 2.350053]).addTo(map);
var marker_luxembourg_garden = L.marker([48.846559, 2.336589]).addTo(map);
var marker_petit_palais = L.marker([48.865936, 2.315385]).addTo(map);
var marker_grand_palais = L.marker([48.866035, 2.312251]).addTo(map);
var marker_palais_de_tokyo = L.marker([48.863914, 2.296537]).addTo(map);
var marker_museum_picasso = L.marker([48.859797, 2.362132]).addTo(map);
var marker_museum_orangerie = L.marker([48.86373, 2.322661]).addTo(map);
var marker_bois_de_vincennes = L.marker([48.830939, 2.434215]).addTo(map);
var marker_arc_de_triomphe = L.marker([48.873727, 2.295039]).addTo(map);
var marker_canal_st_martin = L.marker([48.871292, 2.365294]).addTo(map);
var marker_st_chapelle = L.marker([48.855369, 2.345009]).addTo(map);
var marker_sacre_coeur = L.marker([48.886755, 2.343025]).addTo(map);
var marker_montparnasse = L.marker([48.842091, 2.321968]).addTo(map);
var marker_pantheon = L.marker([48.846102, 2.345893]).addTo(map);
var marker_jardin_des_plantes = L.marker([48.843501, 2.361734]).addTo(map);
var marker_opera_garnier = L.marker([48.871963, 2.331792]).addTo(map);




// create a red polyline from an array of LatLng points
var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];




/**

$.getJSON('./get-path', function (data) {
    //var polyline = L.polyline(data.path, { color: 'red' }).addTo(map);

    // zoom the map to the polyline
    map.fitBounds(polyline.getBounds());

})**/


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);