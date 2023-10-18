import React from "react";
import "./App.css";
import Map from "./Map/Map";
import "leaflet/dist/leaflet.css";
import "antd/dist/reset.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

function App() {
  return <Map classname="leaflet-container" />;
}

export default App;
