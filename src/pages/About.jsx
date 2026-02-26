import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaChevronRight, FaQuoteLeft, FaFingerprint, 
  FaConnectdevelop, FaGlobeAmericas, FaMicrochip, 
  FaShieldAlt, FaServer, FaCogs, FaProjectDiagram 
} from 'react-icons/fa';
import CEOImage from '../assets/CEO.jpg';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Advanced Parallax & Visual Transforms
  const xLeft = useTransform(smoothProgress, [0, 1], ["0%", "-200%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const yImage = useTransform(scrollYProgress, [0.1, 0.4], [50, -100]);

  const commandments = [
    { 
      title: "Radical Transparency", 
      desc: "We eliminate the 'Black Box'. Real-time access to our internal Jira, Slack, and staging environments is your default right.",
      icon: <FaFingerprint />,
      tag: "TRUST_PROTOCOL"
    },
    { 
      title: "Performance First", 
      desc: "If it's not sub-second, it's broken. Architectures built for millisecond latency and infinite horizontal scaling.",
      icon: <FaMicrochip />,
      tag: "SPEED_PROTOCOL"
    },
    { 
      title: "Ethical Engineering", 
      desc: "Privacy is a foundation. Every line of code complies with global data sovereignty standards like GDPR and SOC2.",
      icon: <FaShieldAlt />,
      tag: "SECURITY_PROTOCOL"
    }
  ];

  const roadmap = [
    { year: "2019", event: "Genesis: Foundation of the Engineering Forge" },
    { year: "2021", event: "Global Expansion: 12 Active Nodes Across 3 Continents" },
    { year: "2024", event: "AI Integration: Autonomous DevOps Workflows Launched" },
    { year: "2026", event: "The Future: Quantum-Ready Encryption Protocols" }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="bg-[#020202] text-white min-h-screen relative overflow-hidden selection:bg-[#ccff00] selection:text-black"
    >
      {/* 1. KINETIC BACKGROUND HUD */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div 
          style={{ scale: smoothProgress }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_#ccff0005_0%,_transparent_50%)]" 
        />
      </div>

      {/* 2. INFINITE SCROLL MARQUEE */}
      <div className="absolute top-80 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none z-0">
        <motion.h2 style={{ x: xLeft }} className="text-[25vw] font-black leading-none italic uppercase">
          CODE INNOVATIVE // SCALABILITY // DOMINANCE // MISSION CRITICAL //
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-48 pb-32">
        
        {/* --- 3. HERO: THE MANIFESTO --- */}
        <motion.section style={{ opacity: opacityText, scale: scaleHero }} className="mb-80">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                className="h-1 bg-[#ccff00] mb-8"
              />
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
                FORGED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white italic">IN CODE.</span>
              </h1>
            </div>
            <div className="space-y-8">
              <p className="text-zinc-500 text-xl md:text-3xl font-light leading-tight">
                 Code Innovative Technologies isn’t a studio. It’s a <span className="text-white font-bold">Tactical Deployment Center</span> for market-dominating software.
              </p>
              <div className="flex gap-4">
                {["GOLANG", "REACT", "AWS", "K8S"].map(tech => (
                  <span key={tech} className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono text-zinc-600">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- 4. CEO BIOMETRIC PROFILE --- */}
        <section className="mb-80">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              style={{ y: yImage }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/5] bg-zinc-900 group-hover:border-[#ccff00]/30 transition-all duration-700">
                <img 
                  src={CEOImage} 
                  alt="CEO Profile" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                
                {/* BIO OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-black tracking-tighter text-white uppercase">The Founder</h3>
                      <p className="text-[#ccff00] font-mono text-xs tracking-widest mt-1">S_ENGINEER_RANK_01</p>
                    </div>
                    <div className="flex gap-2">
                       <div className="w-1 h-8 bg-[#ccff00]/20" />
                       <div className="w-1 h-8 bg-[#ccff00]/40" />
                       <div className="w-1 h-8 bg-[#ccff00]/60" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decor Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-[#ccff00]/20 rounded-tr-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-[#ccff00]/20 rounded-bl-3xl" />
            </motion.div>

            <div className="lg:col-span-7 space-y-12">
              <FaQuoteLeft className="text-[#ccff00] text-7xl opacity-20" />
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] uppercase">
                "Architecture <br /> is the <span className="text-[#ccff00] italic underline decoration-1">Destiny</span> <br /> of Software."
              </h2>
              <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">
                With over half a decade leading high-tier engineering squads, our CEO directs every project through the lens of <span className="text-white">Hardened Reliability</span>. We don't just ship; we deploy fortresses.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Core_Competency</p>
                  <p className="text-white font-black uppercase tracking-widest text-sm">Distributed Systems</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Philosophy</p>
                  <p className="text-white font-black uppercase tracking-widest text-sm">Zero-Latency Logic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. THE ROADMAP: EVOLUTION --- */}
        <section className="mb-80 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">Chronology</h2>
          </div>
          
          <div className="space-y-12 relative z-10">
            {roadmap.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:items-start' : 'lg:items-end'} items-center`}
              >
                <div className={`lg:w-1/2 p-10 rounded-3xl bg-zinc-950 border border-white/5 hover:border-[#ccff00]/20 transition-all group`}>
                   <span className="text-[#ccff00] font-mono text-4xl font-black mb-4 block">{item.year}</span>
                   <p className="text-zinc-400 text-lg group-hover:text-white transition-colors">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 6. COMMANDMENTS GRID --- */}
        <section className="mb-80">
          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/5">
            {commandments.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "rgba(204, 255, 0, 0.02)" }}
                className="p-16 bg-[#050505] transition-all group"
              >
                <div className="text-[#ccff00] text-4xl mb-12 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  {v.icon}
                </div>
                <p className="text-[9px] font-mono text-zinc-600 tracking-[0.3em] mb-4 uppercase">{v.tag}</p>
                <h3 className="text-3xl font-black mb-6 group-hover:text-[#ccff00] transition-colors">{v.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light italic">
                  "{v.desc}"
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 7. THE VOID: ACTION --- */}
        <motion.div 
          whileHover={{ scale: 0.99 }}
          className="relative rounded-[5rem] bg-[#ccff00] p-24 text-center overflow-hidden cursor-none group"
        >
          <motion.div 
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" 
          />
          
          <div className="relative z-10">
            <h2 className="text-6xl md:text-[9rem] font-black mb-12 tracking-tighter text-black leading-none uppercase italic">
              ADAPT_OR <br /> PERISH.
            </h2>
            <p className="text-black/60 font-mono text-sm tracking-widest mb-12 uppercase font-black">Ready to deploy the future?</p>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="px-16 py-8 bg-black text-[#ccff00] rounded-full font-black uppercase text-sm tracking-[0.3em] hover:bg-zinc-900 transition-all flex items-center gap-4 mx-auto"
            >
              INITIALIZE_EVOLUTION <FaChevronRight />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;