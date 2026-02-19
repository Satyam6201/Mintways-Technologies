import { motion } from 'framer-motion';

export default function Card({ children, className = "" }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        bg-white dark:bg-slate-800 
        p-6 rounded-2xl 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
        border border-gray-50 dark:border-slate-700 
        transition-all duration-300 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}