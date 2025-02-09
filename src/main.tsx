import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Cloudinary } from '@cloudinary/url-gen/index'
import { HelmetProvider } from 'react-helmet-async'
import About from './pages/About'
import WiraAriandi from './pages/detail/WiraAriandi'
import WiraAriandiUtama from './pages/detail/WiraAriandiUtama'
import Contact from './pages/Contact'
import EtamWiraUtama from './pages/detail/EtamWiraUtama'

const Home = lazy(() => import("../src/pages/Home"))

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'rafirfansyah'
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/organisasi' element={<About />} />
          <Route path='/organisasi/pt-wira-ariandi' element={<WiraAriandi />}/>
          <Route path='/organisasi/pt-wira-ariandi-utama' element={<WiraAriandiUtama />} />
          <Route path='/organisasi/pt-etam-wira-utama' element={<EtamWiraUtama />}/>
          <Route path='/kontak' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
