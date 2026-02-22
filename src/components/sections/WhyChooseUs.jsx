import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaSync, FaHeadset, FaTerminal, 
  FaFingerprint, FaSatelliteDish, FaCodeBranch 
} from 'react-icons/fa';
import { MdGraphicEq } from 'react-icons/md';

const features = [
  { 
    title: 'Precision Logic', 
    desc: 'We architect your business DNA. Our engineers map every workflow dependency to eliminate technical debt before it even exists.',
    icon: <FaTerminal />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'Velocity Protocol', 
    desc: 'Bypass traditional delays. Our "Rapid-Pulse" CI/CD pipeline ensures feature deployment at the speed of thought.',
    icon: <FaCodeBranch />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'Ghost Security', 
    desc: 'Impenetrable SOC2-ready encryption layers. We build digital fortresses that remain invisible to external threats.',
    icon: <FaShieldAlt />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: '24/7 Surveillance', 
    desc: 'Real-time telemetry and predictive monitoring. If a node flinches, our tactical team has already patched it.',
    icon: <FaHeadset />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 px-6 relative overflow-hidden bg-[#030303]">
      
      {/* --- CYBER BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ccff00]/30 to-transparent" />
      
      {/* Moving Ambient Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* LEFT: THE BLUEPRINT VISUAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          {/* Main Visual Frame */}
          <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] p-px bg-gradient-to-b from-[#ccff00]/40 via-transparent to-white/10 overflow-hidden group">
            <div className="bg-[#080808] rounded-[1.9rem] lg:rounded-[2.9rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
                alt="Cyber Engineering" 
                className="w-full h-[400px] lg:h-[600px] object-cover grayscale opacity-30 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
              />
            </div>

            {/* Terminal Overlay */}
            <div className="absolute top-6 left-6 right-6 bottom-6 border border-white/5 rounded-2xl pointer-events-none flex flex-col justify-between p-6">
               <div className="flex justify-between items-start">
                  <div className="font-mono text-[10px] text-[#ccff00] space-y-1">
                    <p className="flex gap-2"><span className="opacity-50">&gt;</span> STATUS: OPERATIONAL</p>
                    <p className="flex gap-2"><span className="opacity-50">&gt;</span> ENCRYPTION: AES_256</p>
                  </div>
                  <FaFingerprint className="text-[#ccff00] text-2xl animate-pulse" />
               </div>
               <div className="h-24 w-full bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-4 flex items-center justify-center">
                  <MdGraphicEq className="text-4xl text-[#ccff00]" />
                  <div className="ml-4 flex-1">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/3 bg-[#ccff00]"
                      />
                    </div>
                    <p className="text-[8px] font-mono text-zinc-500 mt-2 uppercase tracking-widest">Global_Sync_Protocol</p>
                  </div>
               </div>
            </div>
            
            {/* Vertical Scanning Laser */}
            <motion.div 
              animate={{ left: ['-10%', '110%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-[2px] h-full bg-[#ccff00] blur-[4px] z-20"
            />
          </div>

          {/* Floating Experience Badge */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="absolute -bottom-4 -right-2 lg:-bottom-6 lg:-right-6 bg-zinc-900 border border-[#ccff00]/30 p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl z-30"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-[#ccff00] animate-ping" />
              <span className="text-[9px] font-mono text-zinc-400 tracking-widest uppercase">Legacy_Node</span>
            </div>
            <h4 className="text-4xl lg:text-5xl font-black text-white italic">20<span className="text-[#ccff00]">YRS</span></h4>
            <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 mt-1 font-bold">Industry Seniority</p>
          </motion.div>
        </motion.div>

        {/* RIGHT: THE CONTENT */}
        <div className="space-y-10 lg:space-y-16 order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-block">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              className="h-1 bg-[#ccff00] mb-6 mx-auto lg:ml-0"
            />
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8"
            >
              ELITE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-white to-[#ccff00] bg-[size:200%_auto] animate-gradient">ENGINEERING.</span>
            </motion.h2>
            <p className="text-zinc-400 text-lg lg:text-xl font-light leading-relaxed max-w-xl mx-auto lg:ml-0">
              MINTWAYS is not just a service provider. We are your <span className="text-[#ccff00] font-bold">Tactical Infrastructure Partner</span>, engineering battle-tested systems for global scale.
            </p>
          </div>

          {/* FEATURE TILES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-500 group ${item.border} ${item.glow} hover:bg-[#ccff00]/[0.02]`}
              >
                <div className={`text-3xl mb-4 lg:mb-6 ${item.color} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-2 tracking-tight uppercase">{item.title}</h4>
                <p className="text-[12px] text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Bottom Spacer */}
          <div className="h-8 lg:hidden" />
        </div>
      </div>
    </section>
  );
}