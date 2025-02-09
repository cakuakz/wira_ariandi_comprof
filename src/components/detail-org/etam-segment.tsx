import CloudinaryImg from "../../utils/helper/use-cloudinary-img";
import { segments } from "../../utils/static/etam-segments-data";

export default function EtamSegment({ segment }: { segment: string }) {
  const territories = [
    {
      number: "1",
      name: "Territory Tarakan ( Head Office )",
      details: [
        "Jumlah Register Outlet ( RO ) : 300 Outlet",
        "- Kota Tarakan : 201 Outlet",
        "- Kab Tana Tidung : 8 Outlet",
        "- Kab Nunukan : 91 Outlet",
      ],
    },
    {
      number: "2",
      name: "Territory Berau ( Branch Office )",
      details: [
        "Jumlah Register Outlet ( RO ) : 273 Outlet",
        "- Kab Berau : 139 Outlet",
        "- Kab Bulungan : 80 Outlet",
        "- Kab Malinau : 55 Outlet",
      ],
    },
  ];

  const segmentTitles: Record<string, string> = {
    mining: "Segmen Mining",
    agro: "Segmen Agro",
    marine: "Segmen Marine",
  };

  return segment === "retail" ? (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center space-x-0 space-y-8 lg:space-y-0 lg:space-x-20">
      <CloudinaryImg
        src="https://res.cloudinary.com/rafirfansyah/image/upload/v1739109720/pt_etam_wira_operasi_daerah_qar3kn.png"
        className="rounded-sm max-w-[512px]"
      />
      <div className="w-fit space-y-8">
        {territories.map((territory) => (
          <div key={territory.number} className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-800 flex items-center justify-center">
                <span className="text-white font-medium">{territory.number}</span>
              </div>
              <h3 className="text-xl font-medium">{territory.name}</h3>
            </div>
            <div className="ml-12 space-y-2">
              {territory.details.map((detail, index) => (
                <p key={index} className={`text-gray-400 ${index === 0 ? "text-white" : ""}`}>
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(segments).map(([key, companies], index) => (
        <div key={key} className="flex flex-col max-w-[410px] w-full space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center text-sm sm:text-base">
              {index + 1}
            </span>
            <h2 className="text-lg sm:text-xl font-semibold">{segmentTitles[key]}</h2>
          </div>
          <ul className="space-y-2 text-xs sm:text-lg text-gray-400">
            {companies.map((company, idx) => (
              <li
                key={idx}
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
