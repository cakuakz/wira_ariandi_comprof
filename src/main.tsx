import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Cloudinary } from '@cloudinary/url-gen/index'

const Home = lazy(() => import("../src/pages/Home"))

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'rafirfansyah'
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
