
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
        "lat": 48.865936, 
        "long": 2.315385,
        "src": '/js/museum.png',
        "title": 'Petit Palais'
    },
    {
        "id": 8,
        "lat": 48.866035,
        "long": 2.312251,
        "src": '/js/museum.png',
        "title": 'Grand Palais'
    },
    {
        "id": 9,
        "lat": 48.863914, 
        "long": 2.296537,
        "src": '/js/museum.png',
        "title": 'Palais de Tokyo'
    },
    {
        "id": 10,
        "lat": 48.859797, 
        "long": 2.362132,
        "src": '/js/museum.png',
        "title": 'Picasso Museum'
    },
    {
        "id": 11,
        "lat": 48.86373, 
        "long": 2.322661,
        "src": '/js/museum.png',
        "title": 'Orangery Museum'
    },
    {
        "id": 12,
        "lat": 48.871963, 
        "long": 2.331792,
        "src": '/js/palais-garnier.png',
        "title": 'Garnier Palace'
    },
    {
        "id": 13,
        "lat": 48.86096,
        "long": 2.393891,
        "src": '/js/cimetiere.png',
        "title": 'Pere Lachaise Cimetery'
    },
    {
        "id": 14,
        "lat": 48.886755, 
        "long": 2.343025,
        "src": '/js/sacre-coeur.png',
        "title": 'Sacre Coeur Basilica'
    },
    {
        "id": 15,
        "lat": 48.846559,
        "long": 2.336589,
        "src": '/js/park.png',
        "title": 'Luxembourg Garden'
    },
    {
        "id": 16,
        "lat": 48.830939, 
        "long": 2.434215,
        "src": '/js/park.png',
        "title": 'Bois de Vincennes'
    },
    {
        "id": 17,
        "lat": 48.843501, 
        "long": 2.361734,
        "src": '/js/park.png',
        "title": 'Garden of the Plants'
    }
    
]

let popupOption = {
    "closeButton": false,
    
}


locations.forEach(element => {

    let btnAdd = document.createElement('button');
    btnAdd.className = 'addtopath';
    btnAdd.innerHTML = 'Add to path';
    

    let btnDiv = document.createElement('div')
    btnDiv.append(element.title)
    let br = document.createElement('br');
    btnDiv.append(br);
    btnDiv.append(btnAdd)




    new L.Marker([element.lat, element.long], { icon: new L.icon({ iconUrl: element.src, iconSize: [40, 40] }) }).addTo(map)

        .on("mouseover", event => {
            event.target.bindPopup(element.title, popupOption).openPopup();
        })
        .on("contextmenu", event => {
            event.target.bindPopup(btnDiv).openPopup();
        })


    btnAdd.onclick = () => {
        var elem = document.createElement("img");
        //elem.setAttribute("src", element.src);
        elem.src = element.src;
        elem.setAttribute("height", "40");
        elem.setAttribute("width", "40");
       // elem.setAttribute("alt", "Flower");
        //elem.src = 'images/hydrangeas.jpg';
        var headerlist = document.getElementById('path');
        headerlist.appendChild(elem);
        headerlist.innerHTML = headerlist.innerHTML;
        
    }
});





/*
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
*/
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

