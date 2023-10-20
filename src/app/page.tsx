'use client';
import React from 'react';

import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VideoGallery from '@/components/VideoGallery';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <VideoGallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
