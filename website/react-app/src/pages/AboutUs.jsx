import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Code } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen py-24 px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 drop-shadow-lg text-white">
          About <span className="text-gradient">Surya.CS</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium">The developer behind J.A.R.V.I.S.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto bg-card-bg/80 glass-panel border border-card-border rounded-3xl shadow-2xl p-8 md:p-16 neumorphic-shadow"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/assets/profile.png" 
            alt="Developer Avatar" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.5)] mb-6 object-cover border-2 border-accent"
          />
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-2">Surya.CS</h2>
          <p className="text-accent font-mono text-lg">Lead Developer & AI Architect</p>
        </div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading text-accent mb-4 border-b border-card-border pb-4">Who I Am</h2>
            <p className="text-text-primary/90 text-lg leading-relaxed mb-6">
              I'm Surya CS — a Full-Stack Python Developer based in Coimbatore, India. I'm a B.COM.CA graduate from Sri Ramakrishna College of Arts & Science with IBM & ITC collaborative training in Python Pandas & NumPy. I don't just build websites — I craft digital experiences.
            </p>
            <h3 className="text-2xl font-heading text-accent mb-4 border-l-4 border-accent pl-4">The Vision</h3>
            <p className="text-text-primary/90 leading-relaxed text-lg pl-5">
              J.A.R.V.I.S. started as a vision to break free from the locked-down ecosystems of major tech giants. 
              Today's commercial voice assistants are heavily restricted, slow, and designed to keep you within their 
              proprietary walls. I wanted to build an assistant that was truly personal, blazing fast, and capable of 
              deeply integrating with the OS—without collecting any user data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading text-accent mb-4 border-l-4 border-accent pl-4">The Open Source Commitment</h3>
            <p className="text-text-primary/90 leading-relaxed text-lg pl-5">
              By leveraging a Bring Your Own Key (BYOK) architecture, this project remains 100% free and open-source. 
              It empowers power-users and developers to harness the full potential of bleeding-edge LLMs 
              (like Llama 3) right from their pockets.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <a href="https://suryacs.is-a.dev" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
            <Globe size={20} />
            View Portfolio
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cssurya2006@gmail.com" target="_blank" rel="noreferrer" className="bg-[#1e293b] hover:bg-[#334155] text-white py-3 px-6 rounded-full font-heading font-medium tracking-wide transition-all border border-card-border flex items-center gap-2">
            <Mail size={20} />
            Email Me
          </a>
            <a href="https://github.com/Surya200622" target="_blank" rel="noreferrer" className="flex-1 bg-[#1e293b] hover:bg-[#334155] text-white py-4 px-6 rounded-2xl font-heading font-medium tracking-wide transition-all border border-card-border flex items-center justify-center gap-2">
              <Code size={20} />
              GitHub
            </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
