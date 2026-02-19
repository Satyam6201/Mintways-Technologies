import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTerminal, FaLayerGroup, FaBolt, FaMicrochip, FaDatabase, FaServer, FaCodeBranch, FaShieldAlt } from 'react-icons/fa';

const techDetails = [
  { 
    title: "Distributed Systems", 
    icon: <FaLayerGroup />, 
    text: "Engineered with Go and Node.js microservices for infinite horizontal scalability and fault isolation.",
    features: ["Event-Driven Architecture", "Kubernetes Orchestration", "Service Mesh Integration"]
  },
  { 
    title: "Edge Performance", 
    icon: <FaBolt />, 
    text: "Utilizing Next.js, WebAssembly, and Rust for sub-100ms execution across global edge nodes.",
    features: ["Isomorphic Rendering", "Edge Caching Protocols", "Predictive Asset Prefetching"]
  },
  { 
    title: "API-First Protocol", 
    icon: <FaTerminal />, 
    text: "Type-safe GraphQL and gRPC interfaces ensuring seamless integration across multi-platform environments.",
    features: ["Auto-generated SDKs", "Real-time Subscriptions", "Rate-limiting & Throttling"]
  }
];

const developmentPhases = [
  { id: "01", name: "Structural Analysis", desc: "Deconstructing business logic into technical requirements." },
  { id: "02", name: "Core Architecture", desc: "Building the foundation using battle-tested frameworks." },
  { id: "03", name: "Sprint Execution", desc: "72-hour release cycles with automated CI/CD pipelines." },
  { id: "04", name: "Load Hardening", desc: "Stress testing for millions of concurrent connections." }
];

export default function AppDev() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-indigo-500 selection:text-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4338ca33_0%,transparent_50%)]" />
        
        <motion.div style={{ opacity, scale }} className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-indigo-400 font-mono tracking-[0.5em] text-xs uppercase">Engineering Excellence</span>
            <span className="h-[1px] w-12 bg-indigo-500" />
          </motion.div>
          
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-8">
            APP <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-900">FORGE.</span>
          </h1>
          
          <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            We forge industrial-grade digital ecosystems. No templates. No shortcuts. Just <span className="text-white">pure architectural integrity</span> designed for the next decade of web scale.
          </p>
        </motion.div>

        {/* Floating Background Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 text-indigo-500/10 text-9xl -z-0"
        >
          <FaMicrochip />
        </motion.div>
      </section>

      {/* --- TECHNICAL BREAKDOWN --- */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {techDetails.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-10 rounded-[3rem] bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-all duration-500"
              >
                <div className="text-indigo-500 text-4xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">{item.text}</p>
                
                <ul className="space-y-3">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] font-mono text-indigo-300 uppercase tracking-widest">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full" /> {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS ROADMAP --- */}
      <section className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">THE DEPLOYMENT <br/> <span className="text-indigo-500">PIPELINE.</span></h2>
            <p className="text-zinc-500 max-w-md text-sm uppercase tracking-widest leading-loose">
              From raw concept to hardened production environment. Our methodology is built on transparency and rapid iteration.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
            {developmentPhases.map((phase, i) => (
              <div key={i} className="bg-black p-12 hover:bg-zinc-900 transition-colors group">
                <span className="text-indigo-500 font-mono text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity">{phase.id}</span>
                <h4 className="text-white font-bold text-xl mt-6 mb-4">{phase.name}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK TERMINAL --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl">
          <div className="bg-zinc-900 px-6 py-3 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="p-10 font-mono">
            <div className="text-indigo-400 mb-4">admin@mintways:~$ <span className="text-white">fetch stack --detailed</span></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Frontend", val: "React/Next.js" },
                { label: "Backend", val: "Go / Node" },
                { label: "Cloud", val: "AWS / GCP" },
                { label: "Database", val: "PostgreSQL" },
                { label: "Realtime", val: "Socket.io" },
                { label: "DevOps", val: "Docker/K8s" },
                { label: "Cache", val: "Redis" },
                { label: "Design", val: "Figma/Spline" }
              ].map((stack, i) => (
                <div key={i}>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-tighter">{stack.label}</p>
                  <p className="text-white text-xs">{stack.val}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-[#ccff00] animate-pulse">_ EXECUTION READY</div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 text-center relative">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8">BUILD FOR THE <span className="text-indigo-500 italic">NEXT SCALE.</span></h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-white text-black font-black text-sm uppercase tracking-[0.3em] rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            Start Your Forge
          </motion.button>
        </div>
      </section>

    </div>
  );
}