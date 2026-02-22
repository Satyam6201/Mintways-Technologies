import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaBars, FaTimes, FaCode, FaMicrochip, 
  FaShieldAlt, FaTerminal, FaCircle, FaLongArrowAltRight
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdGraphicEq, MdSettingsInputComponent } from 'react-icons/md';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Navigation Background Animation
  const navBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(3, 3, 3, 0)", "rgba(3, 3, 3, 0.95)"]
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
    <header className="fixed top-0 w-full z-[100] selection:bg-[#ccff00] selection:text-black">
      
      {/* 1. TOP BAR: GLOBAL SYSTEM DIAGNOSTICS */}
      <div className="hidden lg:flex bg-black text-zinc-600 py-1.5 px-10 justify-between items-center text-[8px] font-mono tracking-[0.3em] border-b border-white/5">
        <div className="flex gap-10 items-center">
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center gap-2 text-[#ccff00]"
          >
            <MdGraphicEq className="animate-pulse" /> <span>CORE_SYNC: ACTIVE</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#ccff00] animate-ping" />
            <span>ENCRYPTED_LINE_80_4221</span>
          </div>
        </div>

        <div className="flex items-center gap-8 font-black uppercase">
          <span className="text-zinc-800">Uptime: 99.998%</span>
          <span className="text-[#ccff00]/50 tracking-tighter">OS_V: 4.2.0_MINT</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className={`relative transition-all duration-700 backdrop-blur-md ${
          scrolled ? 'py-4 border-b border-[#ccff00]/20' : 'py-8 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* --- BRAND LOGO --- */}
          <Link to="/" className="group flex items-center gap-4">
            <div className="relative w-11 h-11 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#ccff00]/50 transition-colors">
              <MdSettingsInputComponent className="text-[#ccff00] text-2xl group-hover:rotate-180 transition-transform duration-700" />
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">CODE</span>
              <span className="text-[7px] font-mono tracking-[0.5em] text-[#ccff00] font-bold uppercase mt-1">Innovative Technologies</span>
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <ul className="hidden lg:flex items-center gap-12 font-black text-[9px] tracking-[0.4em] uppercase text-zinc-400">
            {['Home', 'About', 'Career'].map((name) => (
              <li key={name} className="relative group overflow-hidden">
                <Link 
                  to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} 
                  className={`transition-all duration-300 flex items-center gap-2 ${isActive(name === 'Home' ? '/' : `/${name.toLowerCase()}`) ? 'text-white' : 'hover:text-[#ccff00]'}`}
                >
                  <span className={`w-1 h-1 rounded-full bg-[#ccff00] transition-all ${isActive(name === 'Home' ? '/' : `/${name.toLowerCase()}`) ? 'scale-100' : 'scale-0'}`} />
                  {name}
                </Link>
                <div className={`absolute bottom-0 left-0 h-px bg-[#ccff00] transition-all duration-500 ${isActive(name === 'Home' ? '/' : `/${name.toLowerCase()}`) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </li>
            ))}
            
            {/* Services Mega Dropdown */}
            <li 
              className="relative cursor-pointer"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className={`flex items-center gap-2 transition-colors ${isServicesOpen ? 'text-[#ccff00]' : 'hover:text-white'}`}>
                SERVICES <IoIosArrowDown className={`transition-transform duration-500 ${isServicesOpen ? 'rotate-180 text-[#ccff00]' : ''}`} />
              </div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-[#080808] border border-white/10 p-4 mt-6 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                  >
                    <div className="grid gap-2">
                      {serviceLinks.map((s, idx) => (
                        <Link key={idx} to={s.path} className="flex items-center gap-5 p-5 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-[#ccff00]/20">
                          <div className={`w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center text-[#ccff00] text-xl border border-white/5 group-hover:bg-[#ccff00] group-hover:text-black transition-all`}>
                            {s.icon}
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-white tracking-widest uppercase mb-1">{s.title}</div>
                            <div className="text-[8px] text-zinc-500 font-mono uppercase tracking-tighter">{s.desc}</div>
                          </div>
                          <FaLongArrowAltRight className="ml-auto opacity-0 group-hover:opacity-100 text-[#ccff00] -translate-x-4 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* --- UTILITIES & MOBILE TOGGLE --- */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-3 px-5 py-2.5 bg-zinc-900 text-zinc-500 rounded-lg text-[8px] font-mono border border-white/5 hover:border-[#ccff00]/40 transition-all group"
            >
              <FaTerminal className="group-hover:text-[#ccff00]" /> <span>ACCESS_TERMINAL</span>
            </button>

            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 bg-[#ccff00] text-black rounded-lg text-[9px] font-black tracking-[0.2em] overflow-hidden group shadow-[0_10px_30px_rgba(204,255,0,0.1)]"
              >
                <span className="relative z-10">INITIALIZE</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </Link>

            <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" onClick={() => setIsMobileMenuOpen(true)}>
              <div className="w-6 h-[2px] bg-white" />
              <div className="w-4 h-[2px] bg-[#ccff00] self-end" />
              <div className="w-6 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE FULL-SCREEN TERMINAL MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-[#030303] z-[500] p-8 flex flex-col overflow-hidden"
          >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />

            <div className="flex justify-between items-center mb-12 relative">
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter">MINT_NAV</span>
                <span className="text-[8px] font-mono text-[#ccff00]">PATH_ROOT/USER/SYSTEM</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-14 h-14 rounded-full border border-white/10 text-[#ccff00] flex items-center justify-center">
                <FaTimes size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 relative">
              {['Home', 'About', 'Services', 'Career', 'Contact'].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-5xl font-black text-white py-4 border-b border-white/5 group-hover:pl-4 group-hover:text-[#ccff00] transition-all"
                  >
                    <span>{item.toUpperCase()}</span>
                    <FaLongArrowAltRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex justify-between items-center pt-10 font-mono text-[9px] text-zinc-600">
              <span>SECURE_SESSION_v4</span>
              <span className="text-[#ccff00]">MINTWAYS_TECH_©_2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEARCH MODAL (Terminal Style) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }}
              className="w-full max-w-2xl bg-zinc-900 border border-[#ccff00]/30 rounded-2xl p-8 relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaTerminal className="text-[#ccff00]" />
                <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">Mintways_Global_Search</span>
              </div>
              <input 
                autoFocus 
                placeholder="EXECUTE_COMMAND..." 
                className="w-full bg-transparent border-none outline-none text-4xl font-black text-white placeholder:text-zinc-800 uppercase tracking-tighter"
              />
              <div className="h-px bg-white/5 my-8" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['/services', '/apply', '/hire', '/team'].map(tag => (
                  <div key={tag} className="p-3 bg-white/5 border border-white/5 rounded-lg text-center font-mono text-[9px] text-zinc-500 hover:text-[#ccff00] hover:border-[#ccff00]/30 cursor-pointer">
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}