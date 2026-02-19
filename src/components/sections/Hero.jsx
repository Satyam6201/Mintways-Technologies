import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:py-32 px-6 md:px-20">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-blue/10 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Looking for Smart <br />
            <span className="text-brand-red inline-block mt-2">Software Technology</span> <br />
            Solutions?
          </h1>
          <p className="text-lg opacity-80 max-w-xl">
            Propel your business with high-class benefits, maximum ROI, and exceptional satisfaction. 
            Tailored solutions designed for long-term growth.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg hover:shadow-red-500/40 transition-all hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-brand-blue text-brand-blue rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all">
              Our Services
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex-1"
        >
          <img src="src/assets/techSolution.svg" alt="Tech Illustration" className="w-full drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
}