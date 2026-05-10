"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestimonialSlider = dynamic(() => import('./TestimonialSlider'), {
  ssr: false,
});

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mt-20 tracking-wide py-12 border-t border-neutral-800">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-white">
        What People
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {' '}
          are saying
        </span>
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        {isClient && <TestimonialSlider />}
      </div>
    </div>
  );
};

export default Testimonials;
