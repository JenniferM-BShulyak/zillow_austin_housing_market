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
zoom: 10 
});

// Loading Map
map.on('load', function(){
    
    // Adding Data Source

    map.addSource ('rent-data', {
        type: 'geojson',
        data: '..//geojson_data/geo_jsonmap/rent_geoclean.geojson'
    });
    
    map.addLayer({
        id: 'rent_2015',
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
        id: 'rent_2016',
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
            'fill-opacity': 0.75,
            'visibility': 'none'
        }
    });

    map.addLayer({
        id: 'rent_2017',
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
            'fill-opacity': 0.75,
            'visibility': 'none'
        }
    });

    map.addLayer({
        id: 'rent_2018',
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
            'fill-opacity': 0.75,
            'visibility': 'none'
        }
    });
    map.addLayer({
        id: 'rent_2019',
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
            'fill-opacity': 0.75,
            'visibility': 'none'
        }
    });

    map.addLayer({
        id: 'rent_2020',
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
            'fill-opacity': 0.75,
            'visibility': 'none'
        }
    });

    map.addLayer({
        id: 'rent_2021',
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
            'fill-opacity': 0.75,
            'visibility': 'none'
        }
    });

    map.addLayer({
        id: 'rent_2022',
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
            'fill-opacity': 0.75,
            'visibility': 'none'
        }
    });

    map.addLayer({
        id: 'rent_2023',
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
    });

    map.on('idle', () => {
        // If these two layers were not added to the map, abort
        if (!map.getLayer('rent_2015')
        ) {
        return;
        }
         
        // Enumerate ids of the layers.
        const toggleableLayerIds = ['rent_2015', 'rent_2016', 'rent_2017','rent_2018', 'rent_2019', 'rent_2020', 'rent_2021', 'rent_2022', 'rent_2023'];
         
        // Set up the corresponding toggle button for each layer.
        for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
        continue;
        }
         
        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active';
         
        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
        const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
         
        const visibility = map.getLayoutProperty(
        clickedLayer,
        'visibility'
        );
         
        // Toggle layer visibility by changing the layout object's visibility property.
        if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
        } else {
        this.className = 'active';
        map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
        );
        }
        };
         
        const layers = document.getElementById('menu');
        layers.appendChild(link);
        }
        });
});