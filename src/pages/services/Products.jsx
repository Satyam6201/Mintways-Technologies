import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaUserShield, FaFingerprint, FaNetworkWired, 
  FaLock, FaEye, FaMicrochip, FaShieldVirus 
} from 'react-icons/fa';

const securityFeatures = [
  {
    title: "Zero Trust Architecture",
    icon: <FaFingerprint />,
    desc: "Eliminating implicit trust. Every user, device, and network flow is authenticated and encrypted.",
    tags: ["Identity-First", "Micro-segmentation", "MFA"]
  },
  {
    title: "Penetration Testing",
    icon: <FaNetworkWired />,
    desc: "Aggressive red-team simulations to identify vulnerabilities before malicious actors do.",
    tags: ["Vulnerability Scans", "Exploit Analysis", "Post-Mortem"]
  },
  {
    title: "Quantum Encryption",
    icon: <FaLock />,
    desc: "Deploying AES-256 and RSA-4096 standards with a roadmap toward quantum-resistant algorithms.",
    tags: ["Data at Rest", "In-Transit", "End-to-End"]
  },
  {
    title: "Threat Intelligence",
    icon: <FaShieldVirus />,
    desc: "AI-driven monitoring that identifies anomalous behavior patterns in real-time.",
    tags: ["SIEM Integration", "EDR", "24/7 Monitoring"]
  }
];

export default function Products() {
  const { scrollYProgress } = useScroll();
  const scanY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="pt-32 pb-20 bg-[#050505] min-h-screen relative overflow-hidden text-white">
      
      {/* 1. ANIMATED SECURITY SCANNER OVERLAY */}
      <motion.div 
        style={{ top: scanY }}
        className="fixed left-0 w-full h-px bg-red-500/50 shadow-[0_0_15px_red] z-50 pointer-events-none"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500 mb-8"
          >
            <FaUserShield size={44} className="animate-pulse" />
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
            PROTOCOL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-zinc-800">SECURITY.</span>
          </h1>
          
          <p className="text-zinc-500 text-xl max-w-2xl font-light">
            Architecture hardened against the unknown. We don't just protect data; we build <span className="text-white">impenetrable digital perimeters</span>.
          </p>
        </div>

        {/* 2. LIVE THREAT MONITOR SIMULATION */}
        
        <div className="mb-32 p-1 bg-zinc-900/50 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-black rounded-[1.9rem] p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <h3 className="font-mono text-red-500 text-xs tracking-[0.3em] uppercase">Global Threat Map</h3>
                <p className="text-2xl font-black">ACTIVE MONITORING V.4.0</p>
              </div>
              <div className="flex gap-12">
                <div>
                  <p className="text-zinc-600 text-[10px] uppercase font-bold">Encrypted Nodes</p>
                  <p className="text-xl font-mono">14,209</p>
                </div>
                <div>
                  <p className="text-zinc-600 text-[10px] uppercase font-bold">Threats Blocked</p>
                  <p className="text-xl font-mono text-red-500">892,110</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 h-64 w-full bg-zinc-950 rounded-xl relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <FaMicrochip size={200} className="text-red-500 animate-spin-slow" />
                </div>
                {/* Simulated Data Streams */}
                <div className="p-4 font-mono text-[10px] text-emerald-500/50 overflow-hidden h-full">
                  {Array.from({length: 10}).map((_, i) => (
                    <p key={i} className="mb-1">HEX_ERR_{Math.random().toString(16).slice(2, 10)} : REJECTED_CONN_FROM_UNTRUSTED_NODE...</p>
                  ))}
                </div>
            </div>
          </div>
        </div>

        {/* 3. SECURITY FEATURE GRID */}
        
        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-zinc-900/30 border border-white/5 hover:border-red-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-red-500/10 transition-colors">
                {item.icon}
              </div>
              
              <div className="text-red-500 text-4xl mb-8 group-hover:rotate-[360deg] transition-transform duration-700">
                {item.icon}
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed mb-10">{item.desc}</p>
              
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-zinc-950 text-zinc-400 text-[9px] font-mono border border-white/10 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. COMPLIANCE MARQUEE */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <p className="text-center font-mono text-[10px] text-zinc-600 uppercase tracking-[0.5em] mb-12">Authorized Compliance Standards</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
             <span className="text-2xl font-black italic">SOC2 TYPE II</span>
             <span className="text-2xl font-black italic">ISO/IEC 27001</span>
             <span className="text-2xl font-black italic">GDPR HARDENED</span>
             <span className="text-2xl font-black italic">PCI DSS COMPLIANT</span>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <section className="py-40 flex flex-col items-center">
         <motion.div 
           whileHover={{ scale: 1.05 }}
           className="relative p-1 rounded-full bg-gradient-to-r from-red-600 to-zinc-800"
         >
           <button className="px-16 py-8 bg-black rounded-full font-black text-xs uppercase tracking-widest text-white hover:bg-transparent transition-colors">
              Initialize Security Audit
           </button>
         </motion.div>
      </section>
    </div>
  );
}