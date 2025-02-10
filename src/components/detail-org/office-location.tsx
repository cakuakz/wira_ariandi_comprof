import CloudinaryImg from "../../utils/helper/use-cloudinary-img";
import { officeLocation } from "../../utils/static/etam-locations";

export default function OfficeLocation({ location }: { location: string }) {
  const officeData = officeLocation.find((data) => data.location === location);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-x-0 space-y-6 lg:space-y-0 lg:space-x-20">
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-2xl">{officeData?.location}</p>
        <div>
          <p className="font-medium text-base text-[#E2E2E2]">
            Address: {officeData?.address}
          </p>
          <p className="font-medium text-base text-[#E2E2E2]">Email : {officeData?.email}</p>
        </div>
        <div className="flex items-center space-x-6">
          <img src="/phone-call-twotone.svg" loading="lazy" />
          <p className="font-medium text-base text-[#E2E2E2]">Telp. {officeData?.phone ? officeData?.phone : "-"}</p>
        </div>
      </div>
      <CloudinaryImg
        src={officeData?.imgUrl || "https://res.cloudinary.com/rafirfansyah/image/upload/v1739128632/etam_wira_kantor_utama_kle7jb.png"}
        className="rounded max-w-[624px] w-full"
      />
    </div>
  );
}
