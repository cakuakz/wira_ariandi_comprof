import { lazy, StrictMode, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";
import WiraAriandi from "./pages/detail/WiraAriandi";
import WiraAriandiUtama from "./pages/detail/WiraAriandiUtama";
import Contact from "./pages/Contact";
import EtamWiraUtama from "./pages/detail/EtamWiraUtama";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/organisasi" element={<About />} />
            <Route path="/organisasi/pt-wira-ariandi" element={<WiraAriandi />} />
            <Route path="/organisasi/pt-wira-ariandi-utama" element={<WiraAriandiUtama />} />
            <Route path="/organisasi/pt-etam-wira-utama" element={<EtamWiraUtama />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
};

export default App;
