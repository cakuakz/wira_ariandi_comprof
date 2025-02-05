import { useNavigate } from "react-router";
import MainButton from "../components/home/home-button";
import BaseLayout from "../layout/base-layout";
import CloudinaryImg from "../utils/helper/use-cloudinary-img";

export default function About() {
  const navigate = useNavigate();

  return (
    <BaseLayout
      title="Organisasi - PT Wira Ariandi Group"
      description="Organization of PT Wira Ariandi Group"
    >
      <div className="relative flex flex-col max-w-screen">
        <div className="flex flex-col items-center text-center pt-64 pb-32 max-w-screen w-full px-5 lg:px-20 about-banner">
          <div className="max-w-3xl w-full">
            <p className="text-[40px] font-semibold mb-6">Struktur dan Anak Perusahaan</p>
            <p className="text-lg leading-[150%] font-normal mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
            <MainButton text="Selengkapnya" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center pt-28 space-y-6">
          <p className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-lg md:text-xl lg:text-4xl max-w-5xl mx-auto leading-relaxed">
            Anak Perusahaan
          </p>
          <p className="max-w-2xl text-lg font-normal">
            PT Wira Ariandi Group memiliki dua anak perusahaan yang bergerak di bidang perdagangan
            BBM
          </p>
        </div>

        <div className="mt-20 flex items-center mx-auto space-x-8 px-20">
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
        <div className="mt-20 flex items-center mx-auto pb-28">
          <div className="flex flex-col items-center">
            <CloudinaryImg src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738773377/wira_ariandi_placeholder_dzucqt.png" />
            <div className="pt-8 flex flex-col items-center text-center">
              <p className="text-4xl font-bold mb-3">PT Wira Ariandi</p>
              <p className="text-lg font-normal mb-6">Trading BBM</p>
              <MainButton text="Lihat Lebih Detail" />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
