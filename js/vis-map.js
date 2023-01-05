
var map = L.map('map').setView([48.860995, 2.335813], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var map_path = [];


var save_trip = document.getElementById("saving");
save_trip.style.visibility = "visible"  ;



/** Locations of famous places in Paris */
let locations = [
    {
        "id": 1,
        "lat": 48.8582, 
        "long": 2.294519,
        "src": '/images/eiffel-tower.png',
        "title": "Eiffel Tower"
    },
    {
        "id": 2,
        "lat": 48.860995, 
        "long": 2.335813,
        "src": '/images/louvre.png',
        "title": "Le Louvre"
    },
    {
        "id": 3,
        "lat": 48.852902,
        "long": 2.350053,
        "src": '/images/notre-dame.png',
        "title": "Notre-Dame de Paris"
    },
    {
        "id": 4,
        "lat": 48.873727, 
        "long": 2.295039,
        "src": '/images/arc-de-triomphe.png',
        "title" : 'Arc de Triomphe'
    },
    {
        "id": 5,
        "lat": 48.846102, 
        "long": 2.345893,
        "src": '/images/pantheon.png',
        "title": 'Pantheon'
    },
    {
        "id": 6,
        "lat": 48.85983, 
        "long": 2.326578,
        "src": '/images/museum.png',
        "title": 'Orsay Museum'
    },
    {
        "id": 7,
        "lat": 48.865936, 
        "long": 2.315385,
        "src": '/images/museum.png',
        "title": 'Petit Palais'
    },
    {
        "id": 8,
        "lat": 48.866035,
        "long": 2.312251,
        "src": '/images/museum.png',
        "title": 'Grand Palais'
    },
    {
        "id": 9,
        "lat": 48.863914, 
        "long": 2.296537,
        "src": '/images/museum.png',
        "title": 'Palais de Tokyo'
    },
    {
        "id": 10,
        "lat": 48.859797, 
        "long": 2.362132,
        "src": '/images/museum.png',
        "title": 'Picasso Museum'
    },
    {
        "id": 11,
        "lat": 48.86373, 
        "long": 2.322661,
        "src": '/images/museum.png',
        "title": 'Orangery Museum'
    },
    {
        "id": 12,
        "lat": 48.871963, 
        "long": 2.331792,
        "src": '/images/palais-garnier.png',
        "title": 'Garnier Palace'
    },
    {
        "id": 13,
        "lat": 48.86096,
        "long": 2.393891,
        "src": '/images/cimetiere.png',
        "title": 'Pere Lachaise Cimetery'
    },
    {
        "id": 14,
        "lat": 48.886755, 
        "long": 2.343025,
        "src": '/images/sacre-coeur.png',
        "title": 'Sacre Coeur Basilica'
    },
    {
        "id": 15,
        "lat": 48.846559,
        "long": 2.336589,
        "src": '/images/park.png',
        "title": 'Luxembourg Garden'
    },
    {
        "id": 16,
        "lat": 48.830939, 
        "long": 2.434215,
        "src": '/images/park.png',
        "title": 'Bois de Vincennes'
    },
    {
        "id": 17,
        "lat": 48.843501, 
        "long": 2.361734,
        "src": '/images/park.png',
        "title": 'Garden of the Plants'
    }
    
]

var latlngs = [];





let popupOption = {
    "closeButton": false,
    
}

var id = 0; // the id corresponding to a radiobutton
var insert = false; 
var polyline = L.polyline([], { color: 'red' }).addTo(map); 

locations.forEach(element => {
    

    //Create buttons to add markers to path
    let btnAdd = document.createElement('button');
    btnAdd.className = 'addtopath';
    btnAdd.innerHTML = 'Add to path';
    
    //Putting the button in a div with the corresponding marker name
    let btnDiv = document.createElement('div')
    btnDiv.append(element.title)
    let br = document.createElement('br');
    btnDiv.append(br);
    btnDiv.append(btnAdd)

    //Create the marker at the correct location with specific icon.
    new L.Marker([element.lat, element.long], { icon: new L.icon({ iconUrl: element.src, iconSize: [40, 40] }) }).addTo(map)

        .on("mouseover", event => {
            event.target.bindPopup(element.title, popupOption).openPopup();
        })
        .on("contextmenu", event => {
            event.target.bindPopup(btnDiv).openPopup();
        })


    btnAdd.onclick = () => {
        
        //Checking which radioButton is selected and gettig its id 
        const radioButtons = document.querySelectorAll('input[name="hour"]');
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                id = radioButton.value;
                break;
            }
        }
        
        //Getting the corresponding circle in the timeline  
        var c = id.toString();
        var headerlist = document.getElementById(c);
        
        //If no marker were already putted
        if(headerlist.childNodes.length == 0){
           
            // Inserting the icon and the name of the place in the timeline
            var span = document.createElement("span");
            var icon = document.createElement("img");
            icon.src = element.src;
            icon.setAttribute("height", "40");
            icon.setAttribute("width", "40");
            icon.style.marginLeft = "-1px";
            icon.style.marginTop = "-8.5px";
            var name_place = document.createElement("p")
            name_place.setAttribute("id", "name-place");
            var br = document.createElement("br")
            name_place.innerHTML = element.title;
            name_place.style.marginLeft = "-10px";
            span.appendChild(icon);
            span.appendChild(name_place);

            headerlist.appendChild(span);
            
            //putting the location of the marker in the map_path list with the id corresponding to their place on the timeline
            if(map_path.length == 0) {
                map_path.push( {
                    id : id,
                    pos : [element.lat,element.long]})
                    
            }
            else {
                for(let i = 0 ; i < map_path.length; i++){
                    if(parseInt(map_path[i].id) > c) {  //Checking where the location needs to be put (it needs to be put in chronological order)
                        insert = true;
                        map_path.splice(i,0,{
                            id : id,
                            pos : [element.lat,element.long]}
                        )
                        break;
                    }
                }
                if(!insert){
                    map_path.push( {
                        id : id,
                        pos : [element.lat,element.long]})
                }
             insert = false;   
                    
            }
        
            id++;

            draw_path();  //draw the path

            span.ondblclick = function(event) {
                $(headerlist).html("");  //empty the timeline circle corresponding
                for(let i = 0 ; i < map_path.length; i++){
                    if(map_path[i].id == c){  
                        map_path.splice(i,1);  //Removing the location from the map_path list
                        draw_path();            //Redrawing the new path
                        break;
                    }
                }
            }

            
            
        }
        
    }
});






function draw_path(){
    polyline.removeFrom(map);
            latlngs = [];
            for(let i = 0 ; i < map_path.length; i++){
                latlngs.push(map_path[i].pos)
            }
            polyline = L.polyline(latlngs, { color: '#9c1c1c' }).addTo(map);
}


function get_path(){
    return map_path;
}

function get_date(){
    return document.getElementById("date").innerHTML;
}


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

