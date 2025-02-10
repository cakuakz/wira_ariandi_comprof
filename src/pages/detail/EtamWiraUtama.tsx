import CustomBadge from "../../components/home/badge";
import BaseLayout from "../../layout/base-layout";
import CloudinaryImg from "../../utils/helper/use-cloudinary-img";
import EtamSegment from "../../components/detail-org/etam-segment";
import { useState } from "react";
import AwardsCarousel from "../../components/detail-org/award-carousel";
import CustomButton from "../../components/home/custom-button";
import NumberContainer from "../../components/number-container";
import OfficeLocation from "../../components/detail-org/office-location";
import DetailOrgTitle from "../../components/detail-org/detail-org-title";
import { officeLocation } from "../../utils/static/etam-locations";

export default function EtamWiraUtama() {
  const [segments, setSegments] = useState("retail");
  const [office, setOffice] = useState("Kantor Pusat")
  const locations = officeLocation.map((office) => office.location);

  const missionCards = [
    {
      icon: <img src="/etam_wira_utama/arrow-growth.svg" />,
      title: "Inovasi Berkelanjutan",
      text: "Perusahaan trading BBM dan Transportir multi nasional di Indonesia",
    },
    {
      icon: <img src="/etam_wira_utama/customer-service-twotone.svg" />,
      title: "Pelayanan Terbaik",
      text: "Membantu pelanggan dalam meningkatkan kinerja dan keuntungan",
    },
    {
      icon: <img src="/etam_wira_utama/mdi_partnership_new.svg" />,
      title: "Tanggung Jawab Sosial & Lingkungan",
      text: "Mengembangkan pelayanan pelanggan/ mitra kerja",
    },
    {
      icon: <img src="/etam_wira_utama/brain-sparkle-20-filled.svg" />,
      title: "Pengembangan Sumber Daya Manusia",
      text: "Meningkatkan profesional SDM perusahaan menjadi lebih berkualitas",
    },
  ];

  const values = [
    {
      number: "1",
      title: "Integritas",
      description:
        "Kami menjunjung tinggi prinsip kejujuran, etika, dan transparansi dalam setiap tindakan. Seluruh karyawan wajib mematuhi norma-norma hukum dan etika yang berlaku dalam melakukan tugasnya",
    },
    {
      number: "2",
      title: "Komitmen Pelanggan",
      description:
        "Kami berfokus untuk memberikan layanan terbaik kepada pelanggan, memahami kebutuhan mereka, dan berupaya untuk melampaui harapan dengan solusi inovatif dan berkualitas tinggi",
    },
    {
      number: "3",
      title: "Kerja Sama Tim",
      description:
        "Kami percaya bahwa kerja sama tim adalah kunci keberhasilan. Kami mendukung komunikasi terbuka, kerja sama lintas departemen, dan menghargai setiap kontribusi yang diberikan oleh anggota tim.",
    },
    {
      number: "4",
      title: "Inovasi Berkelanjutan",
      description:
        "Kami mendorong inovasi dalam segala aspek operasi kami untuk memastikan keberlanjutan perusahaan. Kami berupaya untuk terus berkembang, menghadirkan solusi yang kreatif dan efisien dalam menghadapi tantangan bisnis.",
    },
    {
      number: "5",
      title: "Keberlanjutan dan Tanggung Jawab Sosial",
      description:
        "Kami berkomitmen untuk menjaga kelestarian lingkungan serta memberikan dampak positif bagi masyarakat melalui program-program tanggung jawab sosial perusahaan (CSR).",
    },
  ];

  const images = [
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109719/pt_etam_wira_dokum_1_oby6z0.png",
      alt: "Group photo with banner outdoors",
    },
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109718/pt_etam_wira_dokum_2_v1csaq.png",
      alt: "Indoor meeting presentation",
    },
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109718/pt_etam_wira_dokum_3_msfiki.png",
      alt: "Product gathering event",
    },
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109719/pt_etam_wira_dokum_4_rmkxox.png",
      alt: "Cross-border program event",
    },
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109719/pt_etam_wira_dokum_5_a8yahe.png",
      alt: "National K3 event",
    },
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109718/pt_etam_wira_dokum_6_q3giis.png",
      alt: "Industrial storage containers",
    },
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109718/pt_etam_wira_dokum_7_qwpfjv.png",
      alt: "Outdoor crane operation",
    },
    {
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1739109718/pt_etam_wira_dokum_8_ljnvpb.png",
      alt: "Industrial storage facility",
    },
  ];

  return (
    <BaseLayout
      title="PT Etam Wira Utama"
      description="Detail page about PT. Etam Wira Utama - Trading BBM"
    >
      <div>
        <div className="relative flex flex-col items-center pb-32 pt-64 max-w-screen w-full lg:px-20 etam-wira-banner">
          <DetailOrgTitle title="PT ETAM WIRA UTAMA" />
        </div>

        <div 
          className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-24 lg:py-32 px-5 lg:px-20"
          data-aos="fade-left"
        >
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1739109720/pt_etam_wira_detail_1_ghgnfb.png"
            className="rounded-sm grow"
          />
          <div className="flex flex-col items-start text-start grow">
            <p className="text-5xl font-medium mb-6 leading-14">Tentang Perusahaan</p>
            <p className="text-lg font-normal leading-[150%]">
              PT. ETAM WIRA UTAMA didirikan April tahun 2008 sebagai salah satu Distributor Resmi PT
              Pertamina Lubricants. Kantor pusat kami berada di Tarakan, Kalimantan Utara dengan
              satu kantor cabang pembantu di Berau Kalimantan Timur dan dua Kantor Representatif
              yaitu di Nunukan & Tg. Selor. Market kami pada Retail dan Industri. Dengan komitmen
              kami untuk memberikan nilai terbaik bagi customer kami sebagai mitra PT Pertamina
              Lubricants, sehingga secara berkala kami memperoleh penghargaan sebagai salah
              Distributor Terbaik dari Pertamina Lubricants.
            </p>
          </div>
        </div>

        <div className="mx-auto space-y-24 py-12 lg:py-28 px-5 lg:px-20">
          <div className="text-center space-y-6">
            <CustomBadge title="VISI" />
            <p 
              className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-lg md:text-xl lg:text-4xl max-w-5xl mx-auto leading-relaxed"
              data-aos="zoom-in"
            >
              Menjadi perusahaan terbaik dibidang Distribusi dan pelayanan yang berdampak positif
              bagi masyarakat dan lingkungan sekitar pada tahun 2030
            </p>
          </div>

          <div className="space-y-6 w-full">
            <div className="text-center">
              <CustomBadge title="MISI" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {missionCards.map((card, index) => (
                <div key={index} className="p-4 w-full text-start" data-aos="fade-up">
                  <div className="flex justify-start mb-6">{card.icon}</div>
                  <h1 className="text-xl font-semibold max-h-12 h-full">{card.title}</h1>
                  <p className="pt-6 text-sm md:text-base">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 w-full">
            <div className="text-center">
              <CustomBadge title="CORE VALUES" />
            </div>
            <div className="text-white">
              <div className="max-w-7xl mx-auto space-y-0 lg:space-y-16">
                {/* First row - Points 1, 2, 3 */}
                <div className="flex flex-col md:flex-row md:justify-center space-x-0 md:space-x-8">
                  {values.slice(0, 3).map((value) => (
                    <div key={value.number} className="relative max-w-[404px] w-full">
                      <div className="flex items-start gap-4 p-4">
                        <NumberContainer number={value.number} />
                        <div className="space-y-2">
                          <h3 className="text-xl font-medium flex items-center gap-2">
                            {value.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Second row - Points 4, 5 */}
                <div className="flex flex-col md:flex-row md:justify-center space-x-0 md:space-x-8">
                  {values.slice(3).map((value) => (
                    <div key={value.number} className="relative max-w-[404px] w-full">
                      <div className="flex items-start gap-4 p-4">
                        <NumberContainer number={value.number} />
                        <div className="space-y-2">
                          <h3 className="text-xl font-medium flex items-center gap-2">
                            {value.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8 lg:space-y-20 py-24 lg:py-28 px-5 lg:px-20" data-aos="fade-up">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F4] to-[#6A6A6A] font-medium text-4xl lg:text-5xl leading-relaxed">
            Coverage Area
          </p>
          <div className="w-full flex flex-col lg:flex-row lg:justify-center items-center space-x-0 space-y-6 lg:space-y-0 lg:space-x-11">
            <CustomButton
              text="Segmen Retail"
              className="w-full lg:w-fit"
              onClick={() => setSegments("retail")}
              isActive={Boolean(segments === "retail")}
            />
            <CustomButton
              text="Segmen Industri"
              className="w-full lg:w-fit"
              onClick={() => setSegments("industri")}
              isActive={Boolean(segments === "industri")}
            />
          </div>
          <EtamSegment segment={segments} />
        </div>

        <div 
          className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-24 lg:py-32 px-5 lg:px-20"
        >
          <div className="flex flex-col items-start text-start grow" data-aos="fade-right">
            <p className="text-5xl font-medium mb-6 leading-14">Ketersediaan Sumber Daya</p>
            <p className="text-lg font-normal leading-[150%]">
              PT Etam Wira Utama memastikan ketersediaan sumber daya baika secara personal karyawan
              maupun secara peralatan Perusahaan yang cukup untuk mendukung dan menunjang proses
              bisnis demi pencapaian tujuan perusahaan. Pemantauan berkala terhadap ketersediaan
              sumber daya akan dilakukan untuk menghindari kekurangan yang dapat mengganggu
              operasional perusahaan.
            </p>
          </div>
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1739109720/pt_etam_wira_sumberdaya_wej45o.png"
            className="rounded-sm grow"
          />
        </div>

        <div 
          className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-24 lg:py-32 px-5 lg:px-20"
          
        >
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1739109720/pt_etam_wira_core_business_ujhl3h.png"
            className="rounded-sm grow"
          />
          <div className="flex flex-col items-start text-start grow" data-aos="fade-left">
            <p className="text-5xl font-medium mb-6 leading-14">Core Business</p>
            <p className="text-lg font-normal leading-[150%]">
              Core business PT Etam Wira Utama selalu memperkuat posisi perusahaan di pasar pelumas,
              baik di coverage area maupun diluar coverage area, dengan fokus pada pelayanan
              customer dan efisiensi operasional. Evaluasi berkala akan dilakukan untuk memastikan
              keberhasilan implementasi program dan inisiatif yang telah ditetapkan.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8 lg:space-y-0 py-24 lg:py-28 px-5">
          <div className="flex flex-col items-center text-center mb-20">
            <p className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl mx-auto leading-relaxed">
              Dokumentasi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <CloudinaryImg
                  src={image.src || "/placeholder.svg"}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <AwardsCarousel />
        </div>

        <div 
          className="flex flex-col space-y-20 py-24 lg:py-28 px-5 lg:px-20"
        >
          <p className="text-transparent text-center lg:text-start bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl leading-relaxed">
            Lokasi Kantor Kami
          </p>
          <div className="flex flex-col space-y-11 w-full">
            <div className="flex flex-col lg:flex-row space-y-6 space-x-0 lg:space-x-11 lg:space-y-0">
              {locations.map((location) => (
                <CustomButton 
                  text={location}
                  onClick={() => setOffice(location)}
                  isActive={Boolean(location === office)}
                />
              ))}
            </div>
            <OfficeLocation location={office}/>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
