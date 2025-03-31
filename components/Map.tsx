"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Icon } from "leaflet";

const custom = () => {
  const marker = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>`;

  const iconUrl = `data:image/svg+xml;base64,${btoa(marker)}`; // Convert the SVG to a base64 string

  return new Icon({
    iconUrl: iconUrl, // Use the base64 encoded SVG as the icon
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point for the icon
    popupAnchor: [0, -32], // Anchor point for the popup
  });
};

const Map = () => {
  const marker = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>`;
  const lat = 24.184854190959463;
  const lng = 55.65185779014303;
  const googleMapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
  return (
    <MapContainer
      className="w-full h-[400px] rounded-lg"
      center={[lat, lng]} // Replace with your actual location
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={custom()}>
        <Tooltip permanent direction="bottom" offset={[0, 20]}>
          <Link href={googleMapsLink}> Open in Google Maps</Link>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
