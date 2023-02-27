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

map.on('load', function(){
    map.addLayer({
        id: 'rent',
        type: "fill",
        source: {
            type: 'geojson',
            data: '..//geojson_data/geo_jsonmap/rent_geoclean.geojson'
        },
        'paint': {
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

    // Set filter to first month of the year
    // 0 = January
    filterBy(0);

    document.getElementById('slider').addEventListener('input', (e) => {
        const month = parseInt(e.target.value, 8);
        filterBy(month);
    });
})