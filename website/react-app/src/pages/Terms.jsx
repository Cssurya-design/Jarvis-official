import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By downloading, installing, or using the J.A.R.V.I.S. Android application, you agree to be bound by these Terms of Service. This software is provided "as is", completely free and open-source.
        </p>
      )
    },
    {
      title: "2. User Responsibilities (BYOK)",
      content: (
        <p>
          You are solely responsible for obtaining, managing, and securing your own API keys from third-party providers (Groq, Google, OpenRouter, etc.). <strong className="text-white">You agree that you are solely responsible for any costs, usage limits, or account bans incurred with these third-party providers as a result of using this application.</strong>
        </p>
      )
    },
    {
      title: "3. Disclaimer of Liability",
      content: (
        <p>
          The developer (Surya.CS) shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this software. This includes, but is not limited to, hardware damage, data loss, or API quota exhaustion.
        </p>
      )
    },
    {
      title: "4. Modification of Native OS",
      content: (
        <p>
          Jarvis uses native Android intents to control device hardware (e.g., volume, brightness, flashlight). While tested for stability, modifying system states programmatically is done at your own risk.
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
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-xl text-text-secondary font-medium">Rules of engagement.</p>
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
          Last Updated: June 2026. For legal inquiries, contact <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cssurya2006@gmail.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">cssurya2006@gmail.com</a>.
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
