import React, { useEffect } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './navigation.module.css';
import { Link, useLocation } from '@remix-run/react';

const SECTION_DATA = [
    { label: 'Edge SSR (streaming)', path: '/' },
    { label: 'Edge SSR', path: '/edge' },
    { label: 'Node.js SSR (streaming)', path: '/node-streaming' },
    { label: 'Node.js SSR', path: '/node' }, 
]

export function Navigation() {
  const location = useLocation();
  const activeIndex = SECTION_DATA.findIndex(section => {
    return section.path === location.pathname
  })
  const activeSection = SECTION_DATA[activeIndex];
  return (
    <div
      className={styles.root}
      style={{
        ['--x' as string]: ['100%', '62%', '38%', '10%'][activeIndex],
      }}
    >
      <div aria-hidden className={styles.stroke}></div>
      <div className={styles.switcher}>
        {
          SECTION_DATA.map((section) => {
            const isActive = section.label === activeSection.label;
            return (
              <Link
                className={clsx(styles.button, isActive && styles.active)}
                key={section.label}
                to={section.path}
                type="button"
              >
                {section.label}
  
                {isActive ? (
                  <>
                    <motion.div
                      aria-hidden
                      className={styles.glow}
                      layoutId="glow"
                      transition={{
                        delay: 0.03,
                        type: 'spring',
                        stiffness: 125,
                        damping: 20,
                        mass: 1,
                      }}
                    />
                    <motion.div
                      aria-hidden
                      className={styles.pill}
                      layoutId="pill"
                      transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 20,
                        mass: 1,
                      }}
                    />
                  </>
                ) : null}
              </Link>
            );
          })
        }
      </div>
    </div>
  )
}