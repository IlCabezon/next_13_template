'use client';

// native
import { useEffect, useRef, useState } from 'react';

// styles
import styles from './navbar.module.css';

export default function Header() {
  const nav = useRef(nav);

  const initialFlexProps = {
    minW: { base: '85vw', '2k': '1660px' },
    position: 'absolute',
    borderRadius: '10px',
    top: 25,
  };

  const [flexProps, setflexProps] = useState(initialFlexProps);

  const scrollHandler = () => {
    if (nav && nav.current) {
      const { top } = nav.current.getBoundingClientRect();
      if (top <= -25) {
        setflexProps({
          minWidth: '100vw',
          position: 'fixed',
          top: 0,
          background: `#07141ec6`,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(239, 239, 239, 0.3)',
          css: {
            WebkitBackdropFilter: 'blur(13.5px)',
          },
        });
      } else {
        setflexProps(initialFlexProps);
      }
    }
  };
  useEffect(() => {
    if (nav && nav.current) {
      window.addEventListener('scroll', scrollHandler, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nav]);

  return <div className={styles.mainContainer}></div>;
}
