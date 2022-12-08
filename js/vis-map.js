
var map = L.map('map').setView([48.860995, 2.335813], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



let locations = [
    {
        "id": 1,
        "lat": 48.8582, 
        "long": 2.294519,
        "src": '/js/eiffel-tower.png',
        "title": "Eiffel Tower"
    },
    {
        "id": 2,
        "lat": 48.860995, 
        "long": 2.335813,
        "src": '/js/louvre.png',
        "title": "Le Louvre"
    },
    {
        "id": 3,
        "lat": 48.852902,
        "long": 2.350053,
        "src": '/js/notre-dame.png',
        "title": "Notre-Dame de Paris"
    },
    {
        "id": 4,
        "lat": 48.873727, 
        "long": 2.295039,
        "src": '/js/arc-de-triomphe.png',
        "title" : 'Arc de Triomphe'
    },
    {
        "id": 5,
        "lat": 48.846102, 
        "long": 2.345893,
        "src": '/js/pantheon.png',
        "title": 'Pantheon'
    },
    {
        "id": 6,
        "lat": 48.85983, 
        "long": 2.326578,
        "src": '/js/museum.png',
        "title": 'Orsay Museum'
    },
    {
        "id": 7,
        "lat": 48.85983,
        "long": 2.326578,
        "src": '/js/museum.png',
        "title": 'Orsay Museum'
    },
    {
        "id": 8,
        "lat": 48.85983,
        "long": 2.326578,
        "src": '/js/museum.png',
        "title": 'Orsay Museum'
    },
    {
        "id": 9,
        "lat": 48.85983,
        "long": 2.326578,
        "src": '/js/museum.png',
        "title": 'Orsay Museum'
    },
    {
        "id": 10,
        "lat": 48.85983,
        "long": 2.326578,
        "src": '/js/museum.png',
        "title": 'Orsay Museum'
    }
]


var museum = L.icon({
    iconUrl: '/js/museum.png',
    iconSize: [40, 40], // size of the icon 
});


var park = L.icon({
    iconUrl: '/js/park.png',
    iconSize: [40, 40], // size of the icon 
   

});

var pantheon = L.icon({
    iconUrl: '/js/pantheon.png',
    iconSize: [40, 40], // size of the icon 
})


var eiffel_tower = L.icon({
    iconUrl: '/js/eiffel-tower.png',
    iconSize: [40, 40], // size of the icon 
})


var notre_dame = L.icon({
    iconUrl: '/js/notre-dame.png',
    iconSize: [40, 40], // size of the icon 
})


var arc_de_triomphe = L.icon({
    iconUrl: '/js/arc-de-triomphe.png',
    iconSize: [40, 40], // size of the icon 
})

var louvre = L.icon({
    iconUrl: '/js/louvre.png',
    iconSize: [40, 40], // size of the icon 
})

var eglise = L.icon({
    iconUrl: '/js/eglise.png',
    iconSize: [35, 35], // size of the icon 
})

var opera_garnier = L.icon({
    iconUrl: '/js/palais-garnier.png',
    iconSize: [40, 40], // size of the icon 
})

var cimetiere = L.icon({
    iconUrl: '/js/cimetiere.png',
    iconSize: [40, 40], // size of the icon 
})

var canal = L.icon({
    iconUrl: '/js/bridge.png',
    iconSize: [35, 35], // size of the icon 
})

var sacre_coeur = L.icon({
    iconUrl: '/js/sacre-coeur.png',
    iconSize: [40, 40], // size of the icon 
})



var marker_eiffel_tour = L.marker([48.8582, 2.294519], { icon: eiffel_tower }).addTo(map).bindPopup('Eiffel Tower'+
    '<br/><button type="button" >Add to path </button>');
var marker_louvre = L.marker([48.860995, 2.335813], { icon: louvre }).addTo(map).bindPopup('Le Louvre');
var marker_notre_dame = L.marker([48.852902, 2.350053], { icon: notre_dame }).addTo(map).bindPopup('Notre-Dame');
var marker_arc_de_triomphe = L.marker([48.873727, 2.295039], { icon: arc_de_triomphe }).addTo(map).bindPopup('Arc de Triomphe');
var marker_pantheon = L.marker([48.846102, 2.345893], { icon: pantheon }).addTo(map).bindPopup('Pantheon');
var marker_museum_orsay = L.marker([48.85983, 2.326578], { icon: museum }).addTo(map).bindPopup('Orsay Museum');
var marker_petit_palais = L.marker([48.865936, 2.315385], { icon: museum }).addTo(map).bindPopup('Petit Palais');
var marker_grand_palais = L.marker([48.866035, 2.312251], { icon: museum }).addTo(map).bindPopup('Grand Palais');
var marker_palais_de_tokyo = L.marker([48.863914, 2.296537], { icon: museum }).addTo(map).bindPopup('Palais de Tokyo');
var marker_museum_picasso = L.marker([48.859797, 2.362132], { icon: museum }).addTo(map).bindPopup('Picasso Museum');
var marker_museum_orangerie = L.marker([48.86373, 2.322661], { icon: museum }).addTo(map).bindPopup('Orangery Museum');
var marker_opera_garnier = L.marker([48.871963, 2.331792], { icon: opera_garnier }).addTo(map).bindPopup('Garnier Palace');
var marker_pere_lachaise = L.marker([48.86096, 2.393891], { icon: cimetiere }).addTo(map).bindPopup('Pere Lachaise Cimetery');
var marker_sacre_coeur = L.marker([48.886755, 2.343025], { icon: sacre_coeur }).addTo(map).bindPopup('Sacre Coeur Basilica');
var marker_luxembourg_garden = L.marker([48.846559, 2.336589], { icon: park }).addTo(map).bindPopup('Luxembourg Garden');
var marker_bois_de_vincennes = L.marker([48.830939, 2.434215], { icon: park }).addTo(map).bindPopup('Bois de Vincennes');
var marker_jardin_des_plantes = L.marker([48.843501, 2.361734], { icon: park }).addTo(map).bindPopup('Garden of the Plants');

/**
marker.bindPopup(feature.properties.Name +
    '<br/><button type="button" class="btn btn-primary sidebar-open-button" data = "' + feature.properties.OBJECTID + '" ' + '>Click for more</button>');
**/
//var marker_st_chapelle = L.marker([48.855369, 2.345009], { icon: eglise }).addTo(map);
//var marker_montparnasse = L.marker([48.842091, 2.321968]).addTo(map);

//var marker_canal_st_martin = L.marker([48.871292, 2.365294], { icon: canal }).addTo(map);



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

