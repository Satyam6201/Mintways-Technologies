import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Hero from '../components/sections/Hero';
import WhoWeAre from '../components/sections/WhoWeAre';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ContactForm from '../components/sections/ContactForm';

const sectionVariants = {
  hidden: { opacity: 0, y: 70, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Dynamic color shifting based on scroll
  const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ["#050505", "#0a0118", "#000a0a"]);

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
      className="text-white selection:bg-[#ccff00] selection:text-black transition-colors duration-1000"
    >
      {/* 1. ULTRA-MODERN PROGRESS TRACKER */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-white/5">
        <motion.div 
          style={{ scaleX: smoothProgress }}
          className="h-full bg-gradient-to-r from-[#ccff00] via-[#00f2ff] to-[#7000ff] origin-left shadow-[0_0_15px_#ccff00]"
        />
      </div>

      {/* 2. MOUSE-FOLLOWING SPOTLIGHT (Ambient) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7000ff]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00f2ff]/10 blur-[120px] rounded-full animate-bounce-slow" />
      </div>

      {/* HERO SECTION */}
      <Hero />

      <div className="relative z-10 px-4 md:px-8">
        
        {/* 3. WHO WE ARE - Neon Border Reveal */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative py-32 rounded-[3rem] overflow-hidden border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent" />
          <WhoWeAre />
        </motion.section>

        {/* 4. SERVICES - Cyber Gradient Background */}
        <section className="relative py-40">
           {/* Section Label in Background */}
           <h2 className="absolute top-20 left-0 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
             CAPABILITIES
           </h2>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServicesGrid />
          </motion.div>
        </section>

        {/* 5. WHY CHOOSE US - High Contrast Lime/Black */}
        <motion.section
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-20 rounded-[4rem] bg-[#ccff00] text-black py-24 px-6 md:px-20 overflow-hidden relative group"
        >
          {/* Animated decorative circles for the lime section */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -right-20 -top-20 w-64 h-64 bg-black/5 rounded-full" 
          />
          <WhyChooseUs />
        </motion.section>

        {/* 6. CONTACT - Dark Glassmorphism */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative py-32 mb-20 rounded-[4rem] border border-cyan-500/20 bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,242,255,0.05)]"
        >
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <ContactForm />
        </motion.section>

      </div>

      {/* FLOAT NAVIGATION HINT */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#00f2ff] font-bold z-50 mix-blend-difference"
      >
        Scroll to Explore
      </motion.div>
    </motion.div>
  );
}