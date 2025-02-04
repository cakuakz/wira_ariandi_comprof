import { Facebook, Mail, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <div className="flex flex-col items-center lg:items-stretch w-full px-5 lg:px-20 py-12 lg:py-20 bg-[#1D1D1D]">
        <div className="grid grid-cols-1 text-center lg:text-start lg:grid-cols-4 gap-x-10 mb-20">
            <img loading="lazy" src="/Wira_Ariandi_Utama_logo.svg" className="mx-auto mb-6 lg:mx-0 lg:mb-0"/>
            <ul className="mb-6 lg:mb-0">
                <li className="mb-4 text-base font-semibold">Profil Perusahaan</li>
                <li className="py-2 text-sm font-normal">Tentang</li>
                <li className="py-2 text-sm font-normal">Visi & Misi</li>
                <li className="py-2 text-sm font-normal">Wilayah Operasi</li>
            </ul>
            <ul className="mb-6 lg:mb-0">
                <li className="mb-4 text-base font-semibold">Struktur Perusahaan</li>
                <li className="py-2 text-sm font-normal">Hirarki Organisasi</li>
                <li className="py-2 text-sm font-normal">Anak Perusahaan</li>
            </ul>
            <ul>
                <li className="mb-4 text-base font-semibold">Hubungi Kami</li>
                <li className="py-2 text-sm font-normal">Kontak</li>
            </ul>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between border-t-2 border-amber-50 pt-8">
            <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 text-base">
                <p className="mb-6 lg:mb-0">© 2023 Resume. All rights reserved.</p>
                <p className="mb-4 lg:mb-0">Privacy Policy</p>
                <p className="mb-4 lg:mb-0">Terms of Service</p>
                <p className="mb-11 lg:mb-0">Cookies Settings</p>
            </div>
            <div className="flex items-center space-x-3">
                <Facebook />
                <Instagram />
                <Mail />
                <Linkedin />
            </div>
        </div>
    </div>
  )
}
