import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';

// Service Dossiers
import AppDev from './pages/services/AppDev';
import Consulting from './pages/services/Consulting';
import Products from './pages/services/Products';
import AiAutomation from './pages/services/AiAutomation'; 
import Security from './pages/services/Security';       
import Web3 from './pages/services/Web3';               
import DataIntelligence from './pages/services/DataIntelligence'; 
import WebD from './pages/services/WebD';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (['BUTTON', 'A', 'SELECT'].includes(e.target.tagName) || e.target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{ 
          x: mousePos.x - 20, 
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 90 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
        className="fixed top-0 left-0 w-10 h-10 border border-[#ccff00]/30 rounded-lg pointer-events-none z-[9999] hidden lg:block"
      >
        <div className="absolute top-0 left-0 w-1 h-1 bg-[#ccff00]" />
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#ccff00]" />
      </motion.div>
      <motion.div
        animate={{ x: mousePos.x - 2, y: mousePos.y - 2 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ccff00] rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_15px_#ccff00]"
      />
    </>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      
      <div className="min-h-screen selection:bg-[#ccff00] selection:text-black bg-[#020202] text-white font-sans overflow-x-hidden">
        
        {/* PROGRESS BAR */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-[#ccff00] z-[1000] origin-left shadow-[0_0_20px_#ccff00]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <AnimatePresence mode="wait">
          <RoutesWithAnimation />
        </AnimatePresence>

        <Footer />

        {/* WHATSAPP ACTION */}
        <div className="fixed bottom-8 right-8 z-50 group">
          <motion.a
            href="https://wa.me/919620996689"
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            <FaWhatsapp className="w-7 h-7" />
            <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20" />
          </motion.a>
          
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-y-2 group-hover:translate-y-0">
            <div className="bg-zinc-900 border border-white/10 px-4 py-2 rounded-lg whitespace-nowrap">
              <p className="text-[9px] font-mono text-[#ccff00] tracking-widest uppercase">Direct_Uplink_Available</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function RoutesWithAnimation() {
  const location = useLocation();
  
  return (
    <motion.main
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <Routes location={location}>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Dossiers */}
        <Route path="/services/web-dev" element={<WebD />} />
        <Route path="/services/app-dev" element={<AppDev />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/products" element={<Products />} />
        <Route path="/services/ai-automation" element={<AiAutomation />} />
        <Route path="/services/security" element={<Security />} />
        <Route path="/services/web3" element={<Web3 />} />
        <Route path="/services/data-intelligence" element={<DataIntelligence />} />
      </Routes>

      {/* Ambient Visuals */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ccff0005_0%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>
    </motion.main>
  );
}

export default App;