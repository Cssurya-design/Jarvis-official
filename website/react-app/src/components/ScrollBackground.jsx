import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const FRAME_COUNT = 169;
const FRAME_PREFIX = 'frame_';
const FRAME_SUFFIX = '.jpg';

export default function ScrollBackground() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isHomeRef = useRef(isHome);
  
  useEffect(() => {
    isHomeRef.current = isHome;
    // Force re-render of current frame when route changes
    renderFrame(currentFrameRef.current);
  }, [isHome]);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
  // Preloading state
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const homeFramesRef = useRef([]);
  const otherFramesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const tickingRef = useRef(false);

  // 1. Preload Frames
  useEffect(() => {
    let loaded = 0;
    const TOTAL_FRAMES = FRAME_COUNT * 2;
    const homeFrames = [];
    const otherFrames = [];
    
    const onLoadOrError = () => {
      loaded++;
      setLoadedCount(loaded);
      if (loaded === TOTAL_FRAMES) {
        homeFramesRef.current = homeFrames;
        otherFramesRef.current = otherFrames;
        setIsLoaded(true);
      }
    };

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const paddedNumber = i.toString().padStart(4, '0');
      
      const imgHome = new Image();
      imgHome.src = `/frames/${FRAME_PREFIX}${paddedNumber}${FRAME_SUFFIX}`;
      imgHome.onload = onLoadOrError;
      imgHome.onerror = onLoadOrError;
      homeFrames.push(imgHome);

      const imgOther = new Image();
      imgOther.src = `/tunnel-frames/${FRAME_PREFIX}${paddedNumber}${FRAME_SUFFIX}`;
      imgOther.onload = onLoadOrError;
      imgOther.onerror = onLoadOrError;
      otherFrames.push(imgOther);
    }
  }, []);

  // 2. Setup Canvas & Global Scroll Listener
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    contextRef.current = ctx;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          updateScroll();
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also attach to ResizeObserver on body so if page height changes we update
    const resizeObserver = new ResizeObserver(() => {
        updateScroll();
    });
    resizeObserver.observe(document.body);

    updateScroll();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [isLoaded]);

  const updateScroll = () => {
    // Scroll progress relative to ENTIRE DOCUMENT
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const scrollY = window.scrollY;
    
    // Clamp progress
    const progress = maxScroll === 0 ? 0 : Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    // Pick frame
    const frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      renderFrame(frameIndex);
    }
  };

  const renderFrame = (index) => {
    const activeFrames = isHomeRef.current ? homeFramesRef.current : otherFramesRef.current;
    if (!contextRef.current || !canvasRef.current || !activeFrames[index]) return;
    
    const img = activeFrames[index];
    if (!img.complete || img.naturalWidth === 0) return;

    const ctx = contextRef.current;
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const iw = img.width;
    const ih = img.height;
    
    // Default cover scale ensures NO gaps
    const scale = Math.max(cw / iw, ch / ih);
    
    // Calculate centered position
    let x = (cw / 2) - (iw / 2) * scale;
    const y = (ch / 2) - (ih / 2) * scale;
    
    // On mobile, if we want to center the Iron Man (which might be slightly off-center), 
    // we could adjust x here, but centering usually works best.
    // If it needs shifting on mobile: 
    // if (window.innerWidth < 768 && !isHomeRef.current) { x = x + ... }
    
    // Draw without clearing since alpha is false
    ctx.drawImage(img, x, y, iw * scale, ih * scale);
  };

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-color"
          >
            <div className="w-64 h-1 bg-card-border rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
              />
            </div>
            <p className="text-text-secondary font-mono text-sm">
              INITIALIZING JARVIS CORE... {Math.round((loadedCount / (FRAME_COUNT * 2)) * 100)}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-[-1] pointer-events-none bg-bg-color">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 mix-blend-multiply" />
      </div>
    </>
  );
}
