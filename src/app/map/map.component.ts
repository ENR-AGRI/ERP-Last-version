import { AfterViewInit, Component, OnInit } from "@angular/core";
import { GeoJsonTypes } from "geojson";
import { latLng, LeafletMouseEvent, tileLayer } from "leaflet";
import * as L from "leaflet";
import * as data from "../bienvenu/data.json";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent {
  // map;
  // //source de donnees :
  // //https://www.youtube.com/watch?v=lAJJGNo-qY0&list=PLBq3aRiVuwyxK1Bjykah7PP3B2BLoJjM3
  // //https://github.com/gregoiredavid/france-geojson/tree/master/regions/nouvelle-aquitaine
  // smallIcon = new L.Icon({
  //   iconUrl:
  //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
  //   iconRetinaUrl:
  //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
  //   iconSize: [25, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   shadowUrl:
  //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  //   shadowSize: [41, 41],
  // });
  // constructor() {}
  // ngAfterViewInit(): void {
  //   this.createMap();
  // }
  // createMap() {
  //   const parcThabor = {
  //     // lat: 48.114384,
  //     // lng: -1.669494,
  //     lat: 45.8353,
  //     lng: 1.2625004,
  //   };
  //   const zoomLevel = 12;
  //   // this.map = L.map('map', {
  //   //   center: [parcThabor.lat, parcThabor.lng],
  //   //   zoom: zoomLevel,
  //   // });
  //   var map = L.map("map").setView([parcThabor.lat, parcThabor.lng], zoomLevel);
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     id: "mapbox/light-v9",
  //     attribution:
  //       '&copy; <a href="http://www.openlayers.org/api/OpenLayers.js">OpenStreetMap</a> contributors',
  //     tileSize: 512,
  //     zoomOffset: -1,
  //   }).addTo(map);
  //   // On dessine le polygone
  //   let geojsonLayer = L.geoJSON(this.nvequiteneData, {
  //     style: {
  //       color: "red",
  //       opacity: 1,
  //       weight: 1,
  //       fillColor: "#839c49",
  //       fillOpacity: 0.5,
  //     },
  //   });
  //   // On ajoute une popup
  //   geojsonLayer.bindPopup("nouvelle aquitene");
  //   // On ajoute à la carte
  //   geojsonLayer.addTo(map);
  // }
  // nvequiteneData: any = data;
}
