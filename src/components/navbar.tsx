import { Menu } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="relative z-10 py-6 px-5 lg:px-20 grid justify-items-start w-full max-w-screen bg-transparent">
      <img loading="lazy" src="/Wira_Ariandi_Utama_logo.svg" className="size-16 lg:size-20" />
      <ul className="relative bottom-14 flex items-center justify-self-center space-x-10">
        <li>
          <NavLink to="/">Profil</NavLink>
        </li>
        <li>
          <NavLink to="/">Organisasi</NavLink>
        </li>
        <li>
          <NavLink to="/">Kontak</NavLink>
        </li>
      </ul>
      <Menu 
        className="relative bottom-14 justify-self-end"
      />
    </nav>
  );
}
