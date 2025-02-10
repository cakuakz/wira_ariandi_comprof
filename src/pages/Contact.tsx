import BaseLayout from "../layout/base-layout";
import { MapPinned } from "lucide-react";
import { locations } from "../utils/static/location-data";
import MapComponent from "../components/map";
import { useState } from "react";

export default function Contact() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([-7.2754438, 112.7425567]); // Default to Surabaya
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null); // Track selected location

  const handleLocationClick = (coordinates: [number, number], name: string) => {
    setMapCenter(coordinates);
    setSelectedLocation(name);
  };

  return (
    <BaseLayout
      title="Profil - PT Wira Ariandi Group"
      description="Profile of PT Wira Ariandi Group"
    >
      <div className="flex flex-col px-5 py-20 lg:px-20 lg:pb-28 lg:pt-40">
        <div className="mt-24 mb-14 lg:mb-20">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F4] to-[#6A6A6A] font-medium text-4xl lg:text-5xl leading-relaxed">
            Hubungi Kami
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-20 lg:space-y-0">
          <div className="space-y-8">
            {locations.map((location) => (
              <div
                key={location.name}
                className="space-y-2 cursor-pointer hover:opacity-80 transition-opacity group"
                onClick={() => handleLocationClick(location.coordinates as [number, number], location.name)}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <h2 className="text-xl font-medium border-b-0 border-b-[#F6F6F6] hover:border-b transition-opacity duration-100 ease-in-out group-hover:border-b">
                    {location.name}
                  </h2>
                  <MapPinned
                    className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      selectedLocation === location.name ? "opacity-100" : ""
                    }`}
                  />
                </div>
                <p className="text-gray-400">{location.address}</p>
                {location.phone && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <img src="/phone-call-twotone.svg" loading="lazy" />
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
