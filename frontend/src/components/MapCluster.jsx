// import React from 'react';
// import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const MapCluster = ({ data }) => (
//   <MapContainer center={[-2.5, 117]} zoom={5} style={{ height: "400px" }}>
//     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     {data.map((item, idx) => (
//       <CircleMarker
//         key={idx}
//         center={[item.lat, item.lon]} // Coordinates for the marker
//         radius={10}
//         fillOpacity={0.6}
//         color={item.clusterColor}
//       >
//         <Tooltip>{item.province}</Tooltip>
//       </CircleMarker>
//     ))}
//   </MapContainer>
// );

// export default MapCluster;
import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapCluster = ({ data }) => (
  <MapContainer center={[-2.5, 117]} zoom={5} style={{ height: "600px", width: "100%" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

    {data.map((item, idx) => (
      <CircleMarker
        key={idx}
        center={[item.lat, item.lon]}
        radius={10}
        fillOpacity={0.6}
        color={item.clusterColor}
      >
        <Popup>
          <strong>{item.provinsi}</strong><br />
          IPM: {item.ipm}<br />
          AHH: {item.ahh}<br />
          AHS: {item.ahs}<br />
          RLS: {item.rls}<br />
          Pengeluaran: {item.ppk}<br />
          Cluster: {item.cluster}
        </Popup>
      </CircleMarker>
    ))}
  </MapContainer>
);

export default MapCluster;

