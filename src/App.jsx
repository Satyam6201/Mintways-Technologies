import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

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
 * Custom Cursor for the Neo-Cyber aesthetic
 */
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
      transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      className="fixed top-0 left-0 w-6 h-6 border-2 border-[#ccff00] rounded-full pointer-events-none z-[9999] hidden lg:block"
    />
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress bar at the top
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Default to Dark Mode on first load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      
      <div className="min-h-screen selection:bg-[#ccff00] selection:text-black bg-white dark:bg-[#030303] transition-colors duration-500 font-sans">
        
        {/* GLOBAL PROGRESS BAR */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-[#ccff00] to-cyan-400 z-[1000] origin-left"
          style={{ scaleX }}
        />

        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <AnimatePresence mode="wait">
          <RoutesWithAnimation />
        </AnimatePresence>

        <Footer />

        {/* FLOATING CONTACT ACTION (WHATSAPP) */}
        <motion.a
          href="https://wa.me/919334061194"
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] cursor-pointer group"
        >
          <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-20"></span>
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-[#ccff00] text-[10px] font-black px-3 py-1.5 rounded-lg border border-[#ccff00]/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-widest pointer-events-none">
            INIT_CHAT
          </div>
        </motion.a>
      </div>
    </Router>
  );
}

/**
 * Handles route-based animations and background gradients
 */
function RoutesWithAnimation() {
  const location = useLocation();
  
  return (
    <motion.main
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative"
    >
      {/* Dynamic Background Blurs that follow the theme */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ccff00]/5 dark:bg-[#ccff00]/5 blur-[150px] rounded-full" />
      </div>

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Service Sub-routes */}
        <Route path="/services/app-dev" element={<AppDev />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/products" element={<Products />} />
      </Routes>
    </motion.main>
  );
}

export default App;