// Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2JubG9tYXIiLCJhIjoiY2xlaHN1cGIwMGp3eDNzbnR6OWpscXl2MiJ9.mnkH-jHkJkD7XU6HoY1v_g';


// Adding Map
const map = new mapboxgl.Map({
// container ID
container: 'map',
 // style URL
style: 'mapbox://styles/gbnlomar/clem19jqn003f01mmydku5v7k',
// starting position [lng, lat]
center: [-97.733330, 30.266666],
// starting zoom
zoom: 9
});


var LayerIds = ['2015', 
'2016', 
'2017', 
'2018', 
'2019', 
'2020', 
'2021', 
'2022', 
'2023'];

const slider = document.getElementById('slider');
slider.value = 0;
slider.addEventListener('input', function(e) {
    var index = parseInt(e.target.value);
    for (var i = 0; i <LayerIds.length; i++){
        map.setLayoutProperty(LayerIds[i], 'visibility', i === index ? 'visible' : 'none');
    }
}); 

// Loading Map
map.on('load', function(){
    
    // Adding Data Source

    map.addSource ('rent-data', {
        type: 'geojson',
        data: '..//geojson_data/geo_jsonmap/rent_geoclean.geojson'
    });
    
    map.addLayer({
        id: '2015',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2015'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        
        }
    });

    map.addLayer({
        id: '2016',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2016'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        id: '2017',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2017'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        id: '2018',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2018'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });
    map.addLayer({
        id: '2019',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2019'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        id: '2020',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2020'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        id: '2021',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2021'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        id: '2022',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2022'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        id: '2023',
        type: "fill",
        source: 'rent-data',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', '2023'],
                1000,
                '#008000',
                2500,
                '#7F3121'
            ],
            'fill-opacity': 0.75
        }
    });

    map.addLayer({
        id: 'Line',
        type: "line",
        source: 'rent-data',
        paint: {
            'line-color': '#FFFFFF',
            'line-width': .25
        }
    })
});


