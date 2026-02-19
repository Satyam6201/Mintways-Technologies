import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaSync, FaHeadset, FaTerminal } from 'react-icons/fa';

const features = [
  { 
    title: 'Precision Business Logic', 
    desc: 'We decode your workflow to identify bottlenecks before writing a single line of code.',
    icon: <FaTerminal />, 
    color: 'text-[#ccff00]', // Toxic Emerald
    glow: 'shadow-[#ccff00]/10',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'Velocity Delivery', 
    desc: 'Our "Sprint-Release" cycles ensure you see progress every 72 hours, not every 6 months.',
    icon: <FaSync />, 
    color: 'text-cyan-400', // Cyber Cyan
    glow: 'shadow-cyan-400/10',
    border: 'group-hover:border-cyan-400/50' 
  },
  { 
    title: 'Fortress Security', 
    desc: 'Enterprise-grade encryption and SOC2-compliant architectures come standard.',
    icon: <FaShieldAlt />, 
    color: 'text-indigo-500', // Electric Indigo
    glow: 'shadow-indigo-500/10',
    border: 'group-hover:border-indigo-500/50' 
  },
  { 
    title: 'Elite Surveillance', 
    desc: '24/7 technical monitoring to ensure your systems never face a millisecond of downtime.',
    icon: <FaHeadset />, 
    color: 'text-fuchsia-500', // Deep Violet/Fuchsia
    glow: 'shadow-fuchsia-500/10',
    border: 'group-hover:border-fuchsia-500/50' 
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* 1. LAYERED BACKGROUND: Tech Grid + Moving Data Particles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        
        {/* LEFT: THE BLUEPRINT VISUAL */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] p-px bg-gradient-to-b from-indigo-500/50 via-transparent to-cyan-500/50 overflow-hidden group">
            <div className="bg-black rounded-[2.9rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
                alt="Datacenter Engineering" 
                className="w-full grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
              />
            </div>
            
            {/* Horizontal Scanning Laser */}
            <motion.div 
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent blur-[2px] z-20"
            />
          </div>

          {/* Experience Floating Console */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="absolute -bottom-6 -right-6 bg-[#0a0a0a]/90 backdrop-blur-3xl border border-indigo-500/20 p-8 rounded-3xl shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] font-mono text-indigo-400 tracking-[0.3em]">SYSTEM_STABLE</span>
            </div>
            <h4 className="text-5xl font-black text-white italic">20<span className="text-indigo-500">YRS</span></h4>
            <p className="text-[9px] uppercase tracking-widest text-zinc-500 mt-2 font-bold">Industry Seniority</p>
          </motion.div>
        </motion.div>

        {/* RIGHT: THE CONTENT */}
        <div className="space-y-12">
          <div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              className="h-1 bg-indigo-500 mb-8"
            />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] mb-8"
            >
              ELITE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">INFRASTRUCTURE.</span>
            </motion.h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-xl">
              We eliminate the guesswork. Mintways provides <span className="text-white border-b border-indigo-500/50">battle-tested frameworks</span> designed for massive scale and impenetrable security.
            </p>
          </div>

          {/* FEATURE TILES */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl bg-zinc-900/20 border border-white/5 backdrop-blur-md transition-all duration-500 group ${item.border} ${item.glow} hover:bg-indigo-500/[0.03]`}
              >
                <div className={`text-3xl mb-6 ${item.color} group-hover:rotate-[360deg] transition-transform duration-700`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-[13px] text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}