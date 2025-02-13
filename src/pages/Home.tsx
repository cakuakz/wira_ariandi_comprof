import CustomBadge from "../components/home/badge";
import CloudinaryImg from "../utils/helper/use-cloudinary-img";
import MainButton from "../components/home/home-button";
import BaseLayout from "../layout/base-layout";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const missionCards = [
    {
      icon: <img src="/gas-station.svg" />,
      text: "Perusahaan trading BBM dan Transportir multi nasional di Indonesia",
    },
    {
      icon: <img src="/dollar-circle.svg" />,
      text: "Membantu pelanggan dalam meningkatkan kinerja dan keuntungan",
    },
    {
      icon: <img src="/mdi_partnership.svg" />,
      text: "Mengembangkan pelayanan pelanggan/ mitra kerja",
    },
    {
      icon: <img src="/fluent_brain.svg" />,
      text: "Meningkatkan profesional SDM perusahaan menjadi lebih berkualitas",
    },
  ];

  return (
    <BaseLayout
      title="Home Page - PT Wira Ariandi Group"
      description="Welcome to PT Wira Ariandi Group's homepage."
    >
      <>
        <div className="pb-32 pt-64 max-w-screen w-full px-5 lg:px-20 home-banner">
          <h1 className="text-[40px] font-semibold mb-6 max-w-[600px]" data-aos="fade-right">
            Memenuhi Kebutuhan Masa Depan Secara Berkelanjutan
          </h1>
          <p
            className="text-lg leading-[150%] font-normal mb-10 max-w-[672px]"
            data-aos="fade-right"
          >
            Mengoptimalkan transportasi BBM untuk efisiensi dan keberlanjutan
          </p>
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
              Kami merupakan perusahaan swasta nasional yang bergerak khusus dibidang perdagangan
              bahan bakar minyak industri yang mencakup seluruh wilayah Indonesia. Perusahaan ini
              telah berdiri sejak 27 Agustus 1997 dan telah memiliki Izin Usaha Niaga Umum (INU)
              dari BPH Migas.
              <br />
              <br />
              PT Wira Ariandi telah melayani pelanggan diseluruh wilayah Indonesia. Perusahaan Kami
              bekerja sesuai target yang ditetapkan pelanggan demi menjamin kinerja operasional
              pelanggan. Tepat waktu dan akurat adalah satu bagian terpenting dari misi kami.
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
              Sebuah perusahaan yang mandiri, profesional, berkualitas serta berkomitmen terhadap
              pelanggan dan mitra kerja untuk suatu hasil yang maksimal dan menguntungkan
            </p>
          </div>

          <div className="space-y-6 w-full">
            <div className="text-center">
              <CustomBadge title="MISI" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {missionCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 w-full text-center space-y-4"
                  data-aos="fade-up"
                >
                  <div className="flex justify-center">{card.icon}</div>
                  <p className="text-sm md:text-xl">{card.text}</p>
                </div>
              ))}
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
