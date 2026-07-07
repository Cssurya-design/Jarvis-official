import React from 'react';
import { motion } from 'framer-motion';

const Portal = () => {
  const providers = [
    {
      title: "OpenRouter (Deep Reasoning)",
      desc: "OpenRouter is used to access top-tier models like Meta Llama 3.3 70B, NVIDIA Nemotron, and Qwen 3 with dynamic rate-limit handling.",
      endpoint: "https://openrouter.ai/api/v1/chat/completions",
      model: "openrouter",
      link: "https://openrouter.ai/keys",
      linkText: "openrouter.ai"
    },
    {
      title: "Groq (Extreme Speed)",
      desc: "Groq provides ultra-fast Llama 3 inference on their LPU architecture, serving as the primary brain for real-time conversational latency.",
      endpoint: "https://api.groq.com/openai/v1/chat/completions",
      model: "groq",
      link: "https://console.groq.com/keys",
      linkText: "console.groq.com"
    },
    {
      title: "Free AI Core (Mistral-Large)",
      desc: "Pollinations AI provides free, unmetered access to Mistral-Large for uncensored and versatile text generation. No API key is needed.",
      endpoint: "https://text.pollinations.ai/",
      model: "pollinations",
      link: "https://pollinations.ai",
      linkText: "pollinations.ai"
    },
    {
      title: "Free AI Core (GPT-4o)",
      desc: "Pollinations AI provides free access to GPT-4o capabilities. No API key is needed.",
      endpoint: "https://text.pollinations.ai/",
      model: "pollinations-gpt4o",
      link: "https://pollinations.ai",
      linkText: "pollinations.ai"
    },
    {
      title: "Free AI Core (Llama-3)",
      desc: "Pollinations AI provides free access to Llama-3 for high-performance inference. No API key is needed.",
      endpoint: "https://text.pollinations.ai/",
      model: "pollinations-llama",
      link: "https://pollinations.ai",
      linkText: "pollinations.ai"
    },
    {
      title: "DuckDuckGo AI (Free/Limitless)",
      desc: "DuckDuckGo AI offers free and limitless conversational capabilities with built-in privacy.",
      endpoint: "Built-in integration",
      model: "duckduckgo",
      link: "https://duckduckgo.com/aichat",
      linkText: "duckduckgo.com"
    }
  ];

  const permissions = [
    { name: "Camera", desc: "Allow only while using the app" },
    { name: "Contacts", desc: "Allow" },
    { name: "Location", desc: "Allow only while using the app" },
    { name: "Microphone", desc: "Allow only while using the app" },
    { name: "Notifications", desc: "Allow notifications" },
    { name: "Phone", desc: "Allow" },
    { name: "Change system settings", desc: "Allow permission (Found at the bottom of the App Info page)" }
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
          Open-Source <span className="text-gradient">Portal</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium max-w-2xl mx-auto">
          Welcome back. Jarvis is 100% free and open-source. Bring your own API keys to unlock its full potential.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
          <p className="text-text-secondary mb-4">Includes: <strong className="text-white">Groq, OpenRouter, Pollinations AI, DuckDuckGo AI</strong></p>
          <p className="text-sm mb-8">Status: <span className="text-[#ffbd2e]">Free & Open-Source (BYOK)</span></p>
          
          <a href="https://www.mediafire.com/file/4ach6x9wu6vdu2p/J.A.R.V.I.S(4.1.0).apk/file" target="_blank" rel="noreferrer" className="btn-primary w-full text-center mt-auto !bg-[#ffbd2e]/10 !text-[#ffbd2e] !border-[#ffbd2e]/50 hover:!bg-[#ffbd2e]/20">
            Download APK
          </a>
        </motion.div>

        {/* Itch.io Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 md:col-span-1 lg:col-span-2 bg-card-bg/60 glass-panel border border-card-border p-8 rounded-3xl hover:border-accent/50 transition-all flex flex-col neumorphic-shadow items-center justify-center relative overflow-hidden"
        >
          <h3 className="text-2xl font-heading text-white mb-6 self-start">Get it on <span className="text-gradient">Itch.io</span></h3>
          <div className="w-full overflow-auto flex justify-center">
            <iframe 
              frameBorder="0" 
              src="https://itch.io/embed/4712303?linkback=true&bg_color=e2e8f3&fg_color=27a7f7&link_color=27a7f7" 
              width="552" 
              height="167" 
              title="Jarvis on Itch.io"
            >
              <a href="https://surya-cs.itch.io/jarvis">Jarvis by surya-cs</a>
            </iframe>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {providers.map((provider, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card-bg/50 glass-panel border border-card-border p-6 rounded-2xl hover:border-accent/50 transition-all neumorphic-shadow"
              >
                <h3 className="text-xl font-heading text-white mb-2">{provider.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{provider.desc}</p>
                <ul className="space-y-2 font-mono text-xs relative z-20">
                  <li><strong className="text-accent">Endpoint:</strong> <span className="bg-black/50 px-2 py-1 rounded text-blue-300 inline-block mt-1">{provider.endpoint}</span></li>
                  <li><strong className="text-accent">Model:</strong> <span className="bg-black/50 px-2 py-1 rounded text-blue-300 inline-block mt-1">{provider.model}</span></li>
                  <li><strong className="text-accent">Get Key:</strong> <a href={provider.link} target="_blank" rel="noreferrer" className="bg-accent/10 px-2 py-1 rounded text-accent hover:bg-accent hover:text-white transition-all inline-block mt-1">{provider.linkText}</a></li>
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Permissions Setup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-card-bg/80 border border-card-border p-8 rounded-3xl neumorphic-shadow mt-8"
        >
          <h3 className="text-2xl font-heading text-white mb-4">Required <span className="text-gradient">Permissions</span></h3>
          <p className="text-text-secondary mb-4">To ensure Jarvis works perfectly, please Long Press the Jarvis app icon, go to <strong className="text-white">App info (i)</strong>, and configure the following permissions:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {permissions.map((perm, idx) => (
              <div key={idx} className="bg-card-bg/50 border border-card-border p-4 rounded-xl flex flex-col">
                <span className="text-white font-bold mb-1">{perm.name}</span>
                <span className="text-accent text-sm">{perm.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Portal;
