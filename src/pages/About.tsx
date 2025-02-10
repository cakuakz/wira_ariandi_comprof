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
        image: "/org_person_topright.svg",
        name: "Full name",
        title: "Job title",
      },
      {
        image: "/org_person_topleft.svg",
        name: "Full name",
        title: "Job title",
      },
    ],
    // Row 2
    [
      {
        image: "/org_person_midright.svg",
        name: "Full name",
        title: "Job title",
      },
      {
        image: "/org_person_midmiddle.svg",
        name: "Full name",
        title: "Job title",
      },
      {
        image: "/org_person_midleft.svg",
        name: "Full name",
        title: "Job title",
      },
    ],
    // Row 3
    [
      {
        image: "/org_person_botright.svg",
        name: "Full name",
        title: "Job title",
      },
      {
        image: "/org_person_botslightright.svg",
        name: "Full name",
        title: "Job title",
      },
      {
        image: "/org_person_botslightleft.svg",
        name: "Full name",
        title: "Job title",
      },
      {
        image: "/org_person_botleft.svg",
        name: "Full name",
        title: "Job title",
      },
    ],
  ]

  return (
    <BaseLayout
      title="Organisasi - PT Wira Ariandi Group"
      description="Organization of PT Wira Ariandi Group"
    >
      <div className="relative flex flex-col max-w-screen">
        <div className="flex flex-col items-center text-center pt-64 pb-32 max-w-screen w-full px-5 lg:px-20 about-banner">
          <div className="max-w-3xl w-full" data-aos="fade-up">
            <p className="text-[40px] font-semibold mb-6">Struktur dan Anak Perusahaan</p>
            <p className="text-lg leading-[150%] font-normal mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
            <MainButton text="Selengkapnya" />
          </div>
        </div>

        <div className="text-center mx-auto px-5 py-24 lg:px-20 lg:py-28">
          <div className="text-center mb-16" data-aos="fade-left">
            <p className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl max-w-5xl mx-auto leading-relaxed">
              Struktur Organisasi
            </p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="space-y-16">
            {/* Row 1 - 2 people */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

            {/* Row 3 - 4 people */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamPict[2].map((member, index) => (
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

        <div className="flex flex-col items-center text-center pt-28 space-y-6 px-5">
          <p className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl max-w-5xl mx-auto leading-relaxed">
            Anak Perusahaan
          </p>
          <p className="max-w-2xl text-lg font-normal">
            PT Wira Ariandi Group memiliki dua anak perusahaan yang bergerak di bidang perdagangan
            BBM
          </p>
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center mx-auto space-y-11 lg:space-y-0 lg:space-x-8 px-5 lg:px-20">
          <div className="flex flex-col items-center" data-aos="fade-right">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738773377/wira_ariandi_placeholder_dzucqt.png" />
            <div className="pt-8 flex flex-col items-center text-center">
              <p className="text-4xl font-bold mb-3">PT Wira Ariandi</p>
              <p className="text-lg font-normal mb-6">Trading BBM</p>
              <MainButton
                text="Lihat Lebih Detail"
                onClick={() => {
                  navigate("/organisasi/pt-wira-ariandi");
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-left">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738780564/wira_ariandi_utama_placeholder_c0fnfm.png" />
            <div className="pt-8 flex flex-col items-center text-center">
              <p className="text-4xl font-bold mb-3">PT Wira Ariandi Utama</p>
              <p className="text-lg font-normal mb-6">Transport BBM</p>
              <MainButton
                text="Lihat Lebih Detail"
                onClick={() => {
                  navigate("/organisasi/pt-wira-ariandi-utama");
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-11 lg:mt-20 flex items-center mx-auto pb-28 px-5">
          <div className="flex flex-col items-center" data-aos="fade-right">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738773377/wira_ariandi_placeholder_dzucqt.png" />
            <div className="pt-8 flex flex-col items-center text-center">
              <p className="text-4xl font-bold mb-3">PT Etam Wira Utama</p>
              <p className="text-lg font-normal mb-6">Trading BBM</p>
              <MainButton 
                text="Lihat Lebih Detail"
                onClick={() => {
                  navigate("/organisasi/pt-etam-wira-utama")
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
