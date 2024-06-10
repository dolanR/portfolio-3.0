import { cubicBezier, motion } from 'framer-motion';
import React from 'react';

export default function Hero() {
  return (
    <section className='w-screen h-screen overflow-hidden'>
      {Array.from('DOLAN').map((letter, i) => (
        <motion.span
          key={i}
          className={`text-[24vw] font-serif text-lenis-pink font-bold h-[24vw] absolute w-fit overflow-hidden flex items-center justify-center ${
            i % 2 == 0 ? 'top-0' : 'bottom-5'
          }`}
          style={{ left: `${i * 20}%` }}
          animate={{ top: 0 }}
          transition={{
            delay: 1.8,
            ease: cubicBezier(0.15, 1, 0.22, 1),
            duration: 1.5,
          }}
        >
          <span>{letter}</span>
        </motion.span>
      ))}
      <div className='top-[19vw] px-4 py-1 absolute right-0 overflow-hidden'>
        <motion.p
          className='text-lenis-pink font-serif font-bold text-[7vw]'
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            delay: 2.4,
            ease: cubicBezier(0.22, 1, 0.36, 1),
            duration: 1,
          }}
        >
          Reynolds
        </motion.p>
      </div>
      <div className='top-[29vw] px-4 absolute right-0 overflow-hidden'>
        <motion.p
          className='text-white opacity-75 font-serif font-bold text-[2.5vw]'
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            delay: 2.8,
            ease: cubicBezier(0.22, 1, 0.36, 1),
            duration: 1,
          }}
        >
          Full-Stack Developer
        </motion.p>
      </div>
    </section>
  );
}
