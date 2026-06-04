'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scrollProgress');
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!bar) return;
          const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          bar.style.width = pct + '%';
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress-track">
      <div className="scroll-progress" id="scrollProgress" />
    </div>
  );
}
