import { cubicBezier, motion } from 'framer-motion';
import React from 'react';

const name = [
  { letter: 'D', delay: 0.1 },
  { letter: 'O', delay: 0.4 },
  { letter: 'L', delay: 0.2 },
  { letter: 'A', delay: 0.5 },
  { letter: 'N', delay: 0.3 },
];

export default function HeroAnim() {
  return (
    <motion.section
      className='w-full h-screen absolute left-0 top-0 z-50 overflow-hidden bg-[#FF98A2]'
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      animate={{ clipPath: 'inset(0 0% 100% 0)' }}
      transition={{
        delay: 1.8,
        ease: cubicBezier(0.15, 1, 0.22, 1),
        duration: 1.5,
      }}
    >
      {name.map((item, i) => (
        <motion.span
          key={i}
          className={`text-[24vw] font-serif font-bold h-[24vw] absolute w-fit overflow-hidden flex items-center justify-center ${
            i % 2 == 0 ? 'top-0' : 'bottom-5'
          }`}
          style={{ left: `${i * 20}%` }}
        >
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              delay: item.delay,
              ease: cubicBezier(0.15, 1, 0.22, 1),
              duration: 1.5,
            }}
          >
            {item.letter}
          </motion.span>
        </motion.span>
      ))}
    </motion.section>
  );
}
