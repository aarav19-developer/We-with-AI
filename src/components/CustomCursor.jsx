import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const [hovered, setHovered]   = useState(false);
  const [clicked, setClicked]   = useState(false);
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let dotX  = 0, dotY  = 0;
    let raf;

    const onMove = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (!visible) setVisible(true);
    };

    // smooth ring follow via rAF
    const animate = () => {
      ringX += (dotX - ringX) * 0.14;
      ringY += (dotY - ringY) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform  = `translate(${dotX}px, ${dotY}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // detect hoverable elements
    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, label').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    document.addEventListener('mousemove',  onMove);
    document.addEventListener('mousedown',  onDown);
    document.addEventListener('mouseup',    onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    addHover();
    raf = requestAnimationFrame(animate);

    // re-scan for new interactive elements (SPA navigation)
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mousedown',  onDown);
      document.removeEventListener('mouseup',    onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* outer trailing ring */}
      <div
        ref={ringRef}
        className={`${styles.ring} ${hovered ? styles.ringHover : ''} ${clicked ? styles.ringClick : ''} ${visible ? styles.visible : ''}`}
      />
      {/* inner sharp dot */}
      <div
        ref={dotRef}
        className={`${styles.dot} ${hovered ? styles.dotHover : ''} ${clicked ? styles.dotClick : ''} ${visible ? styles.visible : ''}`}
      >
        {/* mini ZoTo Z inside dot on hover */}
        <span className={styles.dotZ}>Z</span>
      </div>
    </>
  );
}
