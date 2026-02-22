import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaCode, FaMicrochip, FaUsers, FaGlobe } from 'react-icons/fa';

const coreValues = [
  { word: 'Trust', color: 'text-amber-500', bg: 'bg-amber-500/10', icon: <FaCode /> },
  { word: 'Agility', color: 'text-[#ccff00]', bg: 'bg-[#ccff00]/10', icon: <FaMicrochip /> },
  { word: 'Success', color: 'text-cyan-400', bg: 'bg-cyan-400/10', icon: <FaUsers /> },
  { word: 'Quality', color: 'text-fuchsia-500', bg: 'bg-fuchsia-500/10', icon: <FaGlobe /> }
];

const stats = [
  { label: 'Lines Scanned', value: '4.2M+', color: 'text-[#ccff00]' },
  { label: 'Global Nodes', value: '124', color: 'text-white' },
  { label: 'System Uptime', value: '99.99%', color: 'text-cyan-400' }
];

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 overflow-hidden bg-[#030303]">
      
      {/* --- DECORATIVE BACKGROUND LAYER --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_#ccff0010_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_#6366f110_0%,_transparent_70%)]" />
        
        {/* Scrolling "Code" Watermark */}
        <div className="absolute top-1/2 left-0 w-full whitespace-nowrap text-[12rem] font-black text-white/[0.02] select-none -translate-y-1/2">
          ENGINEERING THE FUTURE // SYSTEM PROTOCOL // 01010101
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
          
          {/* --- LEFT SIDE: THE VISUAL STORY --- */}
          <motion.div 
            style={{ y: yText, rotate: rotateImg }}
            className="relative group hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/5] bg-zinc-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                alt="Strategy Room" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />

              {/* Floating Tech HUD */}
              <div className="absolute top-10 left-10 p-6 bg-black/60 backdrop-blur-md border border-[#ccff00]/20 rounded-2xl">
                <div className="flex items-center gap-3 text-[#ccff00] mb-2">
                  <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em]">NODE_ESTABLISHED</span>
                </div>
                <p className="text-white text-xs font-mono">LOCATION: 24.50° N, 77.41° E</p>
              </div>

              {/* The Mastery Badge */}
              <motion.div 
                whileHover={{ scale: 1.05, x: 10 }}
                className="absolute bottom-10 -right-8 bg-[#ccff00] text-black p-10 rounded-3xl shadow-[0_20px_60px_rgba(204,255,0,0.3)] cursor-default"
              >
                <span className="block text-7xl font-black leading-none tracking-tighter">20+</span>
                <span className="text-xs uppercase tracking-widest font-black opacity-70">Years of Engineering</span>
              </motion.div>
            </div>
            
            {/* Ambient Shadow Glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#ccff00]/10 to-indigo-500/10 blur-[100px] -z-10" />
          </motion.div>

          {/* --- RIGHT SIDE: THE NARRATIVE --- */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full border border-[#ccff00]/30 text-[#ccff00] text-[10px] font-black uppercase tracking-[0.3em] mb-8 bg-[#ccff00]/5">
                System_Origin
              </span>
              
              <h3 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                NOT JUST CODE. <br />
                <span className="text-zinc-600">A SUPERIOR</span> <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">PROTOCOL.</span>
              </h3>

              <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                <p>
                  Born from <span className="text-[#ccff00] font-bold">two decades</span> of high-stakes IT engineering, Mintways isn't your typical agency. We are a collective of digital architects who trade in precision.
                </p>
                <p>
                  We bridged the gap between the rigid security of legacy enterprise and the lightning speed of modern startups. We don't just build apps; we engineer <span className="text-white border-b border-[#ccff00]">digital ecosystems</span> that evolve.
                </p>
              </div>
            </motion.div>

            {/* LIVE STATISTICS */}
            <div className="mt-16 py-8 border-y border-white/5 flex flex-wrap gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className={`text-3xl font-black ${stat.color}`}>{stat.value}</span>
                  <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* GRID OF VALUES */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((item, i) => (
                <motion.div
                  key={item.word}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all group cursor-default"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] text-zinc-700 font-mono">0x0{i+1}</span>
                  </div>
                  <h4 className={`text-xl font-bold tracking-tight text-white mb-1`}>{item.word}</h4>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                    Guaranteed System Standard
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}