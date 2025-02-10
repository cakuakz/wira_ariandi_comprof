import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Cloudinary } from '@cloudinary/url-gen/index';

export const cld = new Cloudinary({
  cloud: {
    cloudName: "rafirfansyah",
  },
});

createRoot(document.getElementById('root')!).render(<App />);
