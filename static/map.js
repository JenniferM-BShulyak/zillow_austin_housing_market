// Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2JubG9tYXIiLCJhIjoiY2xlaHN1cGIwMGp3eDNzbnR6OWpscXl2MiJ9.mnkH-jHkJkD7XU6HoY1v_g';

// Adding Map
const map = new mapboxgl.Map({
// container ID
container: 'map',
 // style URL
style: 'mapbox://styles/gbnlomar/cleimod8n008m01pera3rhtq6',
// starting position [lng, lat]
center: [-97.733330, 30.266666],
// starting zoom
zoom: 11 
});


// Hover Feature
let hoveredStateId = null;
 
map.on('load', () => {
map.addSource('states', {
'type': 'geojson',
'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
});
 
// The feature-state dependent fill-opacity expression will render the hover effect
// when a feature's hover state is set to true.
map.addLayer({
'id': 'state-fills',
'type': 'fill',
'source': 'states',
'layout': {},
'paint': {
'fill-color': '#627BC1',
'fill-opacity': [
'case',
['boolean', ['feature-state', 'hover'], false],
1,
0.5
]
}
});
 
map.addLayer({
'id': 'state-borders',
'type': 'line',
'source': 'states',
'layout': {},
'paint': {
'line-color': '#627BC1',
'line-width': 2
}
});
 
// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.
map.on('mousemove', 'state-fills', (e) => {
if (e.features.length > 0) {
if (hoveredStateId !== null) {
map.setFeatureState(
{ source: 'states', id: hoveredStateId },
{ hover: false }
);
}
hoveredStateId = e.features[0].id;
map.setFeatureState(
{ source: 'states', id: hoveredStateId },
{ hover: true }
);
}
});
 
// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature.
map.on('mouseleave', 'state-fills', () => {
if (hoveredStateId !== null) {
map.setFeatureState(
{ source: 'states', id: hoveredStateId },
{ hover: false }
);
}
hoveredStateId = null;
});
});

