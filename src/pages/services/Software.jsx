import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTerminal, FaMicrochip, FaCubes, FaServer, 
  FaCodeBranch, FaShieldAlt, FaSync, FaChartLine,
  FaDatabase, FaNetworkWired, FaTools, FaCheckCircle
} from 'react-icons/fa';
import { SiKubernetes, SiDocker, SiAmazonwebservices, SiGooglecloud, SiRedis, SiPostgresql } from 'react-icons/si';

const Software = () => {
  // Animation settings compatible with your CSS
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "cubic-bezier(0.22, 1, 0.36, 1)" } 
    }
  };

  return (
    <div className="bg-[#020202] text-zinc-400 min-h-screen selection:bg-[#ccff00] selection:text-black">
      
      {/* SECTION 1: TECHNICAL HERO */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5 bg-dot-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">System_Architect_Level_01</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
              ENTERPRISE <br /> <span className="text-zinc-600">SOFTWARE_FORGE.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed italic border-l-2 border-[#ccff00] pl-6">
              We engineer robust, distributed systems designed for high availability and extreme throughput. From legacy modernization to greenfield SaaS architecture, we build the core logic that powers global industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ARCHITECTURE PHILOSOPHY */}
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Technical Governance</h2>
            <div className="space-y-8">
              {[
                { 
                  title: "Decoupled Architecture", 
                  desc: "We utilize microservices and event-driven patterns to ensure that components scale independently without systemic failure.",
                  icon: <FaCubes className="text-[#ccff00]" />
                },
                { 
                  title: "Stateless Execution", 
                  desc: "Designing logic layers that treat data as external, allowing for infinite horizontal scaling across cloud clusters.",
                  icon: <FaSync className="text-blue-500" />
                },
                { 
                  title: "Resilient Data Layer", 
                  desc: "Multi-regional database deployments with ACID compliance and sub-millisecond read-replica synchronization.",
                  icon: <FaDatabase className="text-purple-500" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="text-2xl mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-2">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-8 rounded-3xl flex flex-col items-center justify-center border-blue-500/10">
              <SiKubernetes className="text-5xl text-blue-500 mb-4" />
              <span className="font-mono text-[9px] uppercase">K8s_Orchestration</span>
            </div>
            <div className="glass p-8 rounded-3xl flex flex-col items-center justify-center border-[#ccff00]/10">
              <SiAmazonwebservices className="text-5xl text-orange-400 mb-4" />
              <span className="font-mono text-[9px] uppercase">Cloud_Native</span>
            </div>
            <div className="glass p-8 rounded-3xl flex flex-col items-center justify-center border-zinc-800">
              <SiDocker className="text-5xl text-cyan-500 mb-4" />
              <span className="font-mono text-[9px] uppercase">Containerization</span>
            </div>
            <div className="glass p-8 rounded-3xl flex flex-col items-center justify-center border-zinc-800">
              <SiRedis className="text-5xl text-red-500 mb-4" />
              <span className="font-mono text-[9px] uppercase">Cache_Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE LARGE-SCALE STACK TABLE */}
      <section className="py-24 px-6 bg-zinc-950/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">INFRASTRUCTURE_STACK</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-mono text-[10px] text-zinc-600">
                  <th className="pb-4 uppercase">Layer</th>
                  <th className="pb-4 uppercase">Technology</th>
                  <th className="pb-4 uppercase">Purpose</th>
                  <th className="pb-4 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { layer: "Runtime", tech: "Node.js / Go / Rust", use: "High-concurrency processing", status: "STABLE" },
                  { layer: "Database", tech: "PostgreSQL / MongoDB", use: "Relational & Document storage", status: "ACID_COMPLIANT" },
                  { layer: "DevOps", tech: "Terraform / Ansible", use: "Infrastructure as Code", status: "AUTOMATED" },
                  { layer: "Monitor", tech: "Prometheus / Grafana", use: "Real-time telemetry", status: "ACTIVE" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 font-bold text-white">{row.layer}</td>
                    <td className="py-6 text-blue-400">{row.tech}</td>
                    <td className="py-6">{row.use}</td>
                    <td className="py-6 font-mono text-[9px] text-[#ccff00]">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SDLC PROCESS (LARGE CONTENT) */}
      
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 sticky top-32 h-fit">
            <h2 className="text-6xl font-bold text-white leading-none mb-6">THE_FLOW.</h2>
            <p className="text-zinc-500">Our engineering lifecycle is rooted in Continuous Integration and Continuous Deployment (CI/CD) principles.</p>
          </div>
          <div className="md:w-2/3 space-y-24">
            {[
              { 
                step: "01_System_Analysis", 
                title: "Requirement Engineering", 
                desc: "We don't just take orders; we challenge assumptions. We map out data flows, user stories, and potential bottlenecks before a single line of code is written.",
                details: ["Feasibility Studies", "Security Modeling", "Load Estimation"]
              },
              { 
                step: "02_Prototyping", 
                title: "Technical Proof of Concept", 
                desc: "Rapid development of core logic modules to validate architecture decisions and third-party integrations.",
                details: ["API Schema Design", "Database Modeling", "Auth Logic"]
              },
              { 
                step: "03_Sprint_Phase", 
                title: "Agile Development & QA", 
                desc: "Bi-weekly sprints with automated testing (Unit, Integration, E2E) baked into every pull request.",
                details: ["TDD Approach", "Peer Code Reviews", "Automated Linting"]
              },
              { 
                step: "04_Launch_Ready", 
                title: "Deployment & Orchestration", 
                desc: "Zero-downtime blue-green deployments via Kubernetes clusters, ensuring the platform stays online during updates.",
                details: ["CI/CD Pipelines", "Edge Delivery", "Monitoring setup"]
              }
            ].map((phase, i) => (
              <div key={i} className="relative pl-12 border-l border-zinc-800 hover:border-[#ccff00] transition-colors">
                <span className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-800 rounded-full group-hover:bg-[#ccff00]" />
                <span className="font-mono text-[10px] text-[#ccff00] mb-2 block">{phase.step}</span>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">{phase.title}</h3>
                <p className="mb-6 leading-relaxed">{phase.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.details.map(d => (
                    <span key={d} className="px-3 py-1 bg-zinc-900 border border-white/5 rounded text-[10px] text-zinc-400">{d}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL SYSTEM CHECK (CTA) */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <FaTerminal className="text-[10rem] absolute -top-10 -right-10 opacity-5 -rotate-12" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase italic">Ready to scale?</h2>
          <p className="text-zinc-500 mb-10 max-w-xl mx-auto">Our engineers are standing by to audit your existing infrastructure or build your next legacy system.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#ccff00] text-black font-bold uppercase text-xs tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all">
              Initialize_Project
            </button>
            <button className="px-10 py-4 bg-white/5 text-white border border-white/10 font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-white/10 transition-all">
              View_Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;