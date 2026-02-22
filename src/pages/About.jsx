import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaChevronRight, FaQuoteLeft, FaFingerprint, 
  FaConnectdevelop, FaGlobeAmericas, FaMicrochip, FaShieldAlt 
} from 'react-icons/fa';
import CEOImage from '../assets/CEO.jpg'; // Importing CEO image

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Advanced Parallax offsets
  const xLeft = useTransform(smoothProgress, [0, 1], ["0%", "-150%"]);
  const yImage = useTransform(smoothProgress, [0, 1], [0, -100]);
  const rotateValue = useTransform(smoothProgress, [0, 1], [0, 10]);

  const commandments = [
    { 
      title: "Radical Transparency", 
      desc: "We eliminate the 'Black Box' of development. You gain real-time access to our internal Jira, Slack, and staging environments.",
      icon: <FaFingerprint /> 
    },
    { 
      title: "Performance First", 
      desc: "If it's not sub-second, it's broken. Our architectures are built for millisecond latency and infinite horizontal scaling.",
      icon: <FaMicrochip /> 
    },
    { 
      title: "Ethical Engineering", 
      desc: "Privacy isn't a feature; it's a foundation. Every line of code complies with global data sovereignty standards.",
      icon: <FaShieldAlt /> 
    }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="bg-[#030303] text-white min-h-screen relative overflow-hidden selection:bg-[#ccff00] selection:text-black"
    >
      {/* 1. CYBERNETIC BACKGROUND GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#ccff0008_0%,_transparent_70%)]" 
        />
      </div>

      {/* 2. BACKGROUND MARQUEE */}
      <div className="absolute top-60 left-0 w-full whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
        <motion.h2 style={{ x: xLeft }} className="text-[20vw] font-black leading-none italic uppercase">
          Digital Excellence // Minting The Future // 20 Years Mastery //
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-56 pb-32">
        
        {/* --- 3. HERO: THE MANIFESTO --- */}
        <section className="mb-72">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#ccff00] font-mono tracking-[0.5em] uppercase text-xs mb-8 block font-black">
                // System_Manifesto
              </span>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12">
                BEYOND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ccff00]">
                  DEVELOPMENT.
                </span>
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed max-w-xl pb-4 border-l-2 border-[#ccff00]/20 pl-8"
            >
              Mintways is a <span className="text-white font-medium">high-velocity technology forge</span>. Born from the intersection of corporate security and startup agility, we engineer the protocols that power tomorrow’s market leaders.
            </motion.p>
          </div>
        </section>

        {/* --- 4. CEO SECTION: LEADERSHIP --- */}
        <section className="mb-72">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              style={{ y: yImage, rotate: rotateValue }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#ccff00]/20 aspect-[4/5] bg-zinc-900">
                <img 
                  src={CEOImage} 
                  alt="CEO of Mintways" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                {/* HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-[#ccff00] font-mono text-[10px] space-y-1">
                  <p>&gt; IDENTITY: VERIFIED</p>
                  <p>&gt; CLEARANCE: LEVEL_01</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#ccff00]/10 blur-3xl -z-10 group-hover:bg-[#ccff00]/20 transition-all" />
            </motion.div>

            <div className="lg:col-span-7 space-y-10">
              <FaQuoteLeft className="text-[#ccff00] text-5xl opacity-50" />
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                "We don't build software to fill a gap; we build it to <span className="text-[#ccff00] italic">conquer</span> the category."
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-2xl">
                <p>
                  Our CEO brings two decades of battle-hardened experience in high-tier IT engineering. Under his vision, Mintways has evolved from a boutique consultancy into a global powerhouse for <span className="text-white">mission-critical infrastructure</span>.
                </p>
                <div className="pt-4">
                  <h4 className="text-white font-black text-xl tracking-tighter">THE FOUNDER'S VISION</h4>
                  <p className="text-[#ccff00] font-mono text-xs tracking-widest mt-1">CHIEF_EXECUTIVE_OFFICER</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. THE STATS MATRIX --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-72 rounded-3xl overflow-hidden">
          {[
            { label: "Elite Devs", val: "50+", icon: <FaConnectdevelop /> },
            { label: "Global Nodes", val: "12", icon: <FaGlobeAmericas /> },
            { label: "Uptime Protocol", val: "99.9%", icon: <FaShieldAlt /> },
            { label: "Retention Rate", val: "94%", icon: <FaFingerprint /> }
          ].map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(204, 255, 0, 0.05)" }}
              className="bg-[#080808] p-12 flex flex-col items-center text-center group transition-colors"
            >
              <div className="text-[#ccff00] text-2xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                {s.icon}
              </div>
              <h4 className="text-5xl font-black mb-2 text-white group-hover:text-[#ccff00] transition-colors">
                {s.val}
              </h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-bold group-hover:text-white transition-colors">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- 6. THE CORE PHILOSOPHY --- */}
        <section className="mb-72">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">CORE_TENETS</h2>
            <div className="h-1 w-24 bg-[#ccff00]" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {commandments.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00] text-2xl mb-8 group-hover:rotate-[360deg] transition-transform duration-700">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#ccff00] transition-colors">{v.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 7. FINAL CTA: THE VOID --- */}
        <motion.div 
          className="relative rounded-[4rem] bg-zinc-900/50 p-20 text-center border border-white/5 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ccff0005_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">
              ADAPT_OR <br /> <span className="italic text-zinc-700">PERISH.</span> <br /> MINT THE FUTURE.
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-6 mx-auto px-12 py-6 bg-[#ccff00] text-black rounded-full font-black uppercase text-xs tracking-widest transition-all"
            >
              Start Your Evolution <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;