import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Prices from './pages/Prices/Prices';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Tips from './pages/Tips/Tips';
import ServiceAreas from './pages/ServiceAreas/ServiceAreas';

// Geçici placeholder sayfalar (sonra oluşturacağız)
const FAQ = () => <div style={{ padding: '2rem', textAlign: 'center', minHeight: '60vh' }}><h1>Sık Sorulan Sorular</h1><p>Bu sayfa çok yakında hazır olacak...</p></div>;
const NotFound = () => <div style={{ padding: '2rem', textAlign: 'center', minHeight: '60vh' }}><h1>404 - Sayfa Bulunamadı</h1><p>Aradığınız sayfa mevcut değil.</p></div>;

function App() {
  // GitHub Pages için basename (production)
  const basename = process.env.NODE_ENV === 'production' ? '/hali-yikama-web' : '';
  
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
