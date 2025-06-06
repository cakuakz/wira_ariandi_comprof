import { useNavigate } from "react-router";
import MainButton from "../components/home/home-button";
import BaseLayout from "../layout/base-layout";
import CloudinaryImg from "../utils/helper/use-cloudinary-img";

export default function About() {
  const navigate = useNavigate();

  const teamPict = [
    // Row 1
    [
      {
        image: "/org_prof_pict.svg",
        name: "Danu Saputro",
        title: "Direktur Utama",
      },
    ],
    // Row 2
    [
      {
        image: "/org_prof_pict.svg",
        name: "Arie Priangga P.",
        title: "Direktur 1",
      },
      {
        image: "/org_prof_pict.svg",
        name: "Donny Wira A.",
        title: "Direktur 2",
      },
      {
        image: "/org_prof_pict.svg",
        name: "Yudi Normandi",
        title: "Direktur 3",
      },
    ],
  ];

  return (
    <BaseLayout
      title="Organisasi - PT Wira Ariandi Group"
      description="Organization of PT Wira Ariandi Group"
    >
      <div className="relative flex flex-col max-w-screen">
        <div className="flex flex-col items-center text-center pt-64 pb-32 max-w-screen w-full px-5 lg:px-20 about-banner">
          <div className="max-w-3xl w-full" data-aos="fade-up">
            <h1 className="text-[40px] md:text-[56px] font-semibold mb-6">Struktur dan Anak Perusahaan</h1>
            <p className="text-lg leading-[150%] font-normal mb-10">
              “Distributing Energy, Empowering the Nation, Reaching the World”
            </p>
            <MainButton text="Selengkapnya" />
          </div>
        </div>

        <div className="text-center mx-auto px-5 py-24 lg:px-20 lg:py-28">
          <div className="text-center mb-16" data-aos="fade-left">
            <h2 className="radial_sub_title max-w-5xl">Struktur Organisasi</h2>
            <p className="text-gray-400">
              Struktur Organisasi Perusahaan yang Mendukung Operasi Transportasi BBM
            </p>
          </div>

          <div className="space-y-16">
            {/* Row 1 - 2 people */}
            <div className="grid grid-cols-1 gap-8 sm:max-w-[298px] mx-auto">
              {teamPict[0].map((member, index) => (
                <div key={index} className="text-center" data-aos="fade-up">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-gray-400">{member.title}</p>
                </div>
              ))}
            </div>

            {/* Row 2 - 3 people */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamPict[1].map((member, index) => (
                <div key={index} className="text-center" data-aos="fade-up">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-gray-400">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center pt-14 lg:pt-28 space-y-6 px-5">
          <h2 className="radial_sub_title max-w-5xl">Anak Perusahaan</h2>
          <p className="max-w-2xl text-lg font-normal">
            PT Wira Ariandi Group memiliki dua anak perusahaan yang bergerak di bidang perdagangan
            BBM
          </p>
        </div>

        <div className="mt-20 mb-14 lg:mb-28 flex flex-col lg:flex-row items-stretch justify-center mx-auto space-y-11 lg:space-y-0 lg:space-x-8 px-5 lg:px-20">
          <div className="flex flex-col items-center text-center flex-1" data-aos="fade-right">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738773377/wira_ariandi_placeholder_dzucqt.png" height={280} width={405} />
            <div className="pt-8 flex flex-col items-center justify-between flex-1 text-center">
              <div className="flex flex-col h-full justify-center">
                <h3 className="text-4xl font-bold mb-3">PT Wira Ariandi</h3>
                <p className="text-lg font-normal mb-6">INU BBM</p>
              </div>
              <MainButton
                text="Lihat Lebih Detail"
                onClick={() => {
                  navigate("/organisasi/pt-wira-ariandi");
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center flex-1" data-aos="fade-left">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738780564/wira_ariandi_utama_placeholder_c0fnfm.png" height={280} width={405} />
            <div className="pt-8 flex flex-col items-center justify-between flex-1 text-center">
              <div className="flex flex-col h-full justify-center">
                <h3 className="text-4xl font-bold mb-3">PT Wira Ariandi Utama</h3>
                <p className="text-lg font-normal mb-6">Transport BBM</p>
              </div>
              <MainButton
                text="Lihat Lebih Detail"
                onClick={() => {
                  navigate("/organisasi/pt-wira-ariandi-utama");
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center flex-1" data-aos="fade-right">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738773377/wira_ariandi_placeholder_dzucqt.png" height={280} width={405} />
            <div className="pt-8 flex flex-col items-center justify-between flex-1 text-center">
              <div className="flex flex-col h-full justify-center">
                <h3 className="text-4xl font-bold mb-3">PT Etam Wira Utama</h3>
                <p className="text-lg font-normal mb-6">Distributor Pelumas</p>
              </div>
              <MainButton
                text="Lihat Lebih Detail"
                onClick={() => {
                  navigate("/organisasi/pt-etam-wira-utama");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
