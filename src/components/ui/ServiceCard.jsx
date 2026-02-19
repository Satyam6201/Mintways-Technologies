import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ 
        y: -15,
        transition: { duration: 0.3 }
      }}
      className="relative group p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 blur-3xl transition-all duration-500 group-hover:scale-[4] group-hover:opacity-20 ${service.color}`} />

      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg ${service.iconBg} ${service.iconColor}`}>
          {service.icon}
        </div>
        
        <h3 className="text-2xl font-black mb-4 dark:text-white leading-tight">
          {service.title}
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider dark:text-gray-300">
              <span className={`w-1.5 h-1.5 rounded-full ${service.iconBg}`} />
              {feature}
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ x: 5 }}
          className="mt-10 flex items-center gap-2 text-brand-red font-black text-sm uppercase tracking-widest"
        >
          Explore Details <span>→</span>
        </motion.button>
      </div>
    </motion.div>
  );
}