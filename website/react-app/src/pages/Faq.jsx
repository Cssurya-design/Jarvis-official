import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Mail, Code, Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-card-border last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-xl font-heading text-white group-hover:text-accent transition-colors">
          {question}
        </span>
        <span className="text-accent ml-4 flex-shrink-0">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-primary/90 leading-relaxed text-lg pl-4 border-l-2 border-accent/50 ml-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      q: "Are my voice conversations recorded or stored?",
      a: "No. Voice audio is processed locally or sent directly to the AI provider (like Google or Groq) for transcription and inference. J.A.R.V.I.S. does not have a backend server, meaning your data is never collected or stored by us."
    },
    {
      q: "Why do I need to provide my own API keys?",
      a: "The Bring Your Own Key (BYOK) model keeps the app completely free and open-source. By using your own keys, you bypass expensive monthly subscriptions and get direct, unrestricted access to the most powerful AI models in the world."
    },
    {
      q: "Can Jarvis control my smart home devices?",
      a: "Currently, Jarvis can control your phone's native hardware (flashlight, screen, clipboard, apps). Smart home integration (like Phillips Hue or Google Home) is planned for a future update via local network requests."
    },
    {
      q: "Does Jarvis work completely offline?",
      a: "Because Jarvis relies on massive cloud LLMs (like Llama 3 70B) for its advanced reasoning, an active internet connection is required. However, native device controls (like launching apps or toggling the flashlight) are processed locally."
    }
  ];

  return (
    <div className="min-h-screen py-24 px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 drop-shadow-lg text-white">
          FAQ & <span className="text-gradient">Support</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium">Get help directly from the developer.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card-bg/60 glass-panel border border-card-border rounded-3xl p-8 md:p-12 mb-16 neumorphic-shadow"
        >
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#05070a]/80 border border-card-border p-10 rounded-3xl text-center neumorphic-shadow"
        >
          <h3 className="text-2xl font-heading text-white mb-4">Still need help?</h3>
          <p className="text-text-secondary mb-8 text-lg">For direct technical support, bug reports, or feature requests, contact the developer directly.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://suryacs.is-a.dev" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
              <Globe size={20} />
              Visit Developer Website
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cssurya2006@gmail.com" target="_blank" rel="noreferrer" className="bg-[#1e293b] hover:bg-[#334155] text-white py-3 px-6 rounded-full font-heading font-medium tracking-wide transition-all border border-card-border flex items-center gap-2">
              <Mail size={20} />
              Email Support
            </a>
            <a href="https://github.com/Surya200622" target="_blank" rel="noreferrer" className="bg-[#1e293b] hover:bg-[#334155] text-white py-3 px-6 rounded-full font-heading font-medium tracking-wide transition-all border border-card-border flex items-center gap-2">
              <Code size={20} />
              Developer GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
