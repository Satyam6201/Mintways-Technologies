import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTerminal, FaEnvelope, FaMapMarkerAlt, FaDiscord, FaGithub, 
  FaLinkedin, FaPaperPlane, FaShieldAlt, FaTwitter, FaSatellite, 
  FaFingerprint, FaLock, FaWifi, FaBroadcastTower
} from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2500);
  };

  return (
    <div className="bg-[#030303] text-white min-h-screen pt-32 pb-32 selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
      
      {/* 1. CYBERNETIC OVERLAY (GRID & SCANLINES) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ccff0005_0%,transparent_100%)]" />
        <div className="w-full h-1 bg-[#ccff00]/10 absolute top-0 animate-scanline" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. STATUS BAR HUD */}
        <div className="flex flex-wrap justify-between items-center mb-16 border-y border-white/5 py-4 font-mono text-[10px] tracking-widest text-zinc-500">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#ccff00]">
              <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse" /> SYSTEM_ONLINE
            </span>
            <span>LOC: 28.6273° N, 77.3725° E</span>
            <span className="hidden md:inline italic">UTC_TIME: {time}</span>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <FaWifi className="animate-bounce" /> <span>ENCRYPTION: AES_256_ACTIVE</span>
          </div>
        </div>

        {/* 3. HEADER SECTION */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-[#ccff00] font-mono text-xs tracking-[0.5em] mb-6"
          >
            <FaBroadcastTower className="text-lg" /> <span>INITIATING_UPLINK</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12vw] md:text-[8vw] font-black tracking-tighter uppercase leading-[0.8] mb-8"
          >
            COMMAND <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-white to-[#ccff00] animate-gradient-x">CENTER.</span>
          </motion.h1>
          <p className="max-w-2xl text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
            Ready to scale? Whether you're architecting a new protocol or auditing a global infrastructure, our engineers are standing by.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* 4. LEFT COLUMN: TACTICAL INTEL */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* LOCATION CARD */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">Tactical_Base</h4>
                  <p className="font-bold text-white">Noida, Uttar Pradesh, IN</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Sector 62, Digital Forge Block B-42. <br />
                The epicenter of Mintways technical operations.
              </p>
              <div className="h-40 w-full bg-zinc-900 rounded-2xl overflow-hidden grayscale contrast-125 border border-white/5 relative">
                {/* Simplified Map Visual */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-4 h-4 bg-[#ccff00] rounded-full animate-ping" />
                   <div className="w-2 h-2 bg-[#ccff00] rounded-full absolute top-1 left-1" />
                </div>
              </div>
            </motion.div>

            {/* DIRECT COMMS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="p-6 rounded-2xl border border-white/5 hover:bg-white/[0.03] transition-colors">
                <FaEnvelope className="text-[#ccff00] mb-3" />
                <h5 className="text-[10px] font-black uppercase text-zinc-500 mb-1">Electronic_Mail</h5>
                <a href="mailto:info@mintwaystech.com" className="font-bold hover:text-[#ccff00] break-all">info@mintwaystech.com</a>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 hover:bg-white/[0.03] transition-colors">
                <FaSatellite className="text-[#ccff00] mb-3" />
                <h5 className="text-[10px] font-black uppercase text-zinc-500 mb-1">Analog_Signal</h5>
                <a href="tel:+918042213489" className="font-bold">+91 80 4221 3489</a>
              </div>
            </div>

            {/* SOCIAL HUD */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-6">Global_Broadcast_Nodes</p>
              <div className="flex gap-4">
                {[FaLinkedin, FaGithub, FaTwitter, FaDiscord].map((Icon, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, color: '#ccff00' }}
                    className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-xl text-zinc-500 cursor-pointer"
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. RIGHT COLUMN: ENCRYPTED FORM */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ccff00]/20 to-indigo-500/20 rounded-[3rem] blur opacity-30" />
            
            <div className="relative bg-[#080808] border border-white/10 p-8 md:p-16 rounded-[3rem] backdrop-blur-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-[#ccff00] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(204,255,0,0.3)]">
                      <FaPaperPlane className="text-black text-3xl animate-bounce" />
                    </div>
                    <h3 className="text-4xl font-black mb-4 uppercase">Data Packet Received.</h3>
                    <p className="text-zinc-500 font-mono text-xs leading-loose">
                      SECURE_HANDSHAKE: COMPLETE <br />
                      ROUTING_TO: CORE_ENGINEERING_TEAM <br />
                      EXPECT_CONTACT_WITHIN: 04_HOURS
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-12 px-10 py-4 border border-white/10 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-all"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3 text-zinc-600 mb-10">
                      <FaLock className="text-[#ccff00]" />
                      <span className="font-mono text-[10px] uppercase tracking-widest">End-to-End Encryption Active</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Identity_Handle</label>
                        <div className="relative">
                          <FaFingerprint className="absolute left-6 top-1/2 -translate-y-1/2 text-[#ccff00]/30" />
                          <input required className="w-full bg-black/50 border border-white/10 rounded-2xl pl-14 pr-6 py-5 focus:border-[#ccff00] outline-none transition-all text-white placeholder:text-zinc-700" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Secure_Return</label>
                        <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#ccff00] outline-none transition-all text-white placeholder:text-zinc-700" placeholder="Email Address" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Selection_Protocol</label>
                      <select className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#ccff00] outline-none transition-all text-zinc-400 appearance-none">
                        <option>Full-Scale Product Development</option>
                        <option>Blockchain & Web3 Infrastructure</option>
                        <option>Cyber Security Penetration Testing</option>
                        <option>Dedicated Engineering Team</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">Briefing_Payload</label>
                      <textarea required rows="5" className="w-full bg-black/50 border border-white/10 rounded-3xl px-6 py-6 focus:border-[#ccff00] outline-none transition-all text-white placeholder:text-zinc-700 resize-none" placeholder="Describe the mission parameters..."></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(204,255,0,0.2)' }}
                      whileTap={{ scale: 0.98 }}
                      disabled={status === 'sending'}
                      className="w-full py-8 bg-[#ccff00] text-black font-black uppercase tracking-[0.6em] text-xs rounded-2xl transition-all flex items-center justify-center gap-4 group"
                    >
                      {status === 'sending' ? (
                        <>ENCRYPTING TRANSMISSION <FaShieldAlt className="animate-spin" /></>
                      ) : (
                        <>SEND PACKET <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-move 5s ease infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}