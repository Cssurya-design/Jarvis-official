import React from 'react';
import { motion, useTransform } from 'framer-motion';

const AnimatedBackground = ({ scrollYProgress }) => {
  // Map scroll progress to different positions and scales for the Jarvis Core
  // Action by action transformations
  
  // Hero (0-0.3): Large and centered
  // Features (0.3-0.6): Shift to right, medium size
  // Gallery (0.6-0.9): Shift to left, small size
  // Download (0.9-1.0): Center again, massive pulse

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 0.9, 0.95, 1],
    [1, 1, 0.7, 0.7, 0.5, 0.5, 1.2, 1.2]
  );

  const xPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 0.9, 0.95, 1],
    ["-50%", "-50%", "-80%", "-80%", "-20%", "-20%", "-50%", "-50%"]
  );
  
  const leftPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 0.9, 0.95, 1],
    ["50%", "50%", "80%", "80%", "20%", "20%", "50%", "50%"]
  );

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.9, 0.95, 1],
    [1, 1, 0.5, 0.8]
  );

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-bg-color">
      {/* Dynamic Grid Background */}
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAyMTIsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"
        style={{
          y: gridY
        }}
      />

      {/* Main Core / Jarvis Icon */}
      <motion.div
        className="absolute top-1/2 flex items-center justify-center mix-blend-screen"
        style={{
          x: xPosition,
          y: "-50%",
          scale: scale,
          left: leftPosition,
          opacity: opacity,
          rotate: rotate,
        }}
      >
        {/* Glow Effects */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] border border-accent/30 rounded-full border-dashed" 
        />
        <motion.div 
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] border border-accent/10 rounded-full border-dotted" 
        />
        
        {/* The Core Image */}
        <img 
          src="assets/jarvis_icon.png" 
          alt="Jarvis Core" 
          className="w-64 h-64 object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.8)] relative z-10"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
