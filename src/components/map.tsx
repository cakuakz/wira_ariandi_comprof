"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locations } from "../utils/static/location-data";
import { useEffect, useState } from "react";

// Fix for default markers in react-leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function ChangeMapView({ coordinates }: { coordinates: [number, number] }) {
  const map = useMap();
  map.setView(coordinates, 13);
  return null;
}

interface MapComponentProps {
    center: [number, number]
}

export default function MapComponent({ center }: MapComponentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ height: "440px", width: "100%" }}></div>;
  }

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "440px", width: "672px" }}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker key={location.name} position={location.coordinates as [number, number]} icon={icon}>
          <Popup>
            <div className="text-black">
              <h3 className="font-medium">{location.name}</h3>
              <p className="text-sm">{location.address}</p>
              {location.phone && <p className="text-sm">Tel: {location.phone}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
      <ChangeMapView coordinates={center} />
    </MapContainer>
  );
}
