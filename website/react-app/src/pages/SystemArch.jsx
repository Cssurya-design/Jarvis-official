import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Zap } from 'lucide-react';

const SystemArch = () => {
  const sections = [
    {
      icon: <Code size={32} />,
      title: "Frontend UI Layer",
      desc: "Built with modern React and Framer Motion. The UI leverages hardware-accelerated CSS animations and a custom Canvas frame-sequence engine for the fluid, cinematic visualizer without draining the battery."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Native OS Bridge (Java/Kotlin)",
      desc: "Through custom plugins, the Javascript layer communicates directly with Android system APIs. This allows Jarvis to:",
      list: [
        "Read battery telemetry and charging states.",
        "Override system brightness and volume controls.",
        "Trigger the device's Haptic feedback motor.",
        "Access the Camera LED for the flashlight capability.",
        "Read and write to the global system clipboard."
      ]
    },
    {
      icon: <Zap size={32} />,
      title: "Intent Routing Engine",
      desc: "When the LLM determines an action (e.g., \"Play music\"), the response is parsed locally. The app then constructs an Android Intent (e.g., android.intent.action.VIEW) to deeply link into specific apps like Spotify, Maps, or the native Dialer."
    }
  ];

  return (
    <div className="min-h-screen py-24 px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16 px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 drop-shadow-lg text-white leading-tight">
          System <span className="text-gradient block sm:inline">Architecture</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary font-medium">How Jarvis bridges Web and Native.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-heading text-accent mb-4 sm:mb-6 px-4">Hybrid Native Bridge</h2>
          <p className="text-base sm:text-lg text-text-primary/90 leading-relaxed max-w-3xl mx-auto px-4">
            J.A.R.V.I.S. is not just a web wrapper. It utilizes a highly optimized hybrid architecture combining a high-performance web frontend with deep native Android integrations via custom Capacitor bridges.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-bg/50 glass-panel border border-accent/20 p-6 sm:p-8 md:p-10 rounded-3xl neumorphic-shadow hover:border-accent/50 transition-all flex flex-col md:flex-row gap-4 sm:gap-6 items-start mx-4 sm:mx-0"
            >
              <div className="bg-accent/10 p-4 rounded-2xl text-accent border border-accent/20 flex-shrink-0">
                {section.icon}
              </div>
              <div>
                <h3 className="text-2xl font-heading text-white mb-4">{section.title}</h3>
                <p className="text-lg text-text-primary/80 leading-relaxed font-medium">
                  {section.desc}
                </p>
                {section.list && (
                  <ul className="mt-6 space-y-3 pl-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start text-text-primary/90">
                        <span className="text-accent mr-3 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemArch;
