'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import Background from '@/components/Background';
import Hero from '@/components/Hero';
import HeroAnim from '@/components/HeroAnim';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='relative bg-transparent'>
      <Head>
        <title>Hi</title>
      </Head>
      <Hero />
      <HeroAnim />
      <Background />
    </main>
  );
}
