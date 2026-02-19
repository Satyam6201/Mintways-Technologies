import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaSearchDollar, FaProjectDiagram, FaUserTie, 
  FaChartLine, FaShieldAlt, FaLightbulb, FaGlobe 
} from 'react-icons/fa';

const strategicPillars = [
  {
    title: "ROI Optimization",
    icon: <FaSearchDollar />,
    desc: "We deconstruct your tech spend to eliminate waste and reallocate capital into high-growth R&D.",
    stats: "Avg. 32% Savings"
  },
  {
    title: "Fractional CTO",
    icon: <FaUserTie />,
    desc: "Executive-level leadership on demand. Scaling your engineering culture without the C-suite overhead.",
    stats: "20+ Years Exp"
  },
  {
    title: "Digital Migration",
    icon: <FaProjectDiagram />,
    desc: "Seamless transition from legacy monoliths to cloud-native microservices with zero downtime.",
    stats: "Zero-Risk Policy"
  },
  {
    title: "Market Disruption",
    icon: <FaLightbulb />,
    desc: "Identifying emerging tech trends before they hit the mainstream to give you a first-mover advantage.",
    stats: "Future Proof"
  }
];

export default function Consulting() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="bg-[#030303] text-white min-h-screen pt-32 overflow-hidden">
      
      {/* --- SECTION 1: HERO & INTELLIGENCE HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ccff00]/5 blur-[120px] rounded-full -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-widest">Live Audit</span>
              <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest animate-pulse">Consulting_Session: Active</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              TACTICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-500 italic">FORESIGHT.</span>
            </h1>
            
            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl mb-10">
              In a volatile market, speed is secondary to direction. We provide the <span className="text-white">architectural roadmap</span> that ensures your technology fuels your bottom line, not drains it.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#ccff00] transition-colors"
            >
              Request Technical Audit
            </motion.button>
          </motion.div>

          {/* ROI VISUALIZATION CARD */}
          
          <motion.div 
            style={{ scale, opacity }}
            className="relative bg-zinc-900/50 p-8 rounded-[3rem] border border-white/10 backdrop-blur-3xl"
          >
             <div className="flex justify-between items-center mb-12">
                <div className="space-y-1">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em]">Efficiency Growth</p>
                  <h3 className="text-3xl font-black">+148.4%</h3>
                </div>
                <FaChartLine className="text-[#ccff00] text-4xl" />
             </div>
             
             {/* Simulated Growth Bars */}
             <div className="flex items-end gap-3 h-48">
                {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-emerald-900 to-[#ccff00] rounded-t-lg"
                    transition={{ delay: i * 0.1, duration: 1 }}
                  />
                ))}
             </div>
          </motion.div>
        </div>
      </div>

      {/* --- SECTION 2: THE PILLARS (HORIZONTAL GRID) --- */}
      <section className="bg-white text-black py-32 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
            <h2 className="text-5xl font-black tracking-tighter max-w-md">CORE STRATEGIC VERTICALS.</h2>
            <p className="text-zinc-400 font-medium max-w-xs text-sm uppercase tracking-widest leading-relaxed">
              Decentralized expertise across four key growth sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicPillars.map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-200 hover:shadow-2xl hover:bg-white transition-all group"
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
                  {pillar.icon}
                </div>
                <h4 className="font-black text-xl mb-4 tracking-tight uppercase">{pillar.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">{pillar.desc}</p>
                <div className="text-[10px] font-black tracking-widest uppercase text-emerald-600">{pillar.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE MATURITY MODEL --- */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 italic">MATURITY PHASES</h2>
            <div className="h-1 w-24 bg-[#ccff00] mx-auto" />
          </div>

          <div className="space-y-6">
            {[
              { label: "Phase 01: Stabilization", desc: "Patching critical tech debt and infrastructure vulnerabilities." },
              { label: "Phase 02: Expansion", desc: "Implementing scalable cloud architecture and data pipelines." },
              { label: "Phase 03: Dominance", desc: "AI-integration and automated market capture strategies." }
            ].map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-8 p-8 bg-zinc-900/30 border border-white/5 rounded-3xl hover:border-[#ccff00]/50 transition-all cursor-crosshair"
              >
                <span className="text-4xl font-black text-zinc-800">{idx + 1}</span>
                <div>
                  <h5 className="font-bold text-white uppercase tracking-widest mb-1">{phase.label}</h5>
                  <p className="text-zinc-500 text-sm">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GLOBAL REACH --- */}
      <section className="py-32 px-6 bg-emerald-500">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <FaGlobe className="text-black text-6xl mb-8 animate-spin-slow" />
          <h2 className="text-black text-5xl md:text-7xl font-black tracking-tighter mb-8">
            WORLD CLASS <br /> CONSULTANCY.
          </h2>
          <p className="text-emerald-950 font-bold max-w-2xl mb-12">
            Our consultants are distributed across 4 continents, bringing a global perspective to local market challenges.
          </p>
          <button className="bg-black text-white px-12 py-6 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
            Start the Conversation
          </button>
        </div>
      </section>

    </div>
  );
}