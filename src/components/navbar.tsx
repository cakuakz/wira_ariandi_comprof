import { navData } from "../utils/static/nav-data"
import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <nav className="absolute z-10 py-6 px-5 lg:px-20 grid justify-items-start w-full max-w-screen bg-transparent">
      <img
        loading="lazy"
        src="/Wira_Ariandi_Utama_logo.svg"
        className="size-16 lg:size-20"
        alt="Wira Ariandi Utama logo"
      />
      <ul className="relative bottom-14 flex items-center justify-self-center space-x-10">
        {navData.map((data) => (
          <li>
            <NavLink to={data.href} className={({ isActive }: { isActive: boolean }) => (isActive ? "font-bold" : "")}>
              {data.placeholder}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}