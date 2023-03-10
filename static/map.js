// Global Variables
var myMap;
var legend;
var infoBox;


// Defom function to Create Map
function creatMap(rentals){

    // Creating Map
    myMap = L.map('map').setView([30.266666, -97.733330,], 10);
    
    // Map tiles
    var baseMap = L.tileLayerL.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Calling function to create buttons 
    createButtons();

    //infoBox = L.control({position: 'bottomleft'});
    // infoBox.onAdd = function({
        //var div2 = L.DomUtil.create('div', 'info');
        //div2.innerHTML += '<h2>Song Attribute Popularity Ranking</h2>\
        //<h1><div id="this_country">Country Details</div></h1>\
        //<h4><div id="attrs">Click a country for more info...</div></h4>';
        //return div2;
    //})
    // Add info box to map
    //infoBox.addTo(myMap);
};



// Adding Geojson

