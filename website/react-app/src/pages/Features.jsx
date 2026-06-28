import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Music, Play, Hash } from 'lucide-react';

const Features = () => {
  const deepDives = [
    {
      title: "Hardware Mastery",
      titleGradient: "Mastery",
      desc: "Jarvis bypasses traditional UI limitations by interfacing directly with your phone's hardware via Capacitor's native bridge.",
      list: [
        { strong: "Flashlight Control:", text: " Instantly toggle the camera LED." },
        { strong: "Brightness Override:", text: " Adjust screen luminosity programmatically." },
        { strong: "Volume Protocol:", text: " Raise, lower, or mute system audio streams." },
        { strong: "Haptics Engine:", text: " Precise vibration feedback across interactions." }
      ],
      visual: (
        <div className="bg-[#0a0e17]/80 glass-panel border border-card-border rounded-xl shadow-2xl overflow-hidden font-mono text-sm neumorphic-shadow w-full">
          <div className="bg-[#121826] border-b border-card-border p-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6 text-left">
            <div className="mb-2"><span className="text-accent">&gt;</span> <span className="text-blue-300">await SystemControl.toggleFlashlight({'{'}enable: true{'}'})</span></div>
            <div className="text-text-secondary pl-4 border-l-2 border-accent">Hardware API engaged. LED Active.</div>
          </div>
        </div>
      ),
      reverse: false
    },
    {
      title: "Deep App Integration",
      titleGradient: "Integration",
      desc: "Why open apps manually when Jarvis can launch specific intent protocols instantly?",
      list: [
        { strong: "Communication:", text: " Open WhatsApp, Telegram, or Gmail directly." },
        { strong: "Media:", text: " Launch Spotify, YouTube, or Netflix." },
        { strong: "Social:", text: " Instant access to Instagram, Twitter/X, and Facebook." },
        { strong: "System:", text: " Launch Chrome, Maps, Drive, and the Play Store." }
      ],
      visual: (
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center p-4 sm:p-8 bg-card-bg/50 border border-card-border rounded-3xl neumorphic-shadow w-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-lg bg-[#25D366] transition-transform hover:scale-110">
            <MessageCircle size={28} />
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-lg bg-[#1DB954] transition-transform hover:scale-110">
            <Music size={28} />
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-lg bg-[#FF0000] transition-transform hover:scale-110">
            <Play size={28} />
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-lg bg-[#000000] border border-white/20 transition-transform hover:scale-110">
            <Hash size={28} />
          </div>
        </div>
      ),
      reverse: true
    },
    {
      title: "Advanced Telemetry",
      titleGradient: "Telemetry",
      desc: "Jarvis constantly monitors device health to ensure optimal performance.",
      list: [
        { strong: "Battery Status:", text: " Real-time tracking of charge level and discharging state." },
        { strong: "Network Health:", text: " Monitors active connections, bandwidth type, and downlink speed." },
        { strong: "Device Info:", text: " Access OS versions, user agent data, and system locale settings." }
      ],
      visual: (
        <div className="bg-[#05070a]/80 p-4 sm:p-8 rounded-3xl border border-card-border neumorphic-shadow w-full space-y-4 sm:space-y-6">
          <div className="flex justify-between border-b border-card-border pb-2">
            <span className="text-text-secondary text-sm font-mono">Power State</span>
            <span className="text-gradient font-bold tracking-widest text-sm">Discharging</span>
          </div>
          <div className="flex justify-between border-b border-card-border pb-2">
            <span className="text-text-secondary text-sm font-mono">Battery Level</span>
            <span className="text-gradient font-bold tracking-widest text-sm">84%</span>
          </div>
          <div className="flex justify-between border-b border-card-border pb-2">
            <span className="text-text-secondary text-sm font-mono">Network</span>
            <span className="text-gradient font-bold tracking-widest text-sm">4G LTE / Online</span>
          </div>
        </div>
      ),
      reverse: false
    },
    {
      title: "Neural AI Engine",
      titleGradient: "Engine",
      desc: "Powered by a robust OpenRouter infrastructure, giving you access to the world's most advanced LLMs dynamically.",
      list: [
        { strong: "Multi-Model Intelligence:", text: " Utilizes Llama 3, Gemma, Nemotron, and Qwen seamlessly." },
        { strong: "Multimodal Vision:", text: " Send images to Jarvis for detailed descriptions and visual analysis." },
        { strong: "Structured Data:", text: " Advanced JSON parsing capabilities for complex data processing." },
        { strong: "Rate-Limit Resilience:", text: " Automatic fallback mechanisms ensure 100% uptime." }
      ],
      visual: (
        <div className="bg-[#0a0e17]/80 glass-panel border border-card-border rounded-xl shadow-2xl overflow-hidden font-mono text-sm neumorphic-shadow w-full">
          <div className="bg-[#121826] border-b border-card-border p-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6 text-left space-y-4">
            <div>
              <div className="mb-1"><span className="text-accent">&gt;</span> <span className="text-blue-300">Analyzing with Llama-3.3-70b-instruct...</span></div>
              <div className="text-text-secondary pl-4 border-l-2 border-accent">Response received in 1.2s.</div>
            </div>
            <div>
              <div><span className="text-accent">&gt;</span> <span className="text-blue-300">Vision module activated. Processing image...</span></div>
            </div>
          </div>
        </div>
      ),
      reverse: true
    },
    {
      title: "Native Productivity",
      titleGradient: "Productivity",
      desc: "Jarvis connects with your phone's native utilities for a frictionless workflow.",
      list: [
        { strong: "Clipboard Manager:", text: " Instantly read or write to your system clipboard." },
        { strong: "Maps & Navigation:", text: " Launch Google Maps queries directly from voice commands." },
        { strong: "Dialer Integration:", text: " Command Jarvis to prepare phone calls." },
        { strong: "Native Sharing:", text: " Share data seamlessly through the Android share sheet." }
      ],
      visual: (
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center p-4 sm:p-8 bg-card-bg/50 border border-card-border rounded-3xl neumorphic-shadow w-full">
          <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(66,133,244,0.3)] bg-[#4285F4]">Nav</div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(52,168,83,0.3)] bg-[#34A853]">Call</div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(234,67,53,0.3)] bg-[#EA4335]">Share</div>
        </div>
      ),
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen py-24 px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 drop-shadow-lg text-white leading-tight">
          Beyond Human <span className="text-gradient block sm:inline">Capabilities</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary font-medium">Deep dive into the native Android integrations powering Jarvis.</p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-20 lg:space-y-32">
        {deepDives.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
          >
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-6 border-l-4 border-accent pl-4 sm:pl-6 text-white leading-tight">
                {section.title.replace(section.titleGradient, '')} <span className="text-gradient">{section.titleGradient}</span>
              </h2>
              <p className="text-lg md:text-xl text-text-primary/90 leading-relaxed mb-8 pl-4 sm:pl-6">
                {section.desc}
              </p>
              <ul className="space-y-4 pl-4 sm:pl-6">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-3 font-bold mt-1">•</span>
                    <span className="text-base sm:text-lg text-text-primary/80">
                      <strong className="text-white">{item.strong}</strong>{item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              {section.visual}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
