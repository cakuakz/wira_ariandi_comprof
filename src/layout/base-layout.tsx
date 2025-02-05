import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type BaseLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function BaseLayout({ children, title, description }: BaseLayoutProps) {
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

      <div className="relative flex flex-col max-w-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
