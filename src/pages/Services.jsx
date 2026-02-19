import { motion } from 'framer-motion';
import { FaCode, FaDraftingCompass, FaCogs, FaShieldAlt } from 'react-icons/fa';
import ServiceCard from '../components/ui/ServiceCard';

const serviceData = [
  {
    title: "Application Development & Support",
    description: "Tailored software solutions designed for scalability. We handle everything from legacy modernization to cloud-native apps.",
    icon: <FaCode />,
    color: "bg-blue-500",
    iconBg: "bg-blue-50/50 dark:bg-blue-900/20",
    iconColor: "text-blue-600",
    features: ["Custom Web Apps", "Mobile Solutions", "Maintenance"]
  },
  {
    title: "Strategy & IT Consulting",
    description: "Align your technology with your business goals. We provide expert roadmaps for digital transformation and ROI optimization.",
    icon: <FaDraftingCompass />,
    color: "bg-brand-red",
    iconBg: "bg-red-50/50 dark:bg-red-900/20",
    iconColor: "text-brand-red",
    features: ["Digital Roadmap", "Process Audit", "Risk Analysis"]
  },
  {
    title: "Product & Services",
    description: "From concept to market launch. We emphasize innovation, data security, and continuous improvement for your product lifecycle.",
    icon: <FaCogs />,
    color: "bg-purple-500",
    iconBg: "bg-purple-50/50 dark:bg-purple-900/20",
    iconColor: "text-purple-600",
    features: ["SaaS Architecture", "Market Analysis", "UX Strategy"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Section Header */}
      <section className="px-6 md:px-20 mb-20">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-red font-black tracking-[0.4em] uppercase text-xs mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black dark:text-white leading-[0.9] tracking-tighter"
          >
            MINTING SOLUTIONS <br />
            <span className="text-gray-300 dark:text-slate-700 underline decoration-brand-red decoration-4 underline-offset-8">THAT SCALE.</span>
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-20 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </section>

      {/* Interactive CTA Section */}
      <section className="mt-32 px-6 md:px-20">
        <motion.div 
          whileHover={{ scale: 0.99 }}
          className="relative rounded-[3rem] bg-slate-900 dark:bg-brand-red p-16 md:p-24 overflow-hidden text-center"
        >
          {/* Animated Background Rings */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 border-[40px] border-white/5 rounded-full scale-150"
          />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              READY TO REVOLUTIONIZE <br /> YOUR WORKFLOW?
            </h2>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-12 py-5 bg-white text-slate-900 rounded-full font-black tracking-widest uppercase text-sm shadow-2xl"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}