"use strict";

console.log("Just Works-Loaded map.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxva2luMTExMiIsImEiOiJja2lqNGZuNmwxa2M0MnFxdXJ5OXc3eXVpIn0.0WtHKNwYRMHWYT2NQ-d35g";

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/alokin1112/ckij6szdv6jv91atbnhdp3ozs",
  center: [16.919319896696635, 52.409675834353195],
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

geolocate.on("geolocate", (e) => {
  let lng = e.coords.longitude;
  let lat = e.coords.latitude;
  console.log("geo", lng, " ", lat);
  document.getElementById("info").innerHTML =
    lng.toFixed(5) + ", " + lat.toFixed(5);
});
map.on("click", (e) => {
  let lng = e.lngLat.lng;
  let lat = e.lngLat.lat;
  console.log("map", lng, " ", lat);
  document.getElementById("info").innerHTML =
    lng.toFixed(5) + ", " + lat.toFixed(5);
});

let marker = new mapboxgl.Marker();
marker.setLngLat([16.9193, 52.4096]);
marker.addTo(map);
let popup = new mapboxgl.Popup().setHTML(
  "<p>Uniwersytet</p><p>ul. Fredry 10</p>" +
    '<img src="https://amu.edu.pl/__data/assets/image/0014/24413/WFPIK-siedziba.jpg"/>'
);
marker.setPopup(popup);

const downloadImg = () => {
  const img = map.getCanvas().toDataURL("image/png");
  this.href = img;
};
document.getElementById("downloadLink").onClick = downloadImg();
