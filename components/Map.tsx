"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      className="w-full h-[400px] rounded-lg"
      center={[51.505, -0.09]} // Replace with your actual location
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>📍 Visit us at our golf course!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
