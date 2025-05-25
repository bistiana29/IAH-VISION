import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapCluster = ({ data }) => (
  <MapContainer center={[-2.5, 117]} zoom={5} style={{ height: "400px" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {data.map((item, idx) => (
      <CircleMarker
        key={idx}
        center={[item.lat, item.lon]} // Coordinates for the marker
        radius={10}
        fillOpacity={0.6}
        color={item.clusterColor}
      >
        <Tooltip>{item.province}</Tooltip>
      </CircleMarker>
    ))}
  </MapContainer>
);

export default MapCluster;
