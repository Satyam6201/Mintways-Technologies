import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, 
  FaTwitter, FaDiscord, FaArrowUp, FaTerminal, FaShieldAlt
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { 
      title: "Core_System", 
      items: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" }
      ] 
    },
    { 
      title: "Ecosystem", 
      items: [
        { name: "Careers", path: "/career" },
        { name: "Open Source", path: "https://github.com/mintways" },
        { name: "Tech Stack", path: "/tech" },
        { name: "Community", path: "/discord" }
      ] 
    },
    { 
      title: "Legal_Node", 
      items: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "SLA", path: "/sla" },
        { name: "SOC2 Report", path: "/security" },
        { name: "Terms", path: "/terms" }
      ] 
    }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#050505] text-white pt-32 overflow-hidden border-t border-white/5">
      
      {/* 1. BACKGROUND TEXT DECOR (CYBERPUNK FEEL) */}
      <div className="absolute top-10 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[15rem] font-black italic tracking-tighter uppercase">
          MINTWAYS TECHNOLOGIES MINTWAYS TECHNOLOGIES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          
          {/* BRAND BLOCK */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[#ccff00] rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                <span className="text-black font-black text-2xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none">MINTWAYS</span>
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#ccff00]">EST_2024</span>
              </div>
            </Link>
            
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              We engineer digital fortresses. From high-frequency trading apps to secure cloud infrastructure, we build the protocols that run the world.
            </p>

            {/* COMMAND LINE SHORTCUT PREVIEW */}
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl font-mono text-[11px] space-y-2">
              <div className="flex items-center gap-2 text-[#ccff00]">
                <FaTerminal size={10} /> <span>QUICK_NAV</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-zinc-500">
                <Link to="/career" className="hover:text-white transition-colors underline decoration-white/10"># apply_now</Link>
                <Link to="/contact" className="hover:text-white transition-colors underline decoration-white/10"># init_brief</Link>
              </div>
            </div>
          </div>

          {/* DYNAMIC LINK GROUPS */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff00] border-l-2 border-[#ccff00] pl-3">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.items.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('http') ? (
                      <a 
                        href={link.path} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-zinc-500 text-sm hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className="text-zinc-500 text-sm hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT HUB */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff00] border-l-2 border-[#ccff00] pl-3">
              Contact_HQ
            </h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-[10px] text-zinc-600 uppercase font-black mb-1">Secure_Line</p>
                <a href="tel:+918042213489" className="text-sm font-bold group-hover:text-[#ccff00] transition-colors">+91 80 4221 3489</a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] text-zinc-600 uppercase font-black mb-1">Encrypted_Mail</p>
                <a href="mailto:info@mintwaystech.com" className="text-sm font-bold group-hover:text-[#ccff00] transition-colors">info@mintwaystech.com</a>
              </div>
              <div className="flex gap-3 pt-4">
                {[
                  { Icon: FaGithub, url: "https://github.com/mintways" },
                  { Icon: FaLinkedin, url: "https://linkedin.com/company/mintways" },
                  { Icon: FaTwitter, url: "https://twitter.com/mintwaystech" },
                  { Icon: FaDiscord, url: "https://discord.gg/mintways" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-[#ccff00] hover:border-[#ccff00]/30 transition-all"
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. BOTTOM STRIP: STATUS & TRUST */}
        <div className="flex flex-wrap items-center justify-between gap-10 py-12 border-t border-white/5">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
               <FaShieldAlt className="text-emerald-500" size={12} />
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter">AES-256 Verified</span>
            </div>
            <div className="hidden sm:flex gap-6 items-center opacity-30">
               <span className="text-[10px] font-black">ISO_27001</span>
               <span className="text-[10px] font-black">HIPAA_READY</span>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-4 text-[10px] text-zinc-500 font-mono">
              <span className="text-[#ccff00]">LOCAL_TIME: {new Date().toLocaleTimeString()}</span>
              <span>Uptime: 99.99%</span>
            </div>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
              © {currentYear} Mintways Technologies // Designed for the future
            </p>
          </div>

          <motion.button 
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition-all"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>

      {/* 3. TERMINAL LINE ACCENT */}
      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#ccff00] to-transparent animate-pulse" />
    </footer>
  );
}