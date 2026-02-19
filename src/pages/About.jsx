import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaUsers, FaEye, FaRocket, FaHandshake, FaBullseye, FaFingerprint, FaChevronRight } from 'react-icons/fa';

const About = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Advanced Parallax
  const xLeft = useTransform(smoothProgress, [0, 1], [0, -500]);
  const xRight = useTransform(smoothProgress, [0, 1], [0, 500]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.2]);

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", bounce: 0.4, duration: 1 } 
    }
  };

  return (
    <motion.div 
      className="bg-black text-white min-h-screen relative overflow-hidden selection:bg-amber-500 selection:text-black"
    >
      {/* 1. AMBIENT LIQUID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            borderRadius: ["30% 70% 70% 30%", "50% 50% 20% 80%", "30% 70% 70% 30%"]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-amber-500/10 blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />
      </div>

      {/* 2. INFINITE MARQUEE BACKGROUND */}
      <div className="absolute top-40 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <motion.h2 style={{ x: xLeft }} className="text-[25vw] font-black leading-none">
          MINTWAYS MINTWAYS MINTWAYS
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-56 pb-32">
        
        {/* --- 3. HERO: STAGGERED MASK REVEAL --- */}
        <section className="mb-72">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-amber-500 font-mono tracking-[0.4em] uppercase text-sm mb-8 block"
            >
              // Established 2014
            </motion.span>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12">
              WE ARE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-amber-600 animate-pulse">
                NEW STANDARD.
              </span>
            </h1>
            
            <p className="text-zinc-500 text-2xl md:text-3xl font-light leading-relaxed">
              Mintways is a <span className="text-white">boutique digital forge</span>. We don't build apps; we architect movements. Every pixel is intentional, every line of code is an asset.
            </p>
          </motion.div>
        </section>

        {/* --- 4. THE CHROME STATS (HORIZONTAL PARALLAX) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 mb-72">
          {[
            { label: "Elite Devs", val: "50+", color: "hover:text-amber-500" },
            { label: "Global Presence", val: "12", color: "hover:text-amber-500" },
            { label: "Capital Raised", val: "$100M+", color: "hover:text-amber-500" },
            { label: "Customer LTV", val: "94%", color: "hover:text-amber-500" }
          ].map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "#0a0a0a" }}
              className="bg-black p-16 flex flex-col items-center justify-center transition-all duration-500 group"
            >
              <h4 className={`text-6xl font-black mb-2 transition-colors duration-300 ${s.color}`}>
                {s.val}
              </h4>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 group-hover:text-white transition-colors">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- 5. THE "CHESSPIECE" PHILOSOPHY (3D PERSPECTIVE) --- */}
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-72">
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-zinc-800 overflow-hidden group">
               <motion.img 
                style={{ scale }}
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-opacity duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-40 h-40 border border-amber-500/20 rounded-full animate-ping" />
               </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <h2 className="text-5xl font-black tracking-tight">OUR COMMANDMENTS</h2>
            {[
              { title: "Radical Transparency", desc: "No black boxes. You see every sprint, every bug, and every win." },
              { title: "Performance First", desc: "If it's not fast, it's broken. We optimize for millisecond latency." },
              { title: "Human Scale", desc: "Technology should serve the user, not the other way around." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-default"
              >
                <h3 className="text-xl font-bold flex items-center gap-4 group-hover:text-amber-500 transition-colors">
                  <span className="text-zinc-800 text-sm italic">0{i+1}.</span> {v.title}
                </h3>
                <p className="text-zinc-500 mt-2 ml-10 border-l border-zinc-900 pl-6 group-hover:border-amber-500 transition-all duration-500">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 6. CTA: THE BLACK HOLE --- */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="relative rounded-[4rem] bg-zinc-900 p-20 text-center border border-zinc-800 overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-12">
              STAY <br /> <span className="italic text-zinc-700">OBSOLETE</span> <br /> OR MINT THE FUTURE.
            </h2>
            <motion.button 
              whileHover={{ gap: "2rem" }}
              className="group flex items-center gap-4 mx-auto px-12 py-6 bg-white text-black rounded-full font-black uppercase text-xs tracking-tighter transition-all"
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