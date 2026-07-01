import React from 'react';
import { motion } from 'framer-motion';

const ApiDocs = () => {
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
      desc: "Pollinations AI provides free, unmetered access to Mistral-Large for uncensored and versatile text generation.",
      endpoint: "https://text.pollinations.ai/",
      model: "pollinations",
      link: "https://pollinations.ai",
      linkText: "pollinations.ai"
    },
    {
      title: "Free AI Core (GPT-4o)",
      desc: "Pollinations AI provides free access to GPT-4o capabilities without API keys.",
      endpoint: "https://text.pollinations.ai/",
      model: "pollinations-gpt4o",
      link: "https://pollinations.ai",
      linkText: "pollinations.ai"
    },
    {
      title: "Free AI Core (Llama-3)",
      desc: "Pollinations AI provides free access to Llama-3 for high-performance inference.",
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

  return (
    <div className="min-h-screen py-24 px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 drop-shadow-lg text-white">
          API <span className="text-gradient">Documentation</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium">Integrate your BYOK models into Jarvis.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-16 text-lg leading-relaxed text-text-primary/90">
        
        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading text-accent mb-6 border-b border-card-border pb-4">1. The BYOK Architecture</h2>
          <p>
            J.A.R.V.I.S. operates entirely on a <strong className="text-white">Bring Your Own Key (BYOK)</strong> model. 
            This ensures complete privacy, zero subscription fees, and maximum performance by allowing direct client-to-API 
            communication without intermediary servers.
          </p>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-heading text-accent mb-6 border-b border-card-border pb-4">2. Supported API Providers</h2>
          <div className="space-y-6">
            {providers.map((provider, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card-bg/50 glass-panel border border-card-border p-8 rounded-2xl hover:border-accent/50 transition-all neumorphic-shadow"
              >
                <h3 className="text-2xl font-heading text-white mb-3">{provider.title}</h3>
                <p className="mb-6">{provider.desc}</p>
                <ul className="space-y-3 font-mono text-sm relative z-20">
                  <li><strong className="text-accent">Endpoint:</strong> <span className="bg-black/50 px-2 py-1 rounded text-blue-300 inline-block mt-1 sm:mt-0">{provider.endpoint}</span></li>
                  <li><strong className="text-accent">Model:</strong> <span className="bg-black/50 px-2 py-1 rounded text-blue-300 inline-block mt-1 sm:mt-0">{provider.model}</span></li>
                  <li><strong className="text-accent">Get Key:</strong> <a href={provider.link} target="_blank" rel="noreferrer" className="bg-accent/10 px-2 py-1 rounded text-accent hover:bg-accent hover:text-white transition-all inline-block mt-1 sm:mt-0">{provider.linkText}</a></li>
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-heading text-accent mb-6 border-b border-card-border pb-4">3. Rate Limits & Security</h2>
          <p>
            Because Jarvis connects directly from your Android device to the providers, you are subject to the rate limits of 
            your specific tier (Free or Paid) with each provider. <strong className="text-white">Your API keys are stored securely and locally on 
            your device using encrypted Android SharedPreferences.</strong> They are never transmitted to any third-party developer servers.
          </p>
        </motion.section>

      </div>
    </div>
  );
};

export default ApiDocs;
