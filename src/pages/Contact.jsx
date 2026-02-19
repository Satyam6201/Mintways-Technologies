import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTerminal, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaDiscord, FaGithub, FaLinkedin, FaPaperPlane, FaShieldAlt,  FaTwitter
} from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate encryption/sending process
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 pb-20 selection:bg-[#ccff00] selection:text-black overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[#ccff00] font-mono text-xs tracking-[0.5em] mb-4"
          >
            <FaTerminal /> <span>ESTABLISH_CONNECTION</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-500 italic">SYNC.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* LEFT COLUMN: CONTACT INTEL */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="group">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Global_HQ</p>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#ccff00] border border-white/5">
                    <FaMapMarkerAlt />
                  </div>
                  <p className="text-xl font-bold max-w-xs leading-tight">
                    Sector 62, Noida, <br /> Uttar Pradesh, India 201309
                  </p>
                </div>
              </div>

              <div className="group">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Direct_Sync</p>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#ccff00] border border-white/5">
                    <FaEnvelope />
                  </div>
                  <div>
                    <a href="mailto:info@mintwaystech.com" className="text-xl font-bold block hover:text-[#ccff00] transition-colors">info@mintwaystech.com</a>
                    <a href="tel:+918042213489" className="text-zinc-500 font-mono text-sm">+91 80 4221 3489</a>
                  </div>
                </div>
              </div>
            </div>

            {/* HOLOGRAPHIC CARD */}
            <div className="p-8 bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <FaShieldAlt size={40} className="text-[#ccff00]" />
              </div>
              <h4 className="text-[#ccff00] font-black text-xs uppercase tracking-widest mb-4">Security Protocol</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                All transmissions are end-to-end encrypted using AES-256 standards. Your data is processed through our secure internal nodes.
              </p>
              <div className="flex gap-4">
                {[FaLinkedin, FaGithub, FaTwitter, FaDiscord].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center hover:border-[#ccff00] transition-colors cursor-pointer">
                    <Icon className="text-zinc-500 hover:text-[#ccff00]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-zinc-900/50 rounded-[3rem] border-2 border-dashed border-[#ccff00]/30"
                >
                  <div className="w-20 h-20 bg-[#ccff00] text-black rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_40px_rgba(204,255,0,0.4)]">
                    <FaPaperPlane />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-2">Transmission Sent</h3>
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Signal received by HQ // ETA 2hrs</p>
                  <button onClick={() => setStatus('idle')} className="mt-8 text-[#ccff00] underline font-bold text-sm uppercase tracking-widest">Send Another</button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Full_Name</label>
                      <input required type="text" className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 focus:border-[#ccff00] outline-none transition-all" placeholder="Enter Identity" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Email_Address</label>
                      <input required type="email" className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 focus:border-[#ccff00] outline-none transition-all" placeholder="name@domain.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Subject_Protocol</label>
                    <select className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 focus:border-[#ccff00] outline-none transition-all text-zinc-400">
                      <option>Product Development</option>
                      <option>Cyber Security Audit</option>
                      <option>Strategic Consulting</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Encrypted_Message</label>
                    <textarea required rows="6" className="w-full bg-zinc-900 border border-white/5 rounded-3xl px-6 py-4 focus:border-[#ccff00] outline-none transition-all" placeholder="Describe your project vision..."></textarea>
                  </div>

                  <button 
                    disabled={status === 'sending'}
                    className="w-full py-6 bg-[#ccff00] text-black font-black uppercase tracking-[0.4em] text-xs rounded-2xl shadow-[0_20px_40px_rgba(204,255,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? 'ENCRYPTING...' : 'INITIATE TRANSMISSION'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}