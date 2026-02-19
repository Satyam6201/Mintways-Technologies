import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaTerminal } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* 1. CYBER BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* LEFT SIDE: TEXT & INFO (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-indigo-400 font-mono tracking-widest text-xs mb-4">
                <FaTerminal /> <span>SYSTEM.INIT_COMMUNICATION</span>
              </div>
              <h2 className="text-6xl font-black text-white leading-none mb-6">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 italic">SYNC?</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Whether you're looking to architect a new platform or modernize legacy systems, our engineers are ready to deploy.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Mail Us</p>
                  <p className="text-white font-medium">info@mintwaystech.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Base Location</p>
                  <p className="text-white font-medium">Global Digital Hub</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE GLASS FORM (3 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white/[0.03] backdrop-blur-3xl p-1 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative"
          >
            {/* Inner Glow Border */}
            <div className="absolute inset-0 rounded-[3rem] border border-indigo-500/20 pointer-events-none" />

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-5 bg-black/40 border border-white/5 rounded-2xl outline-none focus:border-indigo-500/50 transition-all text-white placeholder:text-zinc-600"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-indigo-500 group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Phone/Signal" 
                    className="w-full p-5 bg-black/40 border border-white/5 rounded-2xl outline-none focus:border-indigo-500/50 transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Terminal" 
                  className="w-full p-5 bg-black/40 border border-white/5 rounded-2xl outline-none focus:border-indigo-500/50 transition-all text-white placeholder:text-zinc-600"
                />
              </div>

              <div className="relative group">
                <textarea 
                  placeholder="Describe the mission..." 
                  className="w-full p-5 bg-black/40 border border-white/5 rounded-2xl h-40 outline-none focus:border-indigo-500/50 transition-all text-white placeholder:text-zinc-600 resize-none"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden group bg-white text-black py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Transmit Request <FaPaperPlane className="text-xs group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </span>
                {/* Button Hover Slide Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}