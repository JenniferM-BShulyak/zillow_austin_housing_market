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