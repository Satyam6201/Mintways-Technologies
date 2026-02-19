import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const coreValues = [
  { word: 'Trust', color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { word: 'Agility', color: 'text-[#ccff00]', bg: 'bg-[#ccff00]/10' },
  { word: 'Success', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { word: 'Quality', color: 'text-fuchsia-500', bg: 'bg-fuchsia-500/10' }
];

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Text parallax effect
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden bg-transparent">
      {/* Background Decorative "DNA" lines */}
      <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent rotate-12" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE: THE VISUAL STORY */}
        <motion.div 
          style={{ y: yText }}
          className="relative group"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-900">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
              alt="Team collaboration" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            {/* The "20 Years" Floating Badge */}
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="absolute bottom-10 -right-4 bg-[#ccff00] text-black p-8 rounded-2xl shadow-2xl"
            >
              <span className="block text-5xl font-black leading-none">20+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Years of Mastery</span>
            </motion.div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-amber-500/20 blur-3xl -z-10 opacity-50" />
        </motion.div>

        {/* RIGHT SIDE: THE NARRATIVE */}
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#ccff00] font-mono tracking-[0.5em] uppercase text-xs mb-6"
          >
            Digital Architects
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none"
          >
            NOT JUST A TEAM. <br />
            <span className="italic text-zinc-500">A MOVEMENT.</span>
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed"
          >
            <p>
              Born from a legacy of <span className="text-white font-medium italic underline decoration-[#ccff00]">two decades</span> in high-tier IT engineering, Mintways was built to bridge the gap between corporate stability and startup velocity.
            </p>
            <p>
              We don't just "develop"—we architect. Our collective combines the battle-hardened wisdom of industry veterans with the raw, disruptive energy of Gen-Z innovators. 
              The result? <span className="text-white">Software that survives.</span>
            </p>
          </motion.div>

          {/* GRID OF VALUES */}
          <div className="mt-16 grid grid-cols-2 gap-4">
            {coreValues.map((item, i) => (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border border-white/5 backdrop-blur-sm transition-all flex flex-col gap-2`}
              >
                <div className={`w-2 h-2 rounded-full ${item.word === 'Trust' ? 'bg-amber-500' : item.word === 'Agility' ? 'bg-[#ccff00]' : item.word === 'Success' ? 'bg-cyan-400' : 'bg-fuchsia-500'}`} />
                <span className={`text-lg font-bold tracking-tight ${item.color}`}>{item.word}</span>
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-black">Standard 0{i+1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}