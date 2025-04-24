import CustomBadge from "../components/home/badge";
import CloudinaryImg from "../utils/helper/use-cloudinary-img";
import MainButton from "../components/home/home-button";
import BaseLayout from "../layout/base-layout";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const missionCards = [
    {
      icon: <img src="/gas-station-new.svg" className="size-11" />,
      text: "Menyediakan solusi supply dan distribusi energi yang aman, andal, dan tepat waktu",
    },
    {
      icon: <img src="/ship-icon.svg" className="size-11" />,
      text: "Mendukung kebutuhan industri nasional melalui pengelolaan logistik energi yang profesional",
    },
    {
      icon: <img src="/globe-icon.svg" className="size-11" />,
      text: "Memperluas jaringan distribusi dengan standar global untuk menjangkau pasar internasional",
    },
    {
      icon: <img src="/mdi_partnership.svg" className="size-11" />,
      text: "Menjaga integritas dan kepercayaan pelanggan melalui layanan yang transparan dan berkualitas tinggi",
    },
    {
      icon: <img src="/solid-fist.svg" className="size-11" />,
      text: "Mengedepankan nilai nasionalisme dalam setiap langkah bisnis untuk mendorong pertumbuhan ekonomi Indonesia",
    },
  ];

  return (
    <BaseLayout
      title="Home Page - PT Wira Ariandi Group"
      description="Welcome to PT Wira Ariandi Group's homepage."
    >
      <>
        <div className="pb-32 pt-64 max-w-screen w-full px-5 lg:px-20 home-banner">
          <h1
            className="text-[40px] md:text-[64px] font-semibold mb-6 max-w-[800px]"
            data-aos="fade-right"
          >
            Distributing Energy, Empowering the Nation, Reaching the World
          </h1>
          <MainButton
            text="Selengkapnya"
            onClick={() => navigate("/organisasi")}
            dataAos="fade-right"
          />
        </div>

        <div
          className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-24 lg:py-32 px-5 lg:px-20"
          data-aos="fade-up"
        >
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738596543/home_ship_1_dfemud.svg"
            className="rounded-sm"
          />
          <div className="flex flex-col items-start text-start">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F4] to-[#6A6A6A] text-5xl font-medium mb-6 leading-[120%]">
              Tentang Kami
            </h2>
            <p className="text-lg font-normal leading-[150%] text-[#C1C1C1]">
              Wira Ariandi Group adalah perusahaan penyedia dan distribusi energi yang berdedikasi
              dalam mendukung kebutuhan industri melalui layanan supply dan transportasi oil & gas.
              Kami hadir sebagai mitra terpercaya dalam menjaga kelancaran rantai pasok energi —
              dari sumber terbaik hingga ke tangan pelanggan — dengan mengutamakan keandalan,
              keamanan, dan ketepatan waktu.
              <br />
              <br />
              Sejak berdiri, Wira Ariandi Group terus berkomitmen memperkuat peran dalam mendukung
              pertumbuhan ekonomi nasional sekaligus memperluas jaringan distribusi ke pasar global.
              Dengan infrastruktur yang terintegrasi, armada transportasi yang handal, serta sumber
              daya manusia berpengalaman, kami memastikan setiap proses berjalan sesuai standar
              keselamatan dan kualitas internasional.
              <br />
              <br />
              Di tengah dinamika kebutuhan energi dunia, kami percaya bahwa kolaborasi, inovasi, dan
              dedikasi adalah kunci untuk menghadirkan solusi terbaik bagi mitra dan bangsa.
            </p>
          </div>
        </div>

        <div className="mx-auto space-y-20 py-12 lg:py-28 px-5 lg:px-20">
          <div className="text-center space-y-6">
            <CustomBadge title="VISI" />
            <p
              className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-lg md:text-xl lg:text-4xl max-w-5xl mx-auto leading-relaxed"
              data-aos="zoom-in"
            >
              Menjadi perusahaan supply dan distribusi energi kelas dunia yang mendukung pertumbuhan
              ekonomi nasional, memperkuat konektivitas global, dan menjadi mitra strategis dalam
              mewujudkan ketahanan energi
            </p>
          </div>

          <div className="space-y-6 w-full">
            <div className="text-center">
              <CustomBadge title="MISI" />
            </div>

            {/* First grid: up to 3 items */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {missionCards.slice(0, 3).map((card, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 text-center space-y-4 max-w-[330px] w-full"
                    data-aos="fade-up"
                  >
                    <div className="flex justify-center">{card.icon}</div>
                    <p className="text-sm md:text-xl">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second grid: next 2 or 3 items, centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {missionCards.slice(3, 6).map((card, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 text-center space-y-4 max-w-[330px] w-full"
                    data-aos="fade-up"
                  >
                    <div className="flex justify-center">{card.icon}</div>
                    <p className="text-sm md:text-xl">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-20 items-center py-12 lg:py-28 px-5 lg:px-20">
          <p className="max-w-3xl radial_sub_title text-center">
            Layanan Kami Menjangkau Seluruh Indonesia dengan Dedikasi Terbaik
          </p>
          <div className="max-w-4xl">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738687987/world_map_png_b5fn7g.png" />
          </div>
        </div>

        <div className="w-full mx-auto px-5 lg:px-20 py-12 lg:py-28">
          <div className="relative flex flex-col md:flex-row items-center justify-between bg-zinc-900/50 rounded-2xl p-8 md:px-20 md:py-28 border border-zinc-800 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F9F9F9] to-[#6A6A6A] lg:text-4xl font-semibold py-1">
                Hubungi Kami untuk Solusi Terbaik
              </h2>
              <p className="mt-4 text-gray-400 text-sm md:text-lg">
                Silakan klik tombol di samping untuk berkomunikasi dengan kami dan mendapatkan
                penjelasan atau bantuan terkait kebutuhan Anda
              </p>
            </div>
            <div className="flex mt-10 lg:mt-0 justify-center md:justify-end w-full md:w-auto">
              <MainButton
                text="Hubungi Kami"
                onClick={() => {
                  navigate("/kontak");
                }}
              />
            </div>
          </div>
        </div>
      </>
    </BaseLayout>
  );
}
