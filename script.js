const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic29uaG9hbmc5NSIsImEiOiJPM2dpUHRvIn0.34xa7D2hue6sjT3nvaA-eA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });
  map.addControl(directionControls, "top-left");
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-122.41, 37.77]);
}
