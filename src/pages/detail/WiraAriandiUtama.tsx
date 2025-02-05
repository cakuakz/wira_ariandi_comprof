import BaseLayout from "../../layout/base-layout";
import CloudinaryImg from "../../utils/helper/use-cloudinary-img";

export default function WiraAriandiUtama() {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1738780613/wira_ariandi_utama_dokumentasi_1_e9ewgi.png",
      alt: "Industrial vessel main view",
      className: "col-span-2 row-span-2",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1738780612/wira_ariandi_utama_dokumentasi_2_jyvq2p.png",
      alt: "Industrial vessel side view",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1738780612/wira_ariandi_utama_dokumentasi_3_dvemor.png",
      alt: "Industrial vessel deck view",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1738780612/wira_ariandi_utama_dokumentasi_4_ih9cum.png",
      alt: "Industrial vessel aerial view",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/rafirfansyah/image/upload/v1738780611/wira_ariandi_utama_dokumentasi_5_nsuqiz.png",
      alt: "Industrial vessel water view",
    },
  ];

  return (
    <BaseLayout
      title="PT Wira Ariandi Utama"
      description="Detail page about PT. Wira Ariandi Utama - Transport for BBM"
    >
      <div>
        <div className="relative flex flex-col items-center pb-32 pt-64 max-w-screen w-full lg:px-20 wira-ariandi-utama-banner">
          <span className="relative top-32 w-full text-center md:w-fit md:px-12 py-3 bg-gradient-to-l from-[#851111] to-[#EB1E1E] text-[42px] lg:text-[56px] font-semibold">
            PT WIRA ARIANDI
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-24 lg:py-32 px-5 lg:px-20">
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738780613/wira_ariandi_utama_detail_1_wexebw.png"
            className="rounded-sm grow"
          />
          <div className="flex flex-col items-start text-start grow">
            <p className="text-5xl font-medium mb-6 leading-14">Tentang Perusahaan</p>
            <p className="text-lg font-normal leading-[150%]">
              PT Wira Ariandi Utama merupakan perusajaam jasa trasnportasi angkutan laut, angkutan
              darat, bunker yang berkantor pusat di Tarakan dan memiliki kantor cabang di Berau dan
              Surabaya.
              <br />
              <br />
              Perusahaan kami telah berpengalaman dalam jasa pengangkutan dan distribusi bahan bakar
              minyak lebih dari 20 tahun serta memiliki armada angkutan laut dan darat. Sebagai
              salah satu Perusahaan pelayaran nasional kami telah memegang Surat Ijin Usaha
              Pengangkutan Laut (SIUPAL) No. B XXXIV/98/AT.54 yang dikeluarkan oleh Dirjen
              Perhubungan Laut pada tanggal 11 Maret 2010 dan ijin transport dari Dirjen Migas No.
              05.AL.03.21.00.290.
              <br />
              <br />
              Selain itu perusahaan kami telah menjadi rekanan yang dipercaya oleh perusahaan -
              perusahaan besar seperti: PT. Berau Coal, PT. Pertamina Patra Niaga, PT. Sago, PT.
              Elnusa dan PT. MKP untuk menunjang pelaksanaan angkutan BBM nya.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8 lg:space-y-0 py-24 lg:py-28 px-5">
          <div className="flex flex-col items-center text-center mb-20">
            <p className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl max-w-5xl mx-auto leading-relaxed">
              Fasilitas Armada Laut
            </p>
            <p className="max-w-2xl text-base lg:text-lg font-normal">
              Jaringan Armada Lengkap untuk Mendukung Distribusi BBM
            </p>
          </div>
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738780612/wira_ariandi_utama_armada_kijfde.png"
            className="rounded-sm max-w-[643px]"
          />
        </div>

        <div className="flex flex-col items-center space-y-8 lg:space-y-0 py-24 lg:py-28 px-5">
          <div className="flex flex-col items-center text-center mb-20">
            <p className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl mx-auto leading-relaxed">
              Wilayah Operasi Perdagangan & Transportasi BBM
            </p>
            <p className="text-base lg:text-lg font-normal">
              Cakupan Wilayah Strategis untuk Menjamin Ketersediaan BBM di Seluruh Indonesia
            </p>
          </div>
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738780613/wira_ariandi_utama_wilayah_qrwcr5.png"
            className="rounded-sm max-w-3xl"
          />
        </div>

        <div className="flex flex-col items-center space-y-8 lg:space-y-0 py-24 lg:py-28 px-5">
          <div className="flex flex-col items-center text-center mb-20">
            <p className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl mx-auto leading-relaxed">
              Dokumentasi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className={`overflow-hidden rounded-lg ${
                  image.id === 1 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <CloudinaryImg
                  src={image.src || "/placeholder.svg"}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
