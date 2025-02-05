import BaseLayout from "../../layout/base-layout";
import CloudinaryImg from "../../utils/helper/use-cloudinary-img";

export default function WiraAriandi() {
  const wiraAriandiCard = [
    {
      icon: <img src="/gas-station.svg" />,
      text: "BBM Bio Solar",
    },
    {
      icon: <img src="/dollar-circle.svg" />,
      text: "Premium",
    },
  ];

  return (
    <BaseLayout
      title="PT Wira Ariandi Detail"
      description="Detail page about PT. Wira Ariandi - Trading BBM"
    >
      <div>
        <div className="relative flex flex-col items-center pb-32 pt-64 max-w-screen w-full lg:px-20 wira-ariandi-banner">
          <span className="relative top-32 w-full text-center md:w-fit md:px-12 py-3 bg-gradient-to-l from-[#851111] to-[#EB1E1E] text-[42px] lg:text-[56px] font-semibold">
            PT WIRA ARIANDI
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-24 lg:py-32 px-5 lg:px-20">
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738778877/wira_ariandi_detail_1_hqj1dv.png"
            className="rounded-sm grow"
          />
          <div className="flex flex-col items-start text-start grow">
            <p className="text-5xl font-medium mb-6 leading-14">Tentang Perusahaan</p>
            <p className="text-lg font-normal leading-[150%]">
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

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-24 lg:py-28 px-5 lg:px-20">
          <div className="flex flex-col items-start text-start grow">
            <p className="text-5xl font-medium mb-6 leading-14">
              Layanan Perdagangan & Distribusi BBM
            </p>
            <p className="text-lg font-normal leading-[150%] mb-8">
              Produk Bahan Bakar Minyak yang kami tawarkan adalah sesuai dengan spesifikasi dari
              Direktorat Jendreal Minyak/ Gas Bumi dan peraturan Mentri ESDM No. 25 tahun 2013.
              <br />
              <br />
              Produk BBM yang kami perdagangkan digunakan untuk kebutuhan semua sektor industri dan
              perkapalan. Tentunya dengan harga yang kompetitif dan ditunjang dengan fasilitas
              angkutan darat dan laut sampai lokasi, sesuai dengan permintaan pelanggan. Produk yang
              kami jual yaitu:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {wiraAriandiCard.map((card, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 w-full text-center space-y-4"
                >
                  <div className="flex justify-center">{card.icon}</div>
                  <p className="text-sm md:text-xl">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738779344/wira_ariandi_detail_2_wjwtka.png"
            className="rounded-sm grow"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20 py-28 lg:py-32 px-5 lg:px-20">
          <CloudinaryImg
            src="https://res.cloudinary.com/rafirfansyah/image/upload/v1738779651/wira_ariandi_detail_3_kcmdey.png"
            className="rounded-sm grow"
          />
          <div className="flex flex-col items-start text-start grow">
            <p className="text-5xl font-medium mb-6 leading-14">Layanan Bunker</p>
            <p className="text-lg font-normal leading-[150%]">
              Service Bunker merupakan proses pemuatan minyak dari kapal ke kapal. Pemuatan ini
              sesuai dengan prosedur dan standar. Dari pelabuhan atau STS (Ship to Ship) dari kapal
              ke kapal konsumen.
              <br />
              <br />
              Perusahaan kami melayani kebutuhan bunker service, sesuai dengan pelayanan 24 jam. Di
              lokasi lati Berau dalam mendukung pelayanan bunker service tersebut, kami memiliki
              fasilitas armada dengan kapasitas 500 KL.
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
