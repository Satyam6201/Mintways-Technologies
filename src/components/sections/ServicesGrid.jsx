import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaChevronRight } from 'react-icons/fa';

const services = [
  { 
    title: "APPLICATION DEVELOPMENT & SUPPORT", 
    icon: <FaCode />,
    color: "from-[#ccff00] to-emerald-500",
    glow: "shadow-[#ccff00]/20",
    desc: "We engineer scalable, high-concurrency applications using the latest distributed systems architecture. From React-driven frontends to robust Golang microservices, our code is built for millions of hits.",
    features: ["Microservices Architecture", "Real-time Data Streaming", "Legacy System Modernization"]
  },
  { 
    title: "STRATEGY & IT CONSULTING", 
    icon: <FaLightbulb />,
    color: "from-cyan-400 to-blue-600",
    glow: "shadow-cyan-400/20",
    desc: "Digital transformation isn't just a buzzword; it's our roadmap. We provide deep technical audits and strategic foresight to ensure your infrastructure scales alongside your revenue targets.",
    features: ["Cloud Migration Strategy", "Security Infrastructure Audit", "AI/ML Integration Roadmap"]
  },
  { 
    title: "PRODUCT & SERVICES", 
    icon: <FaRocket />,
    color: "from-fuchsia-500 to-violet-600",
    glow: "shadow-fuchsia-500/20",
    desc: "From initial MVP prototyping to global release management. We take ownership of the entire product lifecycle, providing 24/7 DevOps support and iterative feature development cycles.",
    features: ["Full Lifecycle Management", "Agile DevOps Integration", "Continuous Support & SLA"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function ServicesGrid() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#ccff00] font-mono tracking-[0.5em] uppercase text-xs mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            WE BUILD <span className="italic text-zinc-500">LEGACIES.</span>
          </h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-3xl transition-all duration-500 group overflow-hidden ${service.glow} hover:shadow-2xl`}
            >
              {/* Background Gradient Spot */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-10 blur-[50px] group-hover:opacity-30 transition-opacity`} />

              {/* Icon & Title */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-black text-2xl mb-8 shadow-lg`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-white leading-tight mb-6 tracking-tight">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Enhanced Text: Feature List */}
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-zinc-500">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Interactive Footer */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Deep Dive</span>
                <div className={`text-white translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300`}>
                  <FaChevronRight />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}