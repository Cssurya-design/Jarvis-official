import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const sections = [
    {
      title: "1. Information We Do Not Collect",
      content: (
        <p>
          J.A.R.V.I.S. is built with extreme privacy in mind. <strong className="text-white">We do not collect, store, or transmit any personal data, voice recordings, or usage analytics to our servers.</strong> The application does not have a centralized database for user profiles.
        </p>
      )
    },
    {
      title: "2. Third-Party API Providers",
      content: (
        <p>
          Because Jarvis operates on a Bring Your Own Key (BYOK) architecture, your voice transcripts, text prompts, and images are sent directly from your device to the API providers you configure (e.g., Groq, Google, OpenRouter). By using Jarvis, your data is subject to the respective privacy policies of these third-party services.
        </p>
      )
    },
    {
      title: "3. Device Permissions",
      content: (
        <>
          <p className="mb-4">To function as a personal assistant, Jarvis requires certain Android permissions, which are strictly processed locally:</p>
          <ul className="space-y-4 pl-6 border-l-2 border-accent/30">
            <li><strong className="text-white">Microphone:</strong> Used exclusively for speech-to-text recognition. Audio is never recorded in the background.</li>
            <li><strong className="text-white">Camera:</strong> Used strictly to toggle the hardware flashlight/LED and for explicit Vision AI queries.</li>
            <li><strong className="text-white">Query All Packages:</strong> Used locally to determine if target apps (like WhatsApp or Spotify) are installed before attempting to launch them via intents.</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Local Data Storage",
      content: (
        <p>
          Your API keys, preferences, and Google login state are stored securely on your local device storage using standard Android <code className="bg-black/50 px-2 py-1 rounded text-accent">SharedPreferences</code>. This data never leaves your device unless sent as an authorization header to the official API endpoints.
        </p>
      )
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
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium">Your data stays on your device.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-12 text-lg leading-relaxed text-text-primary/90">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-card-bg/40 glass-panel border border-card-border p-8 md:p-10 rounded-3xl neumorphic-shadow hover:border-accent/30 transition-all"
          >
            <h2 className="text-2xl font-heading text-accent mb-6">{section.title}</h2>
            {section.content}
          </motion.section>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8 text-sm text-text-secondary"
        >
          Last Updated: June 2026. For privacy concerns, contact <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cssurya2006@gmail.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">cssurya2006@gmail.com</a>.
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
