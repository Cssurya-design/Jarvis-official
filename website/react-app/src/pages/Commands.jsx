import React from 'react';
import { motion } from 'framer-motion';

const Commands = () => {
  const commandCategories = [
    {
      title: "HARDWARE MASTERY",
      commands: [
        { cmds: ['"Turn on flashlight"', '"Flashlight on"'], res: '[SYS] Engages camera LED array.' },
        { cmds: ['"Set brightness to maximum"', '"Screen brightness 50%"'], res: '[SYS] Modifies display luminosity matrix.' },
        { cmds: ['"Increase volume"', '"Mute audio"'], res: '[SYS] Modifies system audio channels.' }
      ]
    },
    {
      title: "APP INTEGRATION",
      commands: [
        { cmds: ['"Open WhatsApp"', '"Launch Spotify"'], res: '[SYS] Triggers native OS intent to launch target application.' },
        { cmds: ['"Play music"'], res: '[SYS] Routes intent to default media handler (Spotify/YouTube Music).' }
      ]
    },
    {
      title: "TELEMETRY & NAVIGATION",
      commands: [
        { cmds: ['"What is my battery level?"'], res: '[SYS] Reads hardware battery percentage and charging state.' },
        { cmds: ['"Navigate to London"', '"Open maps for New York"'], res: '[SYS] Constructs deep link payload for Google Maps routing.' }
      ]
    },
    {
      title: "NATIVE UTILITIES",
      commands: [
        { cmds: ['"Copy to clipboard"', '"Read clipboard"'], res: '[SYS] Accesses the native system clipboard for reading/writing.' },
        { cmds: ['"Call John"', '"Dial 1234567890"'], res: '[SYS] Launches the native dialer with the specified number.' },
        { cmds: ['"Share this"', '"Send to friend"'], res: '[SYS] Triggers the Android native share sheet.' },
        { cmds: ['"Open google.com"', '"Search for..."'], res: '[SYS] Launches URL in the default native browser.' },
        { cmds: ['"Vibrate device"', '"Show notification"'], res: '[SYS] Triggers haptics engine and native toast messages.' }
      ]
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
          Command <span className="text-gradient">Library</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium">A comprehensive index of natural language protocols.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto bg-[#0a0e17]/80 glass-panel border border-card-border rounded-xl shadow-2xl overflow-hidden font-mono text-sm md:text-base neumorphic-shadow"
      >
        <div className="bg-[#121826] border-b border-card-border p-4 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-text-secondary text-xs ml-2 tracking-wider">jarvis_protocol_db.exe</span>
        </div>
        
        <div className="p-6 md:p-10 space-y-10 text-left">
          {commandCategories.map((category, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
            >
              <div className="text-accent/80 tracking-widest font-bold mb-4">
                === {category.title} ===
              </div>
              <div className="space-y-4">
                {category.commands.map((cmd, i) => (
                  <div key={i} className="pl-4 border-l-2 border-card-border">
                    <div className="text-white mb-1">
                      <span className="text-accent mr-2">&gt;</span>
                      {cmd.cmds.map((c, j) => (
                        <span key={j}>
                          <span className="text-blue-300">{c}</span>
                          {j < cmd.cmds.length - 1 && <span className="text-text-secondary mx-2">|</span>}
                        </span>
                      ))}
                    </div>
                    <div className="text-text-secondary ml-4">
                      {cmd.res}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
          <div className="pt-8 flex items-center">
            <span className="text-accent mr-2">C:\Jarvis\Engine&gt;</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-2 h-5 bg-white inline-block"
            ></motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Commands;
