"use strict";

console.log("Just Works-Loaded map.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxva2luMTExMiIsImEiOiJja2lqNGZuNmwxa2M0MnFxdXJ5OXc3eXVpIn0.0WtHKNwYRMHWYT2NQ-d35g";

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/alokin1112/ckij6szdv6jv91atbnhdp3ozs",
  center: [-73.96216, 40.80779],
  zoom: 16,
  pitch: 45,
  preserveDrawingBuffer: true,
});
let navigation = new mapboxgl.NavigationControl({
  showCompass: false,
});
map.addControl(navigation, "top-left");
let scale = new mapboxgl.ScaleControl({
  maxWidth: 80,
  unit: "imperial",
});
map.addControl(scale, "bottom-right");

let geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
  showUserLocation: true,
  fitBoundsOptions: {},
});
map.addControl(geolocate, "top-left");

geolocate.on("geolocate", (e) => {});
