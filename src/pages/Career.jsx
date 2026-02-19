import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRocket, FaCloudUploadAlt, FaCheckCircle, FaGithub, 
  FaLinkedin, FaGlobe, FaTwitter, FaPlus, FaMinus, FaBolt
} from 'react-icons/fa';

const jobList = [
  { 
    id: "ENG-01", 
    title: "Full-Stack Architect", 
    dept: "Engineering", 
    perks: ["Equity", "Remote", "Unlimited PTO"],
    description: "Lead our core protocol development using Next.js 15 and Rust microservices."
  },
  { 
    id: "DES-02", 
    title: "Senior Product Designer", 
    dept: "Design", 
    perks: ["Hardware Stipend", "Flexible Hours"],
    description: "Craft high-fidelity interfaces for our internal AI-driven dashboard systems."
  }
];

export default function Career() {
  const [activeJob, setActiveJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-24 font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* --- 1. RADICAL HERO --- */}
      <section className="relative px-6 py-20 flex flex-col items-center overflow-hidden">
        {/* Decorative Neon Ring */}
        <div className="absolute top-0 w-[1000px] h-[400px] bg-[#ccff00]/10 blur-[120px] rounded-full -rotate-12 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-[12vw] font-black tracking-tighter leading-[0.8] mb-8 uppercase">
            Join the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">Revolution.</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl font-medium mb-12">
            We don't hire employees. We recruit founders. Mintways is an ecosystem for those who find "good enough" offensive.
          </p>
          
          <div className="flex justify-center gap-10 opacity-50">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">4.9</span>
                <span className="text-[10px] uppercase tracking-widest text-[#ccff00]">Glassdoor</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-[#ccff00]">Remote</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">0%</span>
                <span className="text-[10px] uppercase tracking-widest text-[#ccff00]">Boredom</span>
             </div>
          </div>
        </motion.div>
      </section>

      {/* --- 2. CULTURE MARQUEE --- */}
      <div className="py-10 bg-zinc-900 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center text-4xl font-black uppercase italic text-zinc-800"
        >
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex gap-20 items-center">
              <span>Hustle Harder</span>
              <FaBolt className="text-[#ccff00]" />
              <span>Ship Daily</span>
              <FaBolt className="text-emerald-500" />
              <span>Stay Humble</span>
              <FaBolt className="text-white" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- 3. EXPANDABLE JOB BOARD --- */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="mb-20">
          <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase">Available Nodes</h2>
          <div className="h-2 w-20 bg-[#ccff00]" />
        </div>

        <div className="space-y-4">
          {jobList.map((job) => (
            <div 
              key={job.id} 
              className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                activeJob === job.id ? 'bg-zinc-900 border-[#ccff00]/50 shadow-2xl shadow-[#ccff00]/5' : 'bg-zinc-950 border-white/5 hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                className="w-full p-10 flex justify-between items-center text-left"
              >
                <div>
                  <span className="text-[#ccff00] font-mono text-xs tracking-widest uppercase mb-2 block">{job.id}</span>
                  <h3 className="text-3xl font-black uppercase">{job.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl">
                  {activeJob === job.id ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <AnimatePresence>
                {activeJob === job.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-10 pb-10"
                  >
                    <p className="text-zinc-400 mb-8 max-w-2xl">{job.description}</p>
                    <div className="flex flex-wrap gap-3 mb-10">
                      {job.perks.map(p => (
                        <span key={p} className="px-4 py-1.5 bg-black border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                          ✓ {p}
                        </span>
                      ))}
                    </div>
                    <a href="#apply" className="inline-block px-10 py-4 bg-[#ccff00] text-black font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform">
                      Initiate Application
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. THE ULTIMATE APPLICATION FORM --- */}
      
      <section id="apply" className="max-w-5xl mx-auto px-6 py-32">
        <div className="bg-gradient-to-br from-zinc-900 to-black p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-3xl">
          {/* Form Glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 mb-16">
            <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase leading-none text-white">Candidate <br /> Onboarding</h2>
            <p className="text-zinc-500">Provide your credentials for the technical review board.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
            {/* Step 1: Identity */}
            <div className="space-y-6">
              <h4 className="text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.5em] border-b border-white/5 pb-2">01. Identity</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Legal Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#ccff00] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Secure Email</label>
                  <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#ccff00] transition-colors" placeholder="john@example.com" />
                </div>
              </div>
            </div>

            {/* Step 2: Digital Presence */}
            <div className="space-y-6">
              <h4 className="text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.5em] border-b border-white/5 pb-2">02. Digital Presence</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <FaGithub className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600" />
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-[#ccff00] transition-colors" placeholder="GitHub" />
                </div>
                <div className="relative">
                  <FaLinkedin className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600" />
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-[#ccff00] transition-colors" placeholder="LinkedIn" />
                </div>
                <div className="relative">
                  <FaGlobe className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600" />
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-[#ccff00] transition-colors" placeholder="Portfolio" />
                </div>
              </div>
            </div>

            {/* Step 3: Technical Arsenal */}
            <div className="space-y-6">
              <h4 className="text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.5em] border-b border-white/5 pb-2">03. Technical Arsenal</h4>
              <textarea 
                rows="4" 
                className="w-full bg-black/50 border border-white/10 rounded-3xl px-8 py-6 outline-none focus:border-[#ccff00] transition-colors"
                placeholder="List your primary technologies and a brief summary of your most complex project..."
              ></textarea>
            </div>

            {/* Step 4: Resume Drop */}
            <div className="relative group">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
              <div className="py-16 border-2 border-dashed border-white/10 rounded-[2.5rem] flex flex-col items-center group-hover:bg-[#ccff00]/5 group-hover:border-[#ccff00] transition-all">
                <FaCloudUploadAlt className="text-5xl text-zinc-700 group-hover:text-[#ccff00] mb-4" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Transmit Resume (PDF/DOCX)</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-8 bg-[#ccff00] text-black rounded-3xl font-black text-xs uppercase tracking-[0.5em] shadow-[0_20px_50px_rgba(204,255,0,0.2)]"
            >
              Confirm Submission
            </motion.button>
          </form>
        </div>
      </section>

      {/* --- SUCCESS OVERLAY --- */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-[#ccff00] rounded-full flex items-center justify-center text-black text-6xl mx-auto mb-10 shadow-[0_0_50px_rgba(204,255,0,0.5)]">
                <FaCheckCircle />
              </div>
              <h3 className="text-6xl font-black tracking-tighter uppercase mb-4">Transmission Successful</h3>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest max-w-sm mx-auto mb-12">
                Our AI screening protocol has received your data. Expect a human response within 24-48 hours.
              </p>
              <button onClick={() => setIsSubmitted(false)} className="px-12 py-5 border border-white/20 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Close System
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}