import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
 FaArrowUp, FaShieldAlt,
  FaLongArrowAltRight, FaGlobeAmericas, FaInstagram, FaWhatsapp 
} from 'react-icons/fa';
import { MdSettingsInputComponent, MdGraphicEq } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Real-time clock for the "System Time" feel
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const footerLinks = [
    { 
      title: "Core_System", 
      items: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services/app-dev" },
        { name: "Portfolio", path: "#" }
      ] 
    },
    { 
      title: "Ecosystem", 
      items: [
        { name: "Careers", path: "/career" },
        { name: "Open Source", path: "#" },
        { name: "Tech Stack", path: "/services/web-dev" },
        { name: "Community", path: "#" }
      ] 
    },
    { 
      title: "Legal_Node", 
      items: [
        { name: "Privacy Policy", path: "#" },
        { name: "SLA", path: "#" },
        { name: "SOC2 Report", path: "#" },
        { name: "Terms", path: "#" }
      ] 
    }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#030303] text-white pt-32 overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          
          {/* BRAND BLOCK: MATCHED TO NAVBAR */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="group flex items-center gap-4">
              <div className="relative w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#ccff00]/50 transition-all duration-500">
                <MdSettingsInputComponent className="text-[#ccff00] text-2xl group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#ccff00]" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#ccff00]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none">Code</span>
                <span className="text-[8px] font-mono tracking-[0.4em] text-[#ccff00] uppercase mt-1 italic">Innovative Technologies</span>
              </div>
            </Link>
            
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-medium">
              We architect digital legacies. From high-frequency trading apps to secure cloud infrastructure, we build the protocols that run the world.
            </p>

            {/* LIVE SYSTEM FEED */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl font-mono text-[10px] space-y-3 relative overflow-hidden group">
              <div className="flex items-center justify-between text-[#ccff00]">
                <div className="flex items-center gap-2">
                  <MdGraphicEq className="animate-pulse" /> <span>SYSTEM_TERMINAL</span>
                </div>
                <span className="opacity-50">v4.2.0</span>
              </div>
              <div className="space-y-1.5 text-zinc-400">
                <p className="flex justify-between"><span># CPU_LOAD</span> <span className="text-white">12.4%</span></p>
                <p className="flex justify-between"><span># NET_TRAFFIC</span> <span className="text-white">OPTIMIZED</span></p>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#ccff00] w-0 group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* DYNAMIC LINK GROUPS */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" /> {group.title}
              </h4>
              <ul className="space-y-4">
                {group.items.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-zinc-400 text-sm hover:text-[#ccff00] hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <FaLongArrowAltRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT HUB */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> CONTACT_HQ
            </h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-[9px] text-zinc-600 uppercase font-black mb-1 tracking-widest">Secure_Line</p>
                <a href="tel:+919620996689" className="text-sm font-bold group-hover:text-[#ccff00] transition-colors">+91 9620996689</a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[9px] text-zinc-600 uppercase font-black mb-1 tracking-widest">Global_Mail</p>
                <a href="mailto:Info@codeinnovativetechnologies.com" className="text-sm font-bold group-hover:text-[#ccff00] transition-colors underline decoration-white/5">Info@codeinnovativetechnologies.com</a>
              </div>
              
              {/* SOCIAL MATRIX */}
              <div className="flex gap-3 pt-2">
                {[
                { icon: FaInstagram, link: "https://www.instagram.com/code_innovativetechnologies?igsh=c2h2cmVreHBnY3Y5&utm_source=qr" },
                { icon: FaWhatsapp, link: "https://wa.me/919620996689" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -8, rotate: 8 }}
                  href={social.link}
                  className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all shadow-xl group"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM STATUS BAR --- */}
        <div className="flex flex-wrap items-center justify-between gap-10 py-10 border-t border-white/5">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-lg border border-white/5">
               <FaGlobeAmericas className="text-[#ccff00] animate-[spin_10s_linear_infinite]" />
               <span className="text-[10px] font-mono text-zinc-400">NODE_LOCATION: ASIA_NORTH</span>
            </div>
            <div className="hidden sm:flex gap-6 items-center">
               <div className="flex items-center gap-2 opacity-30 group cursor-help">
                 <FaShieldAlt className="text-[#ccff00]" />
                 <span className="text-[10px] font-black uppercase tracking-widest group-hover:opacity-100 transition-opacity">SOC2_TYPE_II</span>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-1 font-mono">
            <div className="flex gap-4 text-[10px]">
              <span className="text-[#ccff00] tracking-widest uppercase">SYS_TIME: {time}</span>
              <span className="text-zinc-600 tracking-tighter">LATENCY: 14ms</span>
            </div>
            <p className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold">
              © {currentYear} CODE
Innovative Technologies // ALL_RIGHTS_RESERVED_v4
            </p>
          </div>

          <motion.button 
            whileHover={{ y: -5, backgroundColor: "#ccff00", color: "#000" }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ccff00] transition-all"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>

      {/* FOOTER SCANLINE ANIMATION */}
      <div className="relative h-1 w-full bg-zinc-900 overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent"
        />
      </div>
    </footer>
  );
}