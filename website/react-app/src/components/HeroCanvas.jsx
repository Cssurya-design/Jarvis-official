import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Eye, Settings, Smartphone, Wrench, Mic, ArrowRight, Download, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, title, content }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-card-bg border border-card-border p-6 rounded-2xl shadow-2xl max-w-lg w-full z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-heading text-accent mb-4 pr-8">{title}</h3>
          <p className="text-text-primary leading-relaxed">{content}</p>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function HeroCanvas() {
  const [activeModal, setActiveModal] = useState(null);

  const features = [
    { 
      icon: <Brain size={32} />, title: 'Advanced AI Brain', desc: 'Powered by state-of-the-art models like Llama 3, Gemma, and Nemotron for intelligent conversations.',
      modalContent: 'The Jarvis engine seamlessly switches between multiple Large Language Models based on context, ensuring you always get the smartest, fastest, and most accurate responses. Local and cloud inference supported.'
    },
    { 
      icon: <Eye size={32} />, title: 'Vision Capabilities', desc: 'Advanced multimodal Vision AI to analyze images and understand the visual world around you.',
      modalContent: 'Using the device camera, Jarvis can identify objects, read text, translate signs in real-time, and describe scenes in vivid detail using multimodal LLaVA architectures.'
    },
    { 
      icon: <Settings size={32} />, title: 'Hardware Mastery', desc: 'Voice control for your flashlight, screen brightness, volume, and haptic feedback.',
      modalContent: 'Deep integration with Capacitor allows Jarvis to securely modify system settings on the fly. Say "lumos" to turn on the flashlight, or "dim screen to 20%".'
    },
    { 
      icon: <Smartphone size={32} />, title: 'Deep App Integration', desc: 'Directly command native apps like WhatsApp, Instagram, Spotify, and Netflix.',
      modalContent: 'Using Android Intents and Accessibility Services, Jarvis can navigate inside your favorite apps. Say "Play my Discover Weekly on Spotify" or "Send a message to Mom on WhatsApp saying I will be late".'
    },
    { 
      icon: <Wrench size={32} />, title: 'Native Utilities', desc: 'Seamlessly control clipboard, maps navigation, dialer, and native device sharing.',
      modalContent: 'Copy text using voice, get real-time turn-by-turn navigation overlay, or initiate phone calls hands-free while driving.'
    },
    { 
      icon: <Mic size={32} />, title: 'Command Library', desc: 'Explore the vast library of natural voice commands recognized by the Jarvis engine.',
      modalContent: 'Jarvis understands over 500 unique intent mappings. You do not need to memorize exact phrases—the NLP engine understands variations and context.'
    }
  ];

  const galleryImages = [
    "assets/WhatsApp Image 2026-06-24 at 8.42.01 PM (1).jpeg",
    "assets/WhatsApp Image 2026-06-24 at 8.42.01 PM.jpeg",
    "assets/WhatsApp Image 2026-06-24 at 8.42.02 PM (1).jpeg",
    "assets/WhatsApp Image 2026-06-24 at 8.42.02 PM (2).jpeg"
  ];

  return (
    <div className="w-full relative z-10 flex flex-col">
      
      {/* 1. Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 leading-tight text-white drop-shadow-2xl">
            Meet <span className="text-gradient">Jarvis</span>.
          </h1>
          <h2 className="text-xl md:text-2xl text-text-primary mb-6 font-heading font-medium drop-shadow-lg">
            The Future is in Your Hands.
          </h2>
          <p className="text-base md:text-lg text-text-primary/90 leading-relaxed mb-8 drop-shadow-md bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 w-fit">
            Experience an advanced artificial intelligence assistant designed to learn, adapt, and elevate your everyday life. Built exclusively for Android using native Capacitor architecture.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/features" className="btn-primary group text-sm md:text-base py-3 px-6">
              <Mic size={20} className="group-hover:scale-110 transition-transform" />
              Discover Capabilities
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Capabilities Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10 bg-[#0a0e17]/80 backdrop-blur-md p-6 rounded-3xl inline-block mx-auto border border-card-border shadow-lg">
            <h2 className="text-4xl md:text-5xl font-heading mb-2">Beyond Human <span className="text-gradient">Capabilities</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-black/60 backdrop-blur-md border border-accent/30 p-8 rounded-[20px] hover:border-accent transition-all group relative overflow-hidden flex flex-col"
              >
                <div className="text-accent mb-4 bg-accent/20 w-12 h-12 flex items-center justify-center rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading mb-3 text-white drop-shadow-md">{feature.title}</h3>
                <p className="text-text-primary text-sm leading-relaxed font-medium mb-6">{feature.desc}</p>
                
                <button 
                  onClick={() => setActiveModal(feature)}
                  className="flex items-center text-accent hover:text-white transition-colors mt-auto w-fit text-sm font-bold tracking-wider uppercase"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>



      {/* 4. CTA Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <div className="bg-card-bg/90 glass-panel border border-accent/40 rounded-[40px] p-12 text-center w-full mx-auto neumorphic-shadow">
            <h2 className="text-4xl md:text-6xl font-heading mb-6 text-white drop-shadow-lg">Ready to Upgrade Your Reality?</h2>
            <p className="text-xl md:text-2xl text-text-primary mb-10 max-w-2xl mx-auto font-medium">
              Access the Portal and download the free, open-source Jarvis APK (Bring Your Own Keys).
            </p>
            <Link to="/portal" className="btn-primary text-xl px-10 py-5 mx-auto w-fit flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
              <Download size={28} />
              Access Portal
            </Link>
          </div>
        </motion.div>
      </section>

      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)}
        title={activeModal?.title}
        content={activeModal?.modalContent}
      />
    </div>
  );
}
