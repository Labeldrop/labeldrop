'use client';

import { useEffect } from 'react';

const sectionBg: Record<string, string> = {
  home:     '#EEF4FA',
  about:    '#ffffff',
  why:      '#EEF4FA',
  audience: '#ffffff',
  process:  '#1D65AD',
  showcase: '#DCE8F5',
  contact:  '#ffffff',
};

export default function ScrollBgColor() {
  useEffect(() => {
    document.body.style.transition = 'background 0.7s ease';
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const onScroll = () => {
      let active = 'home';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - window.innerHeight / 2) active = s.id;
      });
      document.body.style.background = sectionBg[active] ?? '#ffffff';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
