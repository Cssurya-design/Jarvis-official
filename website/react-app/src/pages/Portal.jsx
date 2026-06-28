import React from 'react';
import { motion } from 'framer-motion';

const Portal = () => {
  return (
    <div className="min-h-screen py-24 px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 drop-shadow-lg text-white">
          Open-Source <span className="text-gradient">Portal</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium max-w-2xl mx-auto">
          Welcome back. Jarvis is 100% free and open-source. Bring your own API keys to unlock its full potential.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* APK Normal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card-bg/60 glass-panel border border-[#27c93f]/30 p-8 rounded-3xl hover:border-[#27c93f] transition-all flex flex-col neumorphic-shadow"
        >
          <h3 className="text-2xl font-heading text-white mb-2">APK <span className="text-[#27c93f]">Normal Version</span></h3>
          <p className="text-text-secondary mb-4">Includes: <strong className="text-white">Groq, Gemini, OpenRouter</strong></p>
          <p className="text-sm mb-8">Status: <span className="text-[#27c93f]">Free & Open-Source (BYOK)</span></p>
          
          <a href="https://www.mediafire.com/file/zatjm6vz0yabmj7/Jarvis-Updated.apk/file" target="_blank" rel="noreferrer" className="btn-primary w-full text-center mt-auto">
            Download APK
          </a>
        </motion.div>

        {/* APK Complete */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card-bg/60 glass-panel border border-[#ffbd2e]/30 p-8 rounded-3xl hover:border-[#ffbd2e] transition-all flex flex-col neumorphic-shadow relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-[#ffbd2e]/20 text-[#ffbd2e] px-4 py-1 rounded-bl-xl font-bold text-xs">POPULAR</div>
          <h3 className="text-2xl font-heading text-white mb-2">APK <span className="text-[#ffbd2e]">Complete Version</span></h3>
          <p className="text-text-secondary mb-4">Includes: <strong className="text-white">Groq, Gemini, OpenRouter, Pollinations AI</strong></p>
          <p className="text-sm mb-8">Status: <span className="text-[#ffbd2e]">Free & Open-Source (BYOK)</span></p>
          
          <a href="https://www.mediafire.com/file/dony0p2tjnyi8l3/Jarvis-Updated.apk/file" target="_blank" rel="noreferrer" className="btn-primary w-full text-center mt-auto !bg-[#ffbd2e]/10 !text-[#ffbd2e] !border-[#ffbd2e]/50 hover:!bg-[#ffbd2e]/20">
            Download APK
          </a>
        </motion.div>

        {/* APK Scientific */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card-bg/60 glass-panel border border-[#00e5ff]/30 p-8 rounded-3xl hover:border-[#00e5ff] transition-all flex flex-col neumorphic-shadow"
        >
          <h3 className="text-2xl font-heading text-white mb-2">APK <span className="text-[#00e5ff]">Scientific Version</span></h3>
          <p className="text-text-secondary mb-4">Includes: <strong className="text-white">Groq, Gemini, OpenRouter, Pollinations AI, Advanced Scientific Calculator</strong></p>
          <p className="text-sm mb-8">Status: <span className="text-[#00e5ff]">Free & Open-Source (BYOK)</span></p>
          
          <a href="https://www.mediafire.com/file/y1njwbqcopow5r5/Jarvis-Updated.apk/file" target="_blank" rel="noreferrer" className="btn-primary w-full text-center mt-auto !bg-[#00e5ff]/10 !text-[#00e5ff] !border-[#00e5ff]/50 hover:!bg-[#00e5ff]/20">
            Download APK
          </a>
        </motion.div>

        {/* Neural Engine Integrations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-card-bg/80 border border-card-border p-8 rounded-3xl neumorphic-shadow mt-8"
        >
          <h3 className="text-2xl font-heading text-white mb-4">Neural Engine <span className="text-gradient">Integrations</span></h3>
          <p className="text-text-secondary mb-6">Jarvis uses your own API keys to provide access to multi-model infrastructure for free.</p>
          <div className="flex flex-wrap gap-3 font-mono text-sm">
            <span className="px-4 py-2 bg-[#27c93f]/10 border border-[#27c93f]/50 text-[#27c93f] rounded-lg">Meta Llama 3.3 70B</span>
            <span className="px-4 py-2 bg-[#27c93f]/10 border border-[#27c93f]/50 text-[#27c93f] rounded-lg">Google Gemma 3 27B</span>
            <span className="px-4 py-2 bg-[#27c93f]/10 border border-[#27c93f]/50 text-[#27c93f] rounded-lg">NVIDIA Nemotron 120B</span>
            <span className="px-4 py-2 bg-[#27c93f]/10 border border-[#27c93f]/50 text-[#27c93f] rounded-lg">Qwen 3 80B</span>
            <span className="px-4 py-2 bg-[#ffbd2e]/10 border border-[#ffbd2e]/50 text-[#ffbd2e] rounded-lg">Vision Models (Multimodal)</span>
          </div>
        </motion.div>

        {/* API Key Setup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-card-bg/80 border border-card-border p-8 rounded-3xl neumorphic-shadow"
        >
          <h3 className="text-2xl font-heading text-white mb-4">API Key <span className="text-gradient">Setup & Documentation</span></h3>
          <p className="text-text-secondary mb-6">To fully activate Jarvis, you need to provide your own API keys. Get them for free from the official providers below:</p>
          <ul className="space-y-4">
            <li><strong className="text-white">Groq API:</strong> <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer" className="text-accent hover:underline mx-2">https://console.groq.com/keys</a> - Ultra-fast Llama 3 inference.</li>
            <li><strong className="text-white">Google Gemini API:</strong> <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-accent hover:underline mx-2">https://aistudio.google.com/app/apikey</a> - Access to Gemma and Gemini models.</li>
            <li><strong className="text-white">OpenRouter API:</strong> <a href="https://openrouter.ai/keys" target="_blank" rel="noreferrer" className="text-accent hover:underline mx-2">https://openrouter.ai/keys</a> - Access to Nemotron, Qwen, and Vision models.</li>
            <li><strong className="text-white">Pollinations AI:</strong> <a href="https://pollinations.ai/" target="_blank" rel="noreferrer" className="text-accent hover:underline mx-2">https://pollinations.ai/</a> - For image generation capabilities.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Portal;
