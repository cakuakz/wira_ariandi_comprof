import BaseLayout from "../layout/base-layout";
import { Phone } from "lucide-react";
import { locations } from "../utils/static/location-data";
import MapComponent from "../components/map";
import { useState } from "react";

export default function Contact() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([-7.2754438, 112.7425567]); // Default to Surabaya

  const handleLocationClick = (coordinates: [number, number]) => {
    setMapCenter(coordinates);
  };

  return (
    <BaseLayout
      title="Profil - PT Wira Ariandi Group"
      description="Profile of PT Wira Ariandi Group"
    >
      <div className="flex flex-col px-5 py-20 lg:px-20 lg:pb-28 lg:pt-40">
        <h1 className="text-4xl font-light mb-20">Hubungi Kami</h1>
        <div className="flex items-start justify-between">
          <div className="space-y-8">
            {locations.map((location) => (
              <div
                key={location.name}
                className="space-y-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleLocationClick(location.coordinates as [number, number])}
              >
                <h2 className="text-xl font-medium">{location.name}</h2>
                <p className="text-gray-400">{location.address}</p>
                {location.phone && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>Telp. {location.phone}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <MapComponent center={mapCenter} />
        </div>
      </div>
    </BaseLayout>
  );
}
