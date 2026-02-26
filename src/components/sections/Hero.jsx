import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaCode, FaMicrochip, FaGlobe, 
  FaSatellite, FaShieldAlt, FaBolt, FaTerminal 
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 md:px-12 bg-[#020202]">
      
      {/* --- LAYER 0: AMBIENT TECHNICAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        {/* Vertical Ghost Text Scroller */}
        <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around text-[8px] font-mono text-zinc-800 tracking-[1em] uppercase vertical-text hidden md:flex select-none">
          <span>Deployment_Protocol_Active</span>
          <span>Latency_Checked_1.2ms</span>
          <span>Neural_Sync_Established</span>
        </div>

        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-[radial-gradient(circle_at_50%_0%,#ccff000a_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- LEFT CONTENT: DATA TERMINAL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 space-y-8 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 font-mono text-[8px] md:text-[9px] tracking-[0.5em] text-[#ccff00] bg-[#ccff00]/5 w-fit px-3 py-1 rounded-full border border-[#ccff00]/20"
            >
              <FaTerminal className="animate-pulse" /> CORE_INIT_VERSION_2.0.4
            </motion.div>

            <h1 className="text-[14vw] lg:text-[6.5rem] font-black leading-[0.8] tracking-tighter uppercase italic text-white">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-emerald-300 to-cyan-500">
                SUPREMACY.
              </span>
            </h1>
          </div>

          <p className="text-zinc-500 text-xs md:text-sm max-w-lg leading-relaxed font-medium tracking-tight border-l border-white/10 pl-4 md:pl-6">
            Architecting ultra-high-performance distributed systems for the next 
            generation of digital powerhouses. We eliminate technical debt through 
            radical architectural precision.
          </p>

          {/* Action Hub */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#ccff00] text-black font-black text-[10px] tracking-[0.3em] uppercase rounded-sm flex items-center justify-center gap-3 transition-colors"
            >
              <a href="/contact">Start Project </a><FaBolt />
            </motion.button>
            
            <button className="w-full sm:w-auto px-8 py-4 border border-white/5 text-zinc-400 font-black text-[10px] tracking-[0.3em] uppercase rounded-sm hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-3">
              <a href="/career">Explore Stack</a> <FaArrowRight size={8} className="text-[#ccff00]" />
            </button>
          </div>

          {/* Expanded Hardware Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-white/5">
            {[
              { label: "Throughput", val: "10Gb/s", icon: FaSatellite },
              { label: "Security", val: "Level_4", icon: FaShieldAlt },
              { label: "Global_Nodes", val: "24/7", icon: FaGlobe },
              { label: "Optimization", val: "99.2%", icon: FaMicrochip }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-600 mb-1">
                  <stat.icon size={10} />
                  <span className="text-[8px] font-mono uppercase tracking-widest">{stat.label}</span>
                </div>
                <p className="text-sm font-black text-white">{stat.val}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT CONTENT: HARDWARE VISUAL --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 relative order-1 lg:order-2 px-4 md:px-0"
        >
          {/* Main Container */}
          <div className="relative aspect-square max-w-[450px] mx-auto group">
            
            {/* Corner Bracket Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#ccff00]/40 z-20" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#ccff00]/40 z-20" />

            {/* Scanning Laser Line */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-xl">
               <motion.div 
                animate={{ y: ["-100%", "300%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-[2px] bg-[#ccff00] shadow-[0_0_15px_#ccff00]"
               />
            </div>

            {/* Content Mask */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                alt="Infrastructure" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </div>

            {/* Floating Telemetry Data */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-4 p-4 bg-zinc-950 border border-white/10 rounded shadow-2xl z-40 hidden sm:block"
            >
              <div className="space-y-2">
                <div className="w-12 h-1 bg-[#ccff00]/20 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["0%", "80%", "30%", "95%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="h-full bg-[#ccff00]" 
                  />
                </div>
                <p className="font-mono text-[7px] text-zinc-500 uppercase tracking-tighter">Memory_Usage: 14.2%</p>
                <p className="font-mono text-[7px] text-zinc-500 uppercase tracking-tighter">Core_Temp: 34°C</p>
              </div>
            </motion.div>

            {/* Bottom Code Snippet Overlay */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 p-3 bg-black/90 backdrop-blur-md border border-white/5 rounded-lg z-40 font-mono text-[8px] text-zinc-400 hidden sm:block">
              <span className="text-[#ccff00]">function</span> <span className="text-cyan-400">deployNode</span>() {'{'} <br />
              &nbsp;&nbsp;await protocol.<span className="text-emerald-400">sync</span>(); <br />
              &nbsp;&nbsp;return <span className="text-orange-400">"SUCCESS"</span>; <br />
              {'}'}
            </div>
          </div>

          {/* Background Tech Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/[0.03] rounded-full pointer-events-none -z-10" />
        </motion.div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}