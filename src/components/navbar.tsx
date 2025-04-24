import { Menu, X } from "lucide-react";
import { useMenu } from "../utils/helper/use-menu";
import { navData } from "../utils/static/nav-data";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const { isOpen, toggle, close } = useMenu();

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${
        isOpen ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="relative py-6 px-5 lg:px-20 flex items-center justify-between">
        {/* Logo + Text */}
        <NavLink
          className="flex items-center space-x-3"
          to="/"
          onClick={close}
        >
          <img
            loading="lazy"
            src="/Wira_Ariandi_Utama_logo.svg"
            className="size-18 lg:size-[160px]"
            alt="Wira Ariandi Utama logo"
          />
          <p className="text-lg md:text-2xl">Wira Ariandi Group</p>
        </NavLink>

        {/* Centered Nav Links */}
        <ul className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
          {navData.map((data) => (
            <li key={data.href}>
              <NavLink
                to={data.href}
                className={({ isActive }: { isActive: boolean }) =>
                  isActive ? "font-bold" : ""
                }
              >
                {data.placeholder}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggle}
          className="lg:hidden p-2 rounded-md hover:bg-accent"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 bg-background/95 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed z-30 top-0 right-0 bottom-0 w-[300px] bg-[#0E0E0E] border-l shadow-lg md:hidden"
            >
              <div className="flex flex-col p-4">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={close}
                    className="p-2 rounded-md hover:bg-accent"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <ul className="flex flex-col space-y-4">
                  {navData.map((data) => (
                    <li key={data.href}>
                      <NavLink
                        to={data.href}
                        onClick={close}
                        className={({ isActive }: { isActive: boolean }) => `
                          block px-4 py-2 rounded-md hover:bg-accent transition-colors
                          ${isActive ? "font-bold" : ""}
                        `}
                      >
                        {data.placeholder}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}