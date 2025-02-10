import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useScrollToTop } from "../utils/helper/use-scroll-to-top";

type BaseLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function BaseLayout({ children, title, description }: BaseLayoutProps) {
  useScrollToTop()
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://example.com/homepage-image.jpg" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://example.com/homepage-image.jpg" />
      </Helmet>

      <div className="relative flex flex-col max-w-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />

        <button
          onClick={scrollToTop}
          className={`fixed animate-bounce bottom-16 left-1/2 transform cursor-pointer -translate-x-1/2 z-50 bg-gradient-to-r from-[#EB1E1E] to-[#851111] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out 
          ${showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </>
  );
}
