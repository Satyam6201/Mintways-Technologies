import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // Official icon

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';

// Service Components
import AppDev from './pages/services/AppDev';
import Consulting from './pages/services/Consulting';
import Products from './pages/services/Products';

/**
 * Ensures page resets to top on every route change
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Enhanced Neo-Cyber Cursor with trailing effect
 */
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') setIsHovering(true);
      else setIsHovering(false);
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
          x: mousePos.x - 12, 
          y: mousePos.y - 12,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(204, 255, 0, 0.1)" : "transparent"
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
        className="fixed top-0 left-0 w-6 h-6 border border-[#ccff00] rounded-full pointer-events-none z-[9999] hidden lg:block"
      />
      <motion.div
        animate={{ x: mousePos.x - 2, y: mousePos.y - 2 }}
        className="fixed top-0 left-0 w-1 h-1 bg-[#ccff00] rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_10px_#ccff00]"
      />
    </>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Force Dark Mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      
      {/* Selection color is now Acid Green to match theme */}
      <div className="min-h-screen selection:bg-[#ccff00] selection:text-black bg-[#030303] text-white transition-colors duration-500 font-sans overflow-x-hidden">
        
        {/* GLOBAL PROGRESS BAR (Now with neon glow) */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-600 via-[#ccff00] to-cyan-400 z-[1000] origin-left shadow-[0_0_15px_rgba(204,255,0,0.5)]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <AnimatePresence mode="wait">
          <RoutesWithAnimation />
        </AnimatePresence>

        <Footer />

        {/* --- BRANDED WHATSAPP ACTION --- */}
        <div className="fixed bottom-8 right-8 z-50">
          <motion.a
            href="https://wa.me/919334061194"
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-[2rem] shadow-[0_20px_50px_rgba(37,211,102,0.4)] group overflow-hidden"
          >
            {/* Pulsing Sonar Effect */}
            <span className="absolute inset-0 rounded-[2rem] bg-[#25D366] animate-ping opacity-40"></span>
            
            {/* White Circle Background for Logo Clarity */}
            <div className="bg-white rounded-full p-0.5">
               <FaWhatsapp className="w-8 h-8 text-[#25D366]" />
            </div>

            {/* Hover Shine Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
          </motion.a>

          {/* Branded Tooltip */}
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-4 group-hover:translate-x-0">
            <p className="text-[10px] font-black tracking-[0.2em] text-[#ccff00] whitespace-nowrap">
              LIVE_CHAT_OPEN
            </p>
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
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom cubic-bezier for smoother feel
      className="relative"
    >
      {/* Matrix-style Ambient Background Blurs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-indigo-600 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            opacity: [0.03, 0.08, 0.03] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#ccff00] blur-[180px] rounded-full" 
        />
      </div>

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/app-dev" element={<AppDev />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/products" element={<Products />} />
      </Routes>
    </motion.main>
  );
}

export default App;