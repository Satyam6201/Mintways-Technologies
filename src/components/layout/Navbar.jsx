import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaBars, FaTimes, FaCode, FaMicrochip, 
  FaShieldAlt, FaTerminal, FaMobileAlt, FaLongArrowAltRight, FaBrain, 
  FaDatabase, FaNetworkWired, FaCube, FaChevronDown, FaSearch, FaRocket,
  FaArrowRight, FaGlobe, FaBolt
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdGraphicEq, MdSettingsInputComponent, MdOutlineMonitorHeart } from 'react-icons/md';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const { scrollY } = useScroll();

  // Glass-morphism Background Animation
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(2, 2, 2, 0)", "rgba(2, 2, 2, 0.85)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(204, 255, 0, 0)", "rgba(204, 255, 0, 0.15)"]
  );

  // Track mouse for "glow" effects
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const serviceLinks = [
    { title: "Web Engineering", desc: "Edge-delivery platforms.", icon: <FaRocket />, path: "/services/web-dev", tag: "CORE", color: "#3b82f6" },
    { title: "Software Systems", desc: "Enterprise SaaS logic.", icon: <FaTerminal />, path: "/services/software", tag: "ARCH", color: "#ccff00" },
    { title: "Neural Core", desc: "Autonomous AI agents.", icon: <FaBrain />, path: "/services/ai-automation", tag: "AGENTS", color: "#a855f7" },
    { title: "Data Intelligence", desc: "Predictive telemetry.", icon: <FaDatabase />, path: "/services/data-intelligence", tag: "DATA", color: "#ec4899" },
    { title: "Cyber Strategy", desc: "Technical audits.", icon: <FaMicrochip />, path: "/services/consulting", tag: "ADVISORY", color: "#f59e0b" },
    { title: "Protocol Security", desc: "Hardened defense.", icon: <FaShieldAlt />, path: "/services/security", tag: "DEFENSE", color: "#ef4444" },
    { title: "App Forge", desc: "Native mobile sync.", icon: <FaMobileAlt />, path: "/services/app-dev", tag: "MOBILE", color: "#10b981" },
    { title: "Blockchain Mesh", desc: "Web3 protocols.", icon: <FaCube />, path: "/services/web3", tag: "DECENTRAL", color: "#6366f1" }
  ];

  return (
    <header 
      className="fixed top-0 w-full z-[100] transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* 1. DIAGNOSTICS BAR */}
      <div className="hidden lg:flex bg-[#050505] text-zinc-600 py-2 px-10 justify-between items-center text-[7px] font-mono tracking-[0.4em] border-b border-white/5 relative overflow-hidden">
        <div className="flex gap-12 items-center relative z-10">
          <div className="flex items-center gap-2 text-[#ccff00]">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ccff00]"></span>
            </span>
            <span>SYSTEM_STATUS: OPERATIONAL</span>
          </div>
          <div className="flex items-center gap-4 border-l border-white/10 pl-12 uppercase">
            <FaGlobe className="text-zinc-800" /> <span>Cluster: Global-Edge-01</span>
          </div>
        </div>
        <div className="flex gap-8 relative z-10">
          <span className="flex items-center gap-2"><FaBolt className="text-yellow-500" /> Latency: 12ms</span>
          <span className="text-zinc-800 italic">Auth: RSA_4096_ENCRYPTED</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <motion.nav 
        style={{ backgroundColor: navBackground, borderBottomColor: navBorder }}
        className={`relative backdrop-blur-xl border-b transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ccff00]/20 blur-xl group-hover:bg-[#ccff00]/40 transition-all rounded-full" />
              <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#ccff00]/50 transition-all duration-500 overflow-hidden">
                <MdSettingsInputComponent className="text-[#ccff00] text-xl relative z-10" />
                <motion.div 
                  animate={{ y: [-40, 40] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 w-full h-[1px] bg-[#ccff00]/30 shadow-[0_0_10px_#ccff00]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white uppercase leading-none">CODE<span className="text-[#ccff00]">_</span>Innovative Technologies</span>
              <span className="text-[6px] font-mono tracking-[0.6em] text-zinc-500 uppercase mt-1 italic">Advanced_Software_Forge</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-12 font-bold text-[9px] tracking-[0.3em] uppercase text-zinc-500">
            {['Home', 'About', 'Career'].map((name) => (
              <li key={name} className="relative overflow-hidden group py-2 px-1">
                <Link to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} className="transition-all hover:text-white">
                  {name}
                </Link>
                <motion.span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ccff00] translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500" />
              </li>
            ))}
            
            <li 
              className="relative" 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`flex items-center gap-2 transition-all py-2 ${isServicesOpen ? 'text-white' : 'hover:text-white'}`}>
                Engineered_Solutions <IoIosArrowDown className={`transition-transform duration-500 ${isServicesOpen ? 'rotate-180 text-[#ccff00]' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-6"
                  >
                    <div className="bg-[#080808]/95 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-3 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                         <FaCode size={150} />
                       </div>
                      {serviceLinks.map((s, idx) => (
                        <Link 
                          key={idx} to={s.path} 
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-all group border border-transparent hover:border-white/10"
                        >
                          <div className="w-10 h-10 rounded-xl bg-zinc-900 flex-shrink-0 flex items-center justify-center text-lg border border-white/5 group-hover:border-[#ccff00]/40 transition-all" style={{ color: s.color }}>
                            {s.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[9px] font-bold text-white tracking-widest uppercase">{s.title}</span>
                              <span className="text-[6px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-600 group-hover:text-[#ccff00] transition-colors">{s.tag}</span>
                            </div>
                            <p className="text-[8px] text-zinc-500 font-mono leading-relaxed uppercase">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* RIGHT ACTION CLUSTER */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 flex items-center justify-center bg-white/5 text-zinc-500 rounded-xl border border-white/10 hover:border-[#ccff00]/30 transition-all"
            >
              <FaSearch size={12} />
            </button>

            <Link to="/contact">
              <motion.button 
                whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
                className="hidden md:flex px-6 py-3 bg-[#ccff00] text-black rounded-xl text-[8px] font-black tracking-widest uppercase shadow-[0_10px_30px_rgba(204,255,0,0.15)] items-center gap-3"
              >
                Start_Build <FaArrowRight />
              </motion.button>
            </Link>

            {/* HAMBURGER */}
            <button 
              className="lg:hidden flex flex-col items-end gap-1.5 p-3 bg-white/5 rounded-xl border border-white/10"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <div className="w-6 h-[1.5px] bg-white" />
              <div className="w-4 h-[1.5px] bg-[#ccff00]" />
              <div className="w-5 h-[1.5px] bg-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN COMMAND CENTER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#020202] z-[1000] flex flex-col"
          >
            {/* Mobile Header */}
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <div className="flex flex-col font-mono">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Mobile_Interface_v4</span>
                <span className="text-[8px] text-[#ccff00]">Security: Encrypted</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ccff00] border border-white/10">
                <FaTimes />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto px-6 py-10 space-y-10">
              <nav className="space-y-6">
                {['Home', 'Company', 'Career', 'Contact'].map((name, i) => (
                  <motion.div 
                    key={name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}
                      className="text-5xl font-bold text-white tracking-tighter uppercase block"
                    >
                      {name}<span className="text-[#ccff00]">.</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Services Grid */}
              <div className="space-y-6">
                <h3 className="text-[8px] font-mono text-zinc-600 tracking-[0.5em] uppercase border-b border-white/5 pb-4 italic underline decoration-[#ccff00]">Technical_Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  {serviceLinks.map((s, i) => (
                    <Link 
                      key={i} to={s.path} onClick={() => setIsMobileMenuOpen(false)}
                      className="p-5 bg-white/[0.03] border border-white/5 rounded-[1.5rem] flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-lg" style={{ color: s.color }}>{s.icon}</div>
                        <span className="text-[10px] font-bold text-white tracking-widest uppercase">{s.title}</span>
                      </div>
                      <FaLongArrowAltRight className="text-zinc-800" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Quick Stats */}
              <div className="grid grid-cols-2 gap-3 pt-10">
                <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/5">
                  <div className="text-[#ccff00] text-xl font-bold">12ms</div>
                  <div className="text-[7px] font-mono text-zinc-500 uppercase">Latency</div>
                </div>
                <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/5">
                  <div className="text-white text-xl font-bold">99.9%</div>
                  <div className="text-[7px] font-mono text-zinc-500 uppercase">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TERMINAL SEARCH (CMD+K) OVERLAY */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] bg-black/95 backdrop-blur-3xl flex items-start justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} 
              className="w-full max-w-2xl bg-[#080808] border border-white/10 rounded-[2.5rem] p-10 mt-20 relative overflow-hidden" 
              onClick={e => e.stopPropagation()}
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
              
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4 text-[#ccff00] font-mono text-[10px] italic">
                   <MdOutlineMonitorHeart className="animate-pulse" size={18} />
                   <span>QUERY_MODE: SYSTEM_WIDE</span>
                </div>
                <button onClick={() => setIsSearchOpen(false)} className="text-[10px] font-mono text-zinc-700 hover:text-white border border-white/10 px-3 py-1 rounded-full transition-all">CLOSE (ESC)</button>
              </div>

              <input 
                autoFocus placeholder="TYPE_COMMAND..." 
                className="w-full bg-transparent border-none outline-none text-4xl md:text-6xl font-bold text-white placeholder:text-zinc-900 uppercase tracking-tighter mb-8" 
              />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-t border-white/5 pt-8">
                {['/core', '/dev', '/ai', '/log'].map(tag => (
                  <button key={tag} className="p-3 bg-white/5 rounded-xl text-center text-[8px] font-mono text-zinc-500 hover:text-[#ccff00] hover:bg-[#ccff00]/10 transition-all border border-white/5">
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}