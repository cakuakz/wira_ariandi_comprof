import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useScrollToTop } from "../utils/helper/use-scroll-to-top";

type BaseLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function BaseLayout({ children, title, description }: BaseLayoutProps) {
  useScrollToTop();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const defaultTitle = "Wira Ariandi Group - Trading & Transport BBM";
  const defaultDescription =
    "Wira Ariandi Group adalah perusahaan perdagangan dan transportasi BBM terpercaya di Indonesia.";
  const fullTitle = title ? `${title} | Wira Ariandi Group` : defaultTitle;
  const fullDescription = description || defaultDescription;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        
        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content="https://example.com/wira-ariandi-group.jpg" />
        <meta property="og:url" content="https://wira-ariandi-group.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="twitter:image" content="https://example.com/wira-ariandi-group.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL to Avoid Duplicate Pages */}
        <link rel="canonical" href="https://wira-ariandi-group.netlify.app/" />

        {/* Schema.org Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Wira Ariandi Group",
            "url": "https://wira-ariandi-group.netlify.app/",
            "logo": "https://example.com/wira-ariandi-group-logo.png",
            "description": defaultDescription,
            "sameAs": [
              "https://www.facebook.com/WiraAriandiGroup",
              "https://www.linkedin.com/company/wiraariandigroup",
              "https://twitter.com/WiraAriandi"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-812-3456-7890",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>

      <div className="relative flex flex-col max-w-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />

        {/* Scroll to Top Button */}
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
