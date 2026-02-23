import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaBars, FaTimes, FaCode, FaMicrochip, 
  FaShieldAlt, FaTerminal, FaCircle, FaLongArrowAltRight, FaBrain, 
  FaDatabase, FaNetworkWired, FaCube, FaChevronDown, FaSearch
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdGraphicEq, MdSettingsInputComponent } from 'react-icons/md';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Navigation Background Animation
  const navBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(3, 3, 3, 0)", "rgba(3, 3, 3, 0.98)"]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const serviceLinks = [
    { title: "App Forge", desc: "High-velocity platforms & horizontal scale.", icon: <FaCode />, path: "/services/app-dev", tag: "PRODUCT_ENG" },
    { title: "Neural Core", desc: "Autonomous AI agents & production workflows.", icon: <FaBrain />, path: "/services/ai-automation", tag: "AI_TACTICAL" },
    { title: "Cyber Strategy", desc: "Strategic audits & digital transformation.", icon: <FaMicrochip />, path: "/services/consulting", tag: "ADVISORY" },
    { title: "Protocol Security", desc: "Military-grade penetration testing.", icon: <FaShieldAlt />, path: "/services/security", tag: "DEFENSE" },
    { title: "Blockchain Mesh", desc: "Web3 infrastructure & smart contracts.", icon: <FaCube />, path: "/services/web3", tag: "DECENTRAL_OPS" },
    { title: "Data Intelligence", desc: "Predictive insights & data engineering.", icon: <FaDatabase />, path: "/services/products", tag: "ANALYTICS" },
  ];

  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    opened: { x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  };

  return (
    <header className="fixed top-0 w-full z-[100] selection:bg-[#ccff00] selection:text-black">
      
      {/* 1. TOP BAR: DIAGNOSTICS */}
      <div className="hidden lg:flex bg-black text-zinc-600 py-1.5 px-10 justify-between items-center text-[8px] font-mono tracking-[0.3em] border-b border-white/5">
        <div className="flex gap-10 items-center">
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="flex items-center gap-2 text-[#ccff00]">
            <MdGraphicEq className="animate-pulse" /> <span>CORE_SYNC: ACTIVE</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span>ENCRYPTED_LINE_AES_256</span>
          </div>
        </div>
        <div className="flex gap-8">
          <span className="text-zinc-800">LATENCY: 14MS</span>
          <span className="text-[#ccff00]/50 tracking-tighter">OS_V: 4.2.0_MINT</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className={`relative transition-all duration-700 backdrop-blur-md ${scrolled ? 'py-4 border-b border-[#ccff00]/20' : 'py-8 border-b border-transparent'}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <Link to="/" className="group flex items-center gap-4">
            <div className="relative w-11 h-11 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#ccff00]/50 transition-all">
              <MdSettingsInputComponent className="text-[#ccff00] text-2xl group-hover:rotate-180 transition-transform duration-700" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">CODE</span>
              <span className="text-[7px] font-mono tracking-[0.5em] text-[#ccff00] font-bold uppercase mt-1">Innovative Technologies</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center gap-10 font-black text-[9px] tracking-[0.4em] uppercase text-zinc-400">
            {['Home', 'About', 'Career'].map((name) => (
              <li key={name} className="relative group">
                <Link to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} className={`transition-all ${isActive(name === 'Home' ? '/' : `/${name.toLowerCase()}`) ? 'text-white' : 'hover:text-[#ccff00]'}`}>
                  {name}
                </Link>
                <motion.div className="absolute -bottom-2 left-0 h-[2px] bg-[#ccff00]" initial={{ width: 0 }} animate={{ width: isActive(name === 'Home' ? '/' : `/${name.toLowerCase()}`) ? '100%' : 0 }} whileHover={{ width: '100%' }} />
              </li>
            ))}
            
            <li className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <div className={`flex items-center gap-2 cursor-pointer transition-colors ${isServicesOpen ? 'text-[#ccff00]' : 'hover:text-white'}`}>
                SERVICES <IoIosArrowDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-[#080808] border border-white/10 p-2 mt-6 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
                    <div className="grid grid-cols-1 gap-1">
                      {serviceLinks.map((s, idx) => (
                        <Link key={idx} to={s.path} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-[#ccff00]/10">
                          <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-[#ccff00] text-xl border border-white/5 group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                            {s.icon}
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-white tracking-widest uppercase mb-1">{s.title}</div>
                            <div className="text-[8px] text-zinc-500 font-mono uppercase leading-tight">{s.desc}</div>
                          </div>
                          <FaLongArrowAltRight className="ml-auto opacity-0 group-hover:opacity-100 text-[#ccff00] transition-all" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* ACTION AREA */}
          <div className="flex items-center gap-4 lg:gap-8">
            <button onClick={() => setIsSearchOpen(true)} className="w-10 h-10 lg:w-auto lg:px-5 flex items-center justify-center gap-3 bg-zinc-900 text-zinc-500 rounded-xl border border-white/5 hover:border-[#ccff00]/40 transition-all">
              <FaSearch size={14} className="lg:text-[#ccff00]" />
              <span className="hidden lg:block text-[8px] font-mono">CMD + K</span>
            </button>

            <Link to="/contact" className="hidden sm:block">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 bg-[#ccff00] text-black rounded-xl text-[9px] font-black tracking-[0.2em] shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                INITIALIZE_INIT
              </motion.button>
            </Link>

            <button className="lg:hidden flex flex-col gap-1.5 p-2 bg-white/5 rounded-lg border border-white/10" onClick={() => setIsMobileMenuOpen(true)}>
              <div className="w-6 h-[2px] bg-white" />
              <div className="w-6 h-[2px] bg-[#ccff00]" />
              <div className="w-4 h-[2px] bg-white self-end" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE TERMINAL MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={menuVariants} initial="closed" animate="opened" exit="closed"
            className="fixed inset-0 bg-[#030303] z-[1000] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter italic">MINT_TERMINAL_V4</span>
                <span className="text-[8px] font-mono text-[#ccff00]">AUTH_LEVEL: ROOT_ACCESS</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-2xl bg-white/5 text-[#ccff00] flex items-center justify-center border border-white/10">
                <FaTimes size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2">
              {['Home', 'About', 'Career', 'Contact'].map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-4xl font-black text-white py-2 group"
                  >
                    <span className="group-hover:text-[#ccff00] transition-colors uppercase">{item}</span>
                    <FaLongArrowAltRight className="text-[#ccff00]/20 group-hover:text-[#ccff00]" />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services Section */}
              <motion.div variants={itemVariants} className="mt-8 border-t border-white/5 pt-8">
                <h3 className="text-[10px] font-mono text-zinc-500 tracking-[0.5em] mb-6 uppercase italic">Protocol_Services</h3>
                <div className="grid gap-3">
                  {serviceLinks.map((s, i) => (
                    <Link 
                      key={i} to={s.path} onClick={() => setIsMobileMenuOpen(false)}
                      className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center gap-4 active:bg-[#ccff00]/10"
                    >
                      <div className="text-[#ccff00] text-lg">{s.icon}</div>
                      <div>
                        <div className="text-[11px] font-black text-white uppercase">{s.title}</div>
                        <div className="text-[8px] text-zinc-500 font-mono">{s.tag}</div>
                      </div>
                      <FaChevronDown className="-rotate-90 ml-auto text-zinc-700" size={10} />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </nav>

            <div className="mt-auto pt-8 flex justify-between items-center font-mono text-[8px] text-zinc-600 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>UPLINK_STABLE</span>
              </div>
              <span>©2026_MINT_LOGIC</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TERMINAL SEARCH (CMD+K) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1100] bg-black/90 backdrop-blur-2xl flex items-start justify-center p-4 md:p-20" onClick={() => setIsSearchOpen(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2.5rem] p-8 mt-20" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-4 mb-8 text-zinc-500 font-mono text-xs italic">
                <FaTerminal className="text-[#ccff00]" /> <span>SYSTEM_BROADCAST_SEARCH</span>
              </div>
              <input autoFocus placeholder="EXECUTE_COMMAND..." className="w-full bg-transparent border-none outline-none text-3xl md:text-5xl font-black text-white placeholder:text-zinc-900 uppercase tracking-tighter" />
              <div className="grid grid-cols-2 gap-4 mt-12">
                {['/services', '/architect', '/security', '/ai_core'].map(tag => (
                  <div key={tag} className="p-4 bg-white/5 border border-white/5 rounded-xl font-mono text-[10px] text-zinc-500 hover:text-[#ccff00] hover:border-[#ccff00]/30 transition-all cursor-pointer">
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