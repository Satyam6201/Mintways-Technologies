import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRocket, FaCloudUploadAlt, FaCheckCircle, FaGithub, 
  FaLinkedin, FaGlobe, FaPlus, FaMinus, FaBolt,
  FaBrain, FaCode, FaShieldAlt, FaLayerGroup, FaCoffee, FaPizzaSlice, FaLaptopCode, FaHeartbeat
} from 'react-icons/fa';

const jobList = [
  { 
    id: "ENG-01", 
    title: "Full-Stack Architect", 
    dept: "Engineering", 
    perks: ["Equity", "Remote", "Unlimited PTO"],
    description: "Lead our core protocol development using Next.js 15 and Rust microservices. You will be responsible for scaling architectures that handle millions of requests with sub-100ms latency."
  },
  { 
    id: "DES-02", 
    title: "Senior Product Designer", 
    dept: "Design", 
    perks: ["Hardware Stipend", "Flexible Hours"],
    description: "Craft high-fidelity interfaces for our internal AI-driven dashboard systems. We value designers who understand the 'atomic' nature of components and the psychology of data visualization."
  },
  { 
    id: "OPS-03", 
    title: "DevSecOps Engineer", 
    dept: "Infrastructure", 
    perks: ["SOC2 Mastery", "Global Cluster Access"],
    description: "Manage our edge nodes and Kubernetes clusters. Your goal is 99.999% uptime and zero-trust security implementation across our global CDN."
  },
  { 
    id: "AI-04", 
    title: "ML Integration Specialist", 
    dept: "R&D", 
    perks: ["Research Budget", "AI Compute Credits"],
    description: "Bridge the gap between LLM research and production code. Fine-tune custom models and implement RAG pipelines for our enterprise clients."
  }
];

const hiringSteps = [
  { step: "01", title: "Data Ingest", desc: "Initial credential review by our senior partners." },
  { step: "02", title: "Technical Siege", desc: "A deep-dive engineering challenge (No whiteboard trivia)." },
  { step: "03", title: "Cultural Sync", desc: "Discussion with the founders on mission alignment." },
  { step: "04", title: "Deployment", desc: "Onboarding and immediate project allocation." }
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
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative px-6 py-24 flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 w-[1200px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full -rotate-12 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center"
        >
          <motion.span 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 1 }}
            className="text-[#ccff00] font-mono text-xs uppercase mb-6 block"
          >
            // Build_With_Us
          </motion.span>
          <h1 className="text-[10vw] font-black tracking-tighter leading-[0.85] mb-8 uppercase">
            WE ONLY HIRE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-emerald-400 to-white">WARRIORS.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl font-light mb-12">
            Mintways isn't a workplace. It's a high-stakes engineering forge for the top 1% of digital talent. We build systems that define industries.
          </p>
          
          {/* Real-time Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80 max-w-4xl mx-auto border-t border-white/5 pt-12">
            {[
              { label: "Remote Native", val: "100%", icon: <FaGlobe /> },
              { label: "Founding Equity", val: "Yes", icon: <FaRocket /> },
              { label: "Hiring Rate", val: "0.8%", icon: <FaBrain /> },
              { label: "Time to Ship", val: "<72h", icon: <FaBolt /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="text-[#ccff00] mb-2 group-hover:scale-125 transition-transform">{stat.icon}</div>
                <span className="text-2xl font-black">{stat.val}</span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- 2. THE MISSION GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-8">
        {[
          { icon: <FaCode />, title: "Code as Art", desc: "We believe in elegant, self-documenting code. If it isn't beautiful, it isn't finished." },
          { icon: <FaShieldAlt />, title: "Fortress Mentality", desc: "Security is baked into our DNA. We protect user data like it's our own lives." },
          { icon: <FaLayerGroup />, title: "Radical Velocity", desc: "We ship daily. Our sprints are measured in hours, not weeks. Momentum is everything." }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-[#ccff00]/30 transition-all">
            <div className="text-3xl text-[#ccff00] mb-6">{item.icon}</div>
            <h4 className="text-xl font-black uppercase mb-4">{item.title}</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* --- 3. EXPANDABLE JOB BOARD --- */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-6xl font-black tracking-tighter mb-4 uppercase">Live Nodes</h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Active slots currently in the recruitment cycle</p>
        </div>

        <div className="space-y-6">
          {jobList.map((job) => (
            <div 
              key={job.id} 
              className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                activeJob === job.id ? 'bg-zinc-900 border-[#ccff00]/50 shadow-2xl shadow-[#ccff00]/10' : 'bg-[#0a0a0a] border-white/5 hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                className="w-full p-10 flex flex-col md:flex-row justify-between items-start md:items-center text-left"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#ccff00] font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border border-[#ccff00]/30 rounded">{job.id}</span>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{job.dept}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{job.title}</h3>
                </div>
                <div className={`mt-6 md:mt-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl transition-transform ${activeJob === job.id ? 'rotate-180 text-[#ccff00]' : ''}`}>
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
                    <div className="h-px bg-white/5 w-full mb-8" />
                    <p className="text-zinc-400 mb-8 max-w-2xl leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-3 mb-12">
                      {job.perks.map(p => (
                        <span key={p} className="px-4 py-2 bg-black border border-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-emerald-400">
                          {p}
                        </span>
                      ))}
                    </div>
                    <a href="#apply" className="group flex items-center justify-center gap-4 w-full md:w-max px-12 py-5 bg-[#ccff00] text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white transition-all">
                      Apply Now <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. LIFE AT MINTWAYS (BENEFITS) --- */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase">Digital Nomad <br /> <span className="text-zinc-600 italic">Infrastructure.</span></h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              We don't care where you work. We care about the output. Our benefits are designed to support a high-intensity, high-freedom lifestyle.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <FaLaptopCode />, title: "Workstation", d: "High-spec M3 Max builds." },
                { icon: <FaHeartbeat />, title: "Health", d: "Global premium coverage." },
                { icon: <FaCoffee />, title: "Stipend", d: "$200/mo coworking budget." },
                { icon: <FaPizzaSlice />, title: "Retreats", d: "Annual team hacker-house." }
              ].map((b, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-[#ccff00]">{b.icon}</div>
                  <h5 className="font-black text-xs uppercase tracking-widest">{b.title}</h5>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-tighter">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" 
              className="rounded-[3rem] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              alt="Team"
            />
            <div className="absolute -bottom-10 -left-10 bg-[#ccff00] text-black p-10 rounded-3xl hidden md:block">
              <span className="text-5xl font-black tracking-tighter">∞</span>
              <p className="text-[10px] font-black uppercase tracking-widest">Possibilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. THE HIRING PROTOCOL --- */}
      <section className="bg-zinc-900/50 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center uppercase tracking-widest italic">The Recruitment Pipeline</h2>
          <div className="grid md:grid-cols-4 gap-px bg-white/5">
            {hiringSteps.map((s, i) => (
              <div key={i} className="bg-[#050505] p-12 relative group hover:bg-zinc-900 transition-colors">
                <span className="text-6xl font-black text-white/5 absolute top-4 right-8 group-hover:text-[#ccff00]/10">{s.step}</span>
                <h4 className="text-[#ccff00] font-black mb-4 uppercase text-sm tracking-widest">{s.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed uppercase">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. EXPANDED APPLICATION FORM --- */}
<section id="apply" className="max-w-6xl mx-auto px-6 py-40">
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-zinc-900/40 p-8 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden backdrop-blur-3xl"
  >
    {/* Decorative Form Accents */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />

    <div className="relative z-10 mb-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-[#ccff00]" />
        <span className="text-[#ccff00] font-mono text-xs uppercase tracking-[0.3em]">Recruitment_Terminal_v2.0</span>
      </div>
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase text-white leading-[0.85]">
        SUBMIT <br /> <span className="text-zinc-700 italic">CREDENTIALS</span>
      </h2>
      <p className="text-zinc-500 font-medium max-w-md">Complete the synchronization process. All fields encrypted via Secure Protocol.</p>
    </div>

    <form onSubmit={handleSubmit} className="relative z-10 space-y-20">
      
      {/* SECTION 01: PERSONAL BIOMETRICS */}
      <div className="space-y-10">
        <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
          <span className="text-[#ccff00]">01</span> Personal_Biometrics
        </h4>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2 group-focus-within:text-[#ccff00] transition-colors">Full Name</label>
            <input required className="w-full bg-transparent border-b border-white/10 px-0 py-4 outline-none focus:border-[#ccff00] transition-colors text-xl font-light text-white" placeholder="Jane Doe" />
          </div>
          <div className="group space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2 group-focus-within:text-[#ccff00] transition-colors">Secure Email</label>
            <input required type="email" className="w-full bg-transparent border-b border-white/10 px-0 py-4 outline-none focus:border-[#ccff00] transition-colors text-xl font-light text-white" placeholder="jane@protocol.xyz" />
          </div>
          <div className="group space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2 group-focus-within:text-[#ccff00] transition-colors">Phone Number</label>
            <input type="tel" className="w-full bg-transparent border-b border-white/10 px-0 py-4 outline-none focus:border-[#ccff00] transition-colors text-xl font-light text-white" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="group space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2 group-focus-within:text-[#ccff00] transition-colors">Current Location</label>
            <input className="w-full bg-transparent border-b border-white/10 px-0 py-4 outline-none focus:border-[#ccff00] transition-colors text-xl font-light text-white" placeholder="City, Country (or Remote)" />
          </div>
        </div>
      </div>

      {/* SECTION 02: DIGITAL FOOTPRINT */}
      <div className="space-y-10">
        <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
          <span className="text-[#ccff00]">02</span> Digital_Footprint
        </h4>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <FaGithub className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-[#ccff00]" />
            <input className="w-full bg-transparent border-b border-white/10 pl-8 py-4 outline-none focus:border-[#ccff00] transition-colors text-sm font-mono text-zinc-300" placeholder="github.com/handle" />
          </div>
          <div className="relative group">
            <FaLinkedin className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-[#ccff00]" />
            <input className="w-full bg-transparent border-b border-white/10 pl-8 py-4 outline-none focus:border-[#ccff00] transition-colors text-sm font-mono text-zinc-300" placeholder="linkedin.com/in/user" />
          </div>
          <div className="relative group">
            <FaGlobe className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-[#ccff00]" />
            <input className="w-full bg-transparent border-b border-white/10 pl-8 py-4 outline-none focus:border-[#ccff00] transition-colors text-sm font-mono text-zinc-300" placeholder="portfolio.xyz" />
          </div>
        </div>
      </div>

      {/* SECTION 03: LOGISTICS & EXPECTATIONS */}
      <div className="space-y-10">
        <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
          <span className="text-[#ccff00]">03</span> Project_Logistics
        </h4>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group space-y-4">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Experience Level</label>
            <select className="w-full bg-zinc-950 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#ccff00] transition-colors text-white appearance-none cursor-pointer">
              <option className="bg-black">Select Experience</option>
              <option className="bg-black">Junior (1-3 Years)</option>
              <option className="bg-black">Mid-Level (3-6 Years)</option>
              <option className="bg-black">Senior (6-10 Years)</option>
              <option className="bg-black">Principal / Architect (10+ Years)</option>
            </select>
          </div>
          <div className="group space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Salary Expectation (Annual USD)</label>
            <input className="w-full bg-transparent border-b border-white/10 px-0 py-4 outline-none focus:border-[#ccff00] transition-colors text-xl font-light text-white" placeholder="e.g. 140,000" />
          </div>
          <div className="group space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Notice Period</label>
            <input className="w-full bg-transparent border-b border-white/10 px-0 py-4 outline-none focus:border-[#ccff00] transition-colors text-xl font-light text-white" placeholder="e.g. Immediate / 2 Weeks" />
          </div>
          <div className="group space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Primary Arsenal (Stack)</label>
            <input required className="w-full bg-transparent border-b border-white/10 px-0 py-4 outline-none focus:border-[#ccff00] transition-colors text-xl font-light text-white" placeholder="React, Rust, AWS, K8s..." />
          </div>
        </div>
      </div>

      {/* SECTION 04: INTELLECTUAL DUMP */}
      <div className="space-y-10">
        <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
          <span className="text-[#ccff00]">04</span> Technical_Philosophy
        </h4>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2 italic">Why Mintways? Tell us about a system you built that didn't break under pressure.</label>
          <textarea rows="5" className="w-full bg-black/50 border border-white/10 rounded-[2rem] p-8 outline-none focus:border-[#ccff00] transition-colors text-zinc-300 font-light resize-none" placeholder="Describe your architectural decisions..."></textarea>
        </div>
      </div>

      {/* SECTION 05: DATA TRANSMISSION */}
      <div className="space-y-10">
        <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
          <span className="text-[#ccff00]">05</span> Intelligence_Upload
        </h4>
        <div className="relative group">
          <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
          <div className="py-24 border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center group-hover:bg-[#ccff00]/5 group-hover:border-[#ccff00]/30 transition-all relative overflow-hidden">
            {/* Animated background lines in upload zone */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(204,255,0,0.1)_20px,rgba(204,255,0,0.1)_40px)]" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="z-10"
            >
              <FaCloudUploadAlt className="text-6xl text-zinc-800 group-hover:text-[#ccff00] mb-6 transition-colors" />
            </motion.div>
            <p className="z-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-zinc-200">
              Drop Resume / CV here (PDF preferred)
            </p>
            <p className="z-10 text-[9px] text-zinc-700 mt-2 uppercase tracking-tighter">Max file size: 10MB</p>
          </div>
        </div>
      </div>

      {/* SUBMISSION ACTION */}
      <div className="pt-10">
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-10 bg-[#ccff00] text-black rounded-[2rem] font-black text-sm uppercase tracking-[1em] shadow-[0_30px_60px_rgba(204,255,0,0.15)] group relative overflow-hidden"
        >
          <span className="relative z-10">Initiate Protocol</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.button>
        <p className="text-center mt-8 text-[9px] text-zinc-600 font-mono uppercase tracking-widest">
          By clicking, you agree to our recruitment data processing terms.
        </p>
      </div>

    </form>
  </motion.div>
</section>

      {/* --- SUCCESS OVERLAY --- */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-[#ccff00] rounded-full flex items-center justify-center text-black text-4xl mx-auto mb-8 shadow-3xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-5xl font-black tracking-tighter uppercase mb-6 italic">Protocol Initiated</h3>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] max-w-sm mx-auto mb-10 leading-loose">
                Data packet received. Our algorithmic triage has begun. Expect contact if you meet the threshold.
              </p>
              <button onClick={() => setIsSubmitted(false)} className="px-10 py-4 border border-white/10 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Terminate Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}