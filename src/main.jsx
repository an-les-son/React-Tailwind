import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import PreLoader  from './components/preloader.jsx'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// icon remix
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <div className='container mx-auto px-4'>
      <Navbar />
      <App />
      <Footer />
    </div> 
  </StrictMode>,
)
