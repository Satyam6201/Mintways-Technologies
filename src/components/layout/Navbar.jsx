import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaEnvelope, FaLinkedinIn, FaTwitter, FaGithub, 
  FaDiscord, FaBars, FaTimes, FaCode, FaMicrochip, 
  FaShieldAlt, FaSearch, FaTerminal 
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineLightMode, MdOutlineDarkMode, MdGraphicEq } from 'react-icons/md';

export default function Navbar({ theme, toggleTheme }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0,0,0,0)", theme === 'dark' ? "rgba(3, 3, 3, 0.85)" : "rgba(255, 255, 255, 0.85)"]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const serviceLinks = [
    { title: "App Forge", desc: "Next-gen architecture", icon: <FaCode />, path: "/services/app-dev", color: "from-blue-500 to-indigo-600" },
    { title: "Cyber Strategy", desc: "Strategic IT audits", icon: <FaMicrochip />, path: "/services/consulting", color: "from-[#ccff00] to-emerald-600" },
    { title: "Protocol Security", desc: "Enterprise protection", icon: <FaShieldAlt />, path: "/services/products", color: "from-red-600 to-orange-600" },
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
      
      {/* 1. TOP BAR: SYSTEM DIAGNOSTICS */}
      <div className="hidden md:flex bg-zinc-950 text-zinc-500 py-1.5 px-10 justify-between items-center text-[9px] font-mono tracking-[0.25em] border-b border-white/5 overflow-hidden">
        <div className="flex gap-8 items-center">
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-[#ccff00]"
          >
            <MdGraphicEq /> <span>ENCRYPTED_SESSION: ACTIVE</span>
          </motion.div>
          <span className="opacity-20 text-white">|</span>
          <a href="mailto:info@mintwaystech.com" className="hover:text-white transition-colors">
            INFO@MINTWAYSTECH.COM
          </a>
        </div>

        <div className="flex items-center gap-6 text-white font-bold">
          <div className="flex gap-4 border-r border-white/10 pr-6 text-zinc-500">
            {[FaLinkedinIn, FaTwitter, FaGithub, FaDiscord].map((Icon, i) => (
              <Icon key={i} className="hover:text-[#ccff00] cursor-pointer transition-all duration-300 hover:-translate-y-0.5" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            NODE_01: STATUS_OK
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className={`relative transition-all duration-500 backdrop-blur-xl ${
          scrolled ? 'py-3 border-b border-white/10 shadow-2xl' : 'py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-indigo-600 rounded-lg group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-indigo-500/20" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xl z-10">M</div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter dark:text-white leading-none">MINTWAYS</span>
              <span className="text-[8px] font-mono tracking-[0.4em] text-indigo-500 font-bold uppercase">Technologies</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 font-bold text-[10px] tracking-[0.3em] uppercase">
            {['Home', 'About', 'Career'].map((name) => (
              <li key={name} className="relative py-2">
                <Link 
                  to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} 
                  className={`transition-colors duration-300 ${isActive(name === 'Home' ? '/' : `/${name.toLowerCase()}`) ? 'text-indigo-500' : 'text-zinc-500 hover:text-indigo-400 dark:hover:text-white'}`}
                >
                  {name}
                </Link>
                {isActive(name === 'Home' ? '/' : `/${name.toLowerCase()}`) && (
                  <motion.div layoutId="navActive" className="absolute -bottom-1 left-0 w-full h-[3px] bg-indigo-500 rounded-full" />
                )}
              </li>
            ))}
            
            {/* Services Dropdown */}
            <li 
              className="relative group cursor-pointer py-2"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className={`flex items-center gap-2 transition-colors ${isServicesOpen ? 'text-indigo-500' : 'text-zinc-500 hover:text-white'}`}>
                SERVICES <IoIosArrowDown className={`transition-transform duration-500 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 p-5 mt-4 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
                  >
                    <div className="grid gap-2">
                      {serviceLinks.map((s, idx) => (
                        <Link key={idx} to={s.path} className="flex items-center gap-5 p-4 rounded-[1.8rem] hover:bg-zinc-50 dark:hover:bg-white/5 transition-all group overflow-hidden relative">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                            {s.icon}
                          </div>
                          <div>
                            <div className="text-[11px] font-black dark:text-white tracking-widest uppercase mb-1">{s.title}</div>
                            <div className="text-[9px] text-zinc-500 font-mono lowercase">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Buttons and Utilities */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-white/5 text-zinc-500 rounded-xl text-[9px] font-mono border border-transparent hover:border-indigo-500/50 transition-all"
            >
              <FaTerminal /> <span>K_SEARCH</span>
            </button>

            <motion.button 
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme} 
              className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-[#ccff00] flex items-center justify-center border border-transparent dark:border-white/5"
            >
              {theme === 'light' ? <MdOutlineDarkMode size={20} /> : <MdOutlineLightMode size={20} />}
            </motion.button>

            <Link to="/contact">
              <motion.button 
                whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)" }}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black tracking-widest"
              >
                INITIALIZE
              </motion.button>
            </Link>

            <button className="lg:hidden text-zinc-500 ml-2" onClick={() => setIsMobileMenuOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MODALS --- */}

      {/* 1. Terminal Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-3xl p-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-8 text-indigo-500 border-b border-indigo-500/20 pb-4">
                <FaSearch size={24} />
                <input 
                  autoFocus
                  placeholder="Type a service or command..." 
                  className="bg-transparent border-none outline-none text-2xl font-black text-zinc-900 dark:text-white w-full placeholder:text-zinc-400 dark:placeholder:text-zinc-700 tracking-tighter"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['/deploy', '/strategy', '/security', '/docs'].map(cmd => (
                  <div key={cmd} className="p-4 bg-zinc-50 dark:bg-white/5 rounded-xl text-zinc-500 font-mono text-xs hover:text-indigo-500 dark:hover:text-[#ccff00] cursor-pointer transition-colors">
                    {cmd}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 bg-white dark:bg-[#030303] z-[500] p-10 flex flex-col"
          >
             <div className="flex justify-between items-center mb-16">
              <span className="text-zinc-900 dark:text-white font-black tracking-tighter text-3xl italic">MINTWAYS.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white flex items-center justify-center">
                <FaTimes size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {['Home', 'About', 'Services', 'Career', 'Contact'].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-black text-zinc-900 dark:text-white hover:text-indigo-500 dark:hover:text-[#ccff00] transition-colors tracking-tighter block"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}